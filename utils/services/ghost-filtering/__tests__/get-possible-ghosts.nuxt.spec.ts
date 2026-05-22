import { describe, expect, it } from 'vitest';
import { getPossibleGhosts } from '../get-possible-ghosts';

describe('getPossibleGhosts', () => {
  it('Не отсекает Галлу по найденной или исключенной соли', () => {
    expect(
      getPossibleGhosts(
        new Set(),
        new Set([ClueId.DisturbedSaltPile]),
        GameDifficultyId.Professional
      ).has(GhostId.Gallu)
    ).toBe(true);

    expect(
      getPossibleGhosts(
        new Set([ClueId.DisturbedSaltPile]),
        new Set(),
        GameDifficultyId.Professional
      ).has(GhostId.Gallu)
    ).toBe(true);

    expect(
      getPossibleGhosts(
        new Set(),
        new Set([
          ClueId.EmfLevel5,
          ClueId.Ultraviolet,
          ClueId.SpiritBox,
          ClueId.DisturbedSaltPile,
        ]),
        GameDifficultyId.Professional
      ).has(GhostId.Gallu)
    ).toBe(true);
  });
});
