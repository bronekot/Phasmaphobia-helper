import { defineStore } from 'pinia';
import { ClueId, ClueStatus, GameDifficultyId, type GhostId } from '~/utils';

interface ClueState {
  id: ClueId;
  status: ClueStatus;
}

const defaultCurrentDifficulty = GameDifficultyId.Amateur;

const defaultClueStates = {
  [ClueId.EmfLevel5]: {
    id: ClueId.EmfLevel5,
    status: ClueStatus.Null,
  },
  [ClueId.Ultraviolet]: {
    id: ClueId.Ultraviolet,
    status: ClueStatus.Null,
  },
  [ClueId.GhostWriting]: {
    id: ClueId.GhostWriting,
    status: ClueStatus.Null,
  },
  [ClueId.FreezingTemperatures]: {
    id: ClueId.FreezingTemperatures,
    status: ClueStatus.Null,
  },
  [ClueId.DotsProjector]: {
    id: ClueId.DotsProjector,
    status: ClueStatus.Null,
  },
  [ClueId.GhostOrb]: {
    id: ClueId.GhostOrb,
    status: ClueStatus.Null,
  },
  [ClueId.SpiritBox]: {
    id: ClueId.SpiritBox,
    status: ClueStatus.Null,
  },
  [ClueId.DisturbedSaltPile]: {
    id: ClueId.DisturbedSaltPile,
    status: ClueStatus.Null,
  },
} as const satisfies Record<ClueId, ClueState>;

const defaultSelectedGhostId = null;

const defaultShowAllGhosts = true;

export const useSettings = defineStore(
  'app-settings',
  () => {
    const currentDifficulty = ref<GameDifficultyId>(defaultCurrentDifficulty);

    const clueStates = ref<Record<ClueId, ClueState>>(structuredClone(defaultClueStates));

    const selectedGhostId = ref<GhostId | null>(defaultSelectedGhostId);

    const showAllGhosts = ref<boolean>(defaultShowAllGhosts);

    const excludedClues = computed(() => {
      return Object.values(clueStates.value).reduce((set, { id, status }) => {
        if (status === ClueStatus.Excluded) {
          set.add(id);
        }

        return set;
      }, new Set<ClueId>());
    });

    const foundClues = computed(() => {
      return Object.values(clueStates.value).reduce((set, { id, status }) => {
        if (status === ClueStatus.Found) {
          set.add(id);
        }

        return set;
      }, new Set<ClueId>());
    });

    const possibleGhosts = computed(() => {
      return GhostFilteringService.getPossibleGhosts(
        excludedClues.value,
        foundClues.value,
        currentDifficulty.value
      );
    });

    function resetClues() {
      clueStates.value = structuredClone(defaultClueStates);
    }

    function updateSelectedGhost(newSelectedGhost: GhostId): void {
      selectedGhostId.value = selectedGhostId.value !== newSelectedGhost ? newSelectedGhost : null;
    }

    return {
      currentDifficulty,
      clueStates,
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
    },
  }
);
