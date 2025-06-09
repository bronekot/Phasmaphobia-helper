import { GameDifficultyId } from '~/utils/types/game-difficulty-id.enum';

interface GameDifficulty {
  readonly id: GameDifficultyId;
  readonly label: string;
}

export const gameDifficultiesData: Readonly<Record<GameDifficultyId, GameDifficulty>> = {
  [GameDifficultyId.Amateur]: {
    id: GameDifficultyId.Amateur,
    label: 'Любитель',
  },
  [GameDifficultyId.Intermediate]: {
    id: GameDifficultyId.Intermediate,
    label: 'Средняя',
  },
  [GameDifficultyId.Professional]: {
    id: GameDifficultyId.Professional,
    label: 'Профессионал',
  },
  [GameDifficultyId.Nightmare]: {
    id: GameDifficultyId.Nightmare,
    label: 'Кошмар',
  },
  [GameDifficultyId.Insanity]: {
    id: GameDifficultyId.Insanity,
    label: 'Безумие',
  },
};
