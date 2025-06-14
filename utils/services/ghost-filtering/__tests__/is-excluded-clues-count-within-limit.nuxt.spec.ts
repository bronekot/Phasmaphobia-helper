import { describe, expect, it } from 'vitest';
import { isExcludedCountWithinLimit } from '../is-excluded-clues-count-within-limit';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isExcludedCountWithinLimit', () => {
  it('Возвращает true, если количество исключенных улик призрака не превышает количество скрываемых улик', () => {
    expect(isExcludedCountWithinLimit(new Set(), difficultyWithNoHiddenClues)(mockGhost)).toBe(
      true
    );

    expect(
      isExcludedCountWithinLimit(
        new Set([ClueId.Ultraviolet]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(true);
  });

  it('Возвращает false, если количество исключенных улик призрака превышает количество скрываемых улик', () => {
    expect(
      isExcludedCountWithinLimit(
        new Set([ClueId.Ultraviolet]),
        difficultyWithNoHiddenClues
      )(mockGhost)
    ).toBe(false);

    expect(
      isExcludedCountWithinLimit(
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox]),
        difficultyWithNoHiddenClues
      )(mockGhost)
    ).toBe(false);
  });
});
