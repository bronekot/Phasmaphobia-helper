export const ClueId = {
  EmfLevel5: 'emf-level-5',
  Ultraviolet: 'ultraviolet',
  GhostWriting: 'ghost-writing',
  FreezingTemperatures: 'freezing-temperatures',
  DotsProjector: 'dots-projector',
  GhostOrb: 'ghost-orb',
  SpiritBox: 'spirit-box',
  DisturbedSaltPile: 'disturbed-salt-pile',
} as const;

export type ClueId = ValueOf<typeof ClueId>;
