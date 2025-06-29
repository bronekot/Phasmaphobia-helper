import { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

export const gameDifficultiesData: ReadonlyMap<GameDifficultyId, string> = new Map([
  [GameDifficultyId.Amateur, 'Любитель'],
  [GameDifficultyId.Intermediate, 'Средняя'],
  [GameDifficultyId.Professional, 'Профессионал'],
  [GameDifficultyId.Nightmare, 'Кошмар'],
  [GameDifficultyId.Insanity, 'Безумие'],
]);
