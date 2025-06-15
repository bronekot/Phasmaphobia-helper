import { defineStore } from 'pinia';
import { ClueId, ClueStatus, GameDifficultyId, type GhostId } from '~/utils';

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

    const excludedClues = computed(() => {
      const set = new Set<ClueId>();

      for (const id of clueStateKeys) {
        if (clueStates.value[id] === ClueStatus.Excluded) {
          set.add(id);
        }
      }

      return set;
    });

    const foundClues = computed(() => {
      const set = new Set<ClueId>();

      for (const id of clueStateKeys) {
        if (clueStates.value[id] === ClueStatus.Found) {
          set.add(id);
        }
      }

      return set;
    });

    const possibleGhosts = computed(() => {
      return GhostFilteringService.getPossibleGhosts(
        excludedClues.value,
        foundClues.value,
        currentDifficulty.value
      );
    });

    function resetClues() {
      clueStates.value = { ...defaultClueStates };
    }

    function updateSelectedGhost(newSelectedGhost: GhostId): void {
      selectedGhostId.value = selectedGhostId.value !== newSelectedGhost ? newSelectedGhost : null;
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
