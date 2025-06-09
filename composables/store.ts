import { GameDifficultyId, type GhostId } from '#imports';

export function useCurrentDifficulty() {
  return useState<GameDifficultyId>('difficulty', () => GameDifficultyId.Amateur);
}

export function useSelectedGhost() {
  return useState<GhostId | null>('selected-ghost', () => null);
}
