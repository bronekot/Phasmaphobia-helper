import { describe, expect, it } from 'vitest';
import { isFoundCluesCountWithinLimit } from '../is-found-clues-count-within-limit';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isFoundCluesCountWithinLimit', () => {
  it('Возвращает true, если нет найденных улик', () => {
    expect(isFoundCluesCountWithinLimit(mockGhost, new Set(), difficultyWithNoHiddenClues)).toBe(
      true
    );

    expect(isFoundCluesCountWithinLimit(mockGhost, new Set(), difficultyWithOneHiddenClue)).toBe(
      true
    );
  });

  it('Возвращает true, если количество найденных улик не превышает максимальное количество улик призрака', () => {
    expect(
      isFoundCluesCountWithinLimit(
        mockGhost,
        new Set([
          ClueId.DisturbedSaltPile,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )
    ).toBe(true);

    expect(
      isFoundCluesCountWithinLimit(
        mockGhost,
        new Set([
          ClueId.DisturbedSaltPile,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
        ]),
        difficultyWithOneHiddenClue
      )
    ).toBe(true);
  });

  it('Возвращает false, если количество найденных улик превышает максимальное количество улик призрака', () => {
    expect(
      isFoundCluesCountWithinLimit(
        mockGhost,
        new Set([
          ClueId.DisturbedSaltPile,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithOneHiddenClue
      )
    ).toBe(false);
  });
});
