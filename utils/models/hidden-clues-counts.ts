import { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

export const hiddenCluesCounts: ReadonlyMap<GameDifficultyId, number> = new Map([
  [GameDifficultyId.Amateur, 0],
  [GameDifficultyId.Intermediate, 0],
  [GameDifficultyId.Professional, 0],
  [GameDifficultyId.Nightmare, 1],
  [GameDifficultyId.Insanity, 2],
]);
