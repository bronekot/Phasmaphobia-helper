export const ClueId = {
  EmfLevel5: 'EmfLevel5',
  Ultraviolet: 'Ultraviolet',
  GhostWriting: 'GhostWriting',
  FreezingTemperatures: 'FreezingTemperatures',
  DotsProjector: 'DotsProjector',
  GhostOrb: 'GhostOrb',
  SpiritBox: 'SpiritBox',
  DisturbedSaltPile: 'DisturbedSaltPile',
} as const;

export type ClueId = ValueOf<typeof ClueId>;
