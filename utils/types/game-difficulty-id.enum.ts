export const GameDifficultyId = {
  Amateur: 'amateur',
  Intermediate: 'intermediate',
  Professional: 'professional',
  Nightmare: 'nightmare',
  Insanity: 'insanity',
} as const;

export type GameDifficultyId = ValueOf<typeof GameDifficultyId>;
