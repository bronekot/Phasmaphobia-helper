import { describe, expect, it } from 'vitest';
import { isEnoughSlotsForGuaranteedClues } from '../is-enough-slots-for-guaranteed-clues';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isEnoughSlotsForGuaranteedClues', () => {
  it('Возвращает true, если нет спрятанных улик', () => {
    expect(isEnoughSlotsForGuaranteedClues(mockGhost, new Set(), difficultyWithNoHiddenClues)).toBe(
      true
    );
  });

  it('Возвращает true, если у призрака нет гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        { ...mockGhost, guaranteedClues: new Set() },
        new Set(),
        difficultyWithOneHiddenClue
      )
    ).toBe(true);
  });

  it('Возвращает true, если все гарантированные улики найдены', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        mockGhost,
        new Set([ClueId.DisturbedSaltPile, ClueId.GhostOrb]),
        difficultyWithOneHiddenClue
      )
    ).toBe(true);
  });

  it('Возвращает false, если недостаточно слотов для гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        mockGhost,
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox, ClueId.FreezingTemperatures]),
        difficultyWithOneHiddenClue
      )
    ).toBe(false);
  });

  it('Возвращает true, если достаточно слотов для гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        mockGhost,
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox]),
        difficultyWithOneHiddenClue
      )
    ).toBe(true);
  });
});
