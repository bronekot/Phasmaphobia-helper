import { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

export const hiddenCluesCounts: Record<GameDifficultyId, { id: GameDifficultyId; count: number }> =
  {
    [GameDifficultyId.Amateur]: {
      id: GameDifficultyId.Amateur,
      count: 0,
    },
    [GameDifficultyId.Intermediate]: {
      id: GameDifficultyId.Intermediate,
      count: 0,
    },
    [GameDifficultyId.Professional]: {
      id: GameDifficultyId.Professional,
      count: 0,
    },
    [GameDifficultyId.Nightmare]: {
      id: GameDifficultyId.Nightmare,
      count: 1,
    },
    [GameDifficultyId.Insanity]: {
      id: GameDifficultyId.Insanity,
      count: 2,
    },
  };
