import type { GhostId } from '#imports';
import { GameDifficultyId } from '#imports';
import { z } from 'zod/v4-mini';

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

const currentDifficultySchema = gameDifficultyIdSchema;
const showAllGhostsSchema = z.boolean();

export function useAppSettings() {
  const currentDifficulty = ref<GameDifficultyId>(CURRENT_DIFFICULTY.defaultValue);
  const showAllGhosts = ref<boolean>(SHOW_ALL_GHOSTS.defaultValue);
  const selectedGhost = ref<GhostId | null>(SELECTED_GHOST.defaultValue);

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

  return { currentDifficulty, showAllGhosts, selectedGhost };
}
