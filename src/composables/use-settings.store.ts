import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ClueId } from '~/utils/schemas/clue-id.schema';
import { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';
import { GhostFilteringService } from '~/utils/services/ghost-filtering/ghost-filtering.service';
import { ClueStatus } from '~/utils/types/clue-status.enum';
import type { GhostId } from '~/utils/types/ghost-id.enum';

const clueStateKeys = new Set<ClueId>([
  ClueId.EmfLevel5,
  ClueId.Ultraviolet,
  ClueId.GhostWriting,
  ClueId.FreezingTemperatures,
  ClueId.DotsProjector,
  ClueId.GhostOrb,
  ClueId.SpiritBox,
  ClueId.DisturbedSaltPile,
]);

const defaultClueStates = {
  [ClueId.EmfLevel5]: ClueStatus.Null,
  [ClueId.Ultraviolet]: ClueStatus.Null,
  [ClueId.GhostWriting]: ClueStatus.Null,
  [ClueId.FreezingTemperatures]: ClueStatus.Null,
  [ClueId.DotsProjector]: ClueStatus.Null,
  [ClueId.GhostOrb]: ClueStatus.Null,
  [ClueId.SpiritBox]: ClueStatus.Null,
  [ClueId.DisturbedSaltPile]: ClueStatus.Null,
} as const satisfies Record<ClueId, ClueStatus>;

const defaultCurrentDifficulty = GameDifficultyId.Amateur;

const defaultSelectedGhostId = null;

const defaultShowAllGhosts = true;

export const useSettings = defineStore(
  'app-settings',
  () => {
    const clueStates = ref<Record<ClueId, ClueStatus>>({ ...defaultClueStates });

    const currentDifficulty = ref<GameDifficultyId>(defaultCurrentDifficulty);

    const selectedGhostId = ref<GhostId | null>(defaultSelectedGhostId);

    const showAllGhosts = ref<boolean>(defaultShowAllGhosts);

    const excludedClues = computed<ReadonlySet<ClueId>>(() => {
      const set = new Set<ClueId>();

      for (const id of clueStateKeys) {
        if (clueStates.value[id] === ClueStatus.Excluded) {
          set.add(id);
        }
      }

      return set;
    });

    const foundClues = computed<ReadonlySet<ClueId>>(() => {
      const set = new Set<ClueId>();

      for (const id of clueStateKeys) {
        if (clueStates.value[id] === ClueStatus.Found) {
          set.add(id);
        }
      }

      return set;
    });

    const possibleGhosts = computed<ReadonlySet<GhostId>>(() => {
      return GhostFilteringService.getPossibleGhosts(
        excludedClues.value,
        foundClues.value,
        currentDifficulty.value
      );
    });

    function resetClues(): void {
      clueStates.value = { ...defaultClueStates };
    }

    function updateSelectedGhost(newSelectedGhost: GhostId): void {
      selectedGhostId.value = selectedGhostId.value !== newSelectedGhost ? newSelectedGhost : null;
    }

    function isClueRelevant(clue: ClueId): boolean {
      if (clueStates.value[clue] !== ClueStatus.Null) {
        return true;
      }

      const possibleGhostsCount = possibleGhosts.value.size;

      if (possibleGhostsCount <= 1) {
        return false;
      }

      const hypotheticalPossibleGhostsCount = GhostFilteringService.getPossibleGhosts(
        excludedClues.value,
        new Set(foundClues.value).add(clue),
        currentDifficulty.value
      ).size;

      return (
        hypotheticalPossibleGhostsCount > 0 && hypotheticalPossibleGhostsCount < possibleGhostsCount
      );
    }

    return {
      clueStates,
      currentDifficulty,
      selectedGhostId,
      showAllGhosts,

      excludedClues,
      foundClues,
      possibleGhosts,

      resetClues,
      updateSelectedGhost,
      isClueRelevant,
    };
  },
  {
    persist: {
      storage: localStorage,
      pick: ['currentDifficulty', 'showAllGhosts'],
      key: '[phasmophobia-ghost-identifier]settings',
    },
  }
);
