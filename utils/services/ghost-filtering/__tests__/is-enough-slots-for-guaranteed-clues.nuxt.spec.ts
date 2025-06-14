import { describe, expect, it } from 'vitest';
import { isEnoughSlotsForGuaranteedClues } from '../is-enough-slots-for-guaranteed-clues';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isEnoughSlotsForGuaranteedClues', () => {
  it('Возвращает true, если нет спрятанных улик', () => {
    expect(isEnoughSlotsForGuaranteedClues(new Set(), difficultyWithNoHiddenClues)(mockGhost)).toBe(
      true
    );
  });

  it('Возвращает true, если у призрака нет гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        new Set(),
        difficultyWithOneHiddenClue
      )({ ...mockGhost, guaranteedClues: new Set() })
    ).toBe(true);
  });

  it('Возвращает true, если все гарантированные улики найдены', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        new Set([ClueId.DisturbedSaltPile, ClueId.GhostOrb]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(true);
  });

  it('Возвращает false, если недостаточно слотов для гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox, ClueId.FreezingTemperatures]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(false);
  });

  it('Возвращает true, если достаточно слотов для гарантированных улик', () => {
    expect(
      isEnoughSlotsForGuaranteedClues(
        new Set([ClueId.Ultraviolet, ClueId.SpiritBox]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(true);
  });
});
