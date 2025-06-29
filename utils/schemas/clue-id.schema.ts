import { z } from 'zod/v4-mini';

export const clueIdSchema = z.enum([
  'EmfLevel5',
  'Ultraviolet',
  'GhostWriting',
  'FreezingTemperatures',
  'DotsProjector',
  'GhostOrb',
  'SpiritBox',
  'DisturbedSaltPile',
]);

export const ClueId = clueIdSchema.def.entries;

export type ClueId = z.infer<typeof clueIdSchema>;
