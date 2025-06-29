import { describe, expect, it } from 'vitest';
import { isExcludedCountWithinLimit } from '../is-excluded-clues-count-within-limit';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isExcludedCountWithinLimit', () => {
  it('Возвращает true, если количество исключенных улик призрака не превышает количество скрываемых улик', () => {
    expect(isExcludedCountWithinLimit(mockGhost, new Set(), difficultyWithNoHiddenClues)).toBe(
      true
    );

    expect(
      isExcludedCountWithinLimit(
        mockGhost,
        new Set([ClueId.Ultraviolet]),
        difficultyWithOneHiddenClue
      )
    ).toBe(true);
  });

  it('Возвращает false, если количество исключенных улик призрака превышает количество скрываемых улик', () => {
    expect(
      isExcludedCountWithinLimit(
        mockGhost,
        new Set([ClueId.Ultraviolet]),
        difficultyWithNoHiddenClues
      )
    ).toBe(false);

    expect(
      isExcludedCountWithinLimit(
        mockGhost,
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox]),
        difficultyWithNoHiddenClues
      )
    ).toBe(false);
  });
});
