import { z } from 'zod/v4-mini';

export const gameDifficultyIdSchema = z.enum([
  'Amateur',
  'Intermediate',
  'Professional',
  'Nightmare',
  'Insanity',
]);

export const GameDifficultyId = gameDifficultyIdSchema.def.entries;

export type GameDifficultyId = z.infer<typeof gameDifficultyIdSchema>;
