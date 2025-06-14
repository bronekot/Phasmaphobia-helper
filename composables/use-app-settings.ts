import { z } from 'zod/v4-mini';
import { ClueId, ClueStatus, GameDifficultyId, type GhostId } from '~/utils';

const CURRENT_DIFFICULTY = {
  key: 'phasmaHelperDifficulty',
  defaultValue: GameDifficultyId.Amateur,
} as const;

const SHOW_ALL_GHOSTS = {
  key: 'phasmaHelperShowAllGhosts',
  defaultValue: true,
} as const;

const SELECTED_GHOST = {
  defaultValue: null,
} as const;

const CLUE_STATES = {
  get defaultValue() {
    return {
      [ClueId.EmfLevel5]: { id: ClueId.EmfLevel5, status: ClueStatus.Null },
      [ClueId.Ultraviolet]: { id: ClueId.Ultraviolet, status: ClueStatus.Null },
      [ClueId.GhostWriting]: { id: ClueId.GhostWriting, status: ClueStatus.Null },
      [ClueId.FreezingTemperatures]: { id: ClueId.FreezingTemperatures, status: ClueStatus.Null },
      [ClueId.DotsProjector]: { id: ClueId.DotsProjector, status: ClueStatus.Null },
      [ClueId.GhostOrb]: { id: ClueId.GhostOrb, status: ClueStatus.Null },
      [ClueId.SpiritBox]: { id: ClueId.SpiritBox, status: ClueStatus.Null },
      [ClueId.DisturbedSaltPile]: { id: ClueId.DisturbedSaltPile, status: ClueStatus.Null },
    };
  },
} as const;

const currentDifficultySchema = gameDifficultyIdSchema;
const showAllGhostsSchema = z.boolean();

export function useAppSettings() {
  const currentDifficulty = ref<GameDifficultyId>(CURRENT_DIFFICULTY.defaultValue);

  const clueStates = ref<Record<ClueId, { id: ClueId; status: ClueStatus }>>(
    CLUE_STATES.defaultValue
  );

  const selectedGhost = ref<GhostId | null>(SELECTED_GHOST.defaultValue);

  const showAllGhosts = ref<boolean>(SHOW_ALL_GHOSTS.defaultValue);

  const foundClues = computed<ClueId[]>(() => {
    return Object.values(clueStates.value)
      .filter(({ status }) => status === ClueStatus.Found)
      .map(({ id }) => id);
  });

  const excludedClues = computed<ClueId[]>(() => {
    return Object.values(clueStates.value)
      .filter(({ status }) => status === ClueStatus.Excluded)
      .map(({ id }) => id);
  });

  const possibleGhosts = computed(() => {
    const {
      isGuaranteedCluesNotExcluded,
      isFoundOnlyRelevantClues,
      isFoundCluesCountWithinLimit,
      isExcludedCountWithinLimit,
      isNotAtMaxCluesOrAllGuaranteedFound,
      isEnoughSlotsForGuaranteedClues,
    } = GhostFilteringService;

    const excludedCluesSet = new Set(excludedClues.value);
    const foundCluesSet = new Set(foundClues.value);
    const currentDifficultyValue = currentDifficulty.value;

    return new Set(
      Object.values(ghostsData)
        .filter(isGuaranteedCluesNotExcluded(excludedCluesSet))
        .filter(isFoundOnlyRelevantClues(foundCluesSet))
        .filter(isFoundCluesCountWithinLimit(foundCluesSet, currentDifficultyValue))
        .filter(isExcludedCountWithinLimit(excludedCluesSet, currentDifficultyValue))
        .filter(isNotAtMaxCluesOrAllGuaranteedFound(foundCluesSet, currentDifficultyValue))
        .filter(isEnoughSlotsForGuaranteedClues(foundCluesSet, currentDifficultyValue))
        .map(({ id }) => id)
    );
  });

  function resetClues(): void {
    clueStates.value = CLUE_STATES.defaultValue;
  }

  function updateSelectedGhost(newSelectedGhost: GhostId): void {
    selectedGhost.value = selectedGhost.value !== newSelectedGhost ? newSelectedGhost : null;
  }

  watch(currentDifficulty, (value) => {
    localStorage.setItem(CURRENT_DIFFICULTY.key, JSON.stringify(value));
  });

  watch(showAllGhosts, (value) => {
    localStorage.setItem(SHOW_ALL_GHOSTS.key, JSON.stringify(value));
  });

  (useNuxtApp().payload.serverRendered ? onMounted : onBeforeMount)(() => {
    try {
      currentDifficulty.value = currentDifficultySchema.parse(
        JSON.parse(localStorage.getItem(CURRENT_DIFFICULTY.key) ?? '')
      );
    } catch {
      localStorage.removeItem(CURRENT_DIFFICULTY.key);
    }

    try {
      showAllGhosts.value = showAllGhostsSchema.parse(
        JSON.parse(localStorage.getItem(SHOW_ALL_GHOSTS.key) ?? '')
      );
    } catch {
      localStorage.removeItem(SHOW_ALL_GHOSTS.key);
    }
  });

  return {
    currentDifficulty,
    clueStates,
    selectedGhost,
    showAllGhosts,
    foundClues,
    excludedClues,
    possibleGhosts,
    resetClues,
    updateSelectedGhost,
  };
}
