import { describe, expect, it } from 'vitest';
import { isNotAtMaxCluesOrAllGuaranteedFound } from '../is-not-at-max-clues-or-all-guaranteed-found';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';
import { ClueId } from '~/utils/schemas/clue-id.schema';

describe('isNotAtMaxCluesOrAllGuaranteedFound', () => {
  it('Возвращает true, если нет найденных улик', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(mockGhost, new Set(), difficultyWithNoHiddenClues)
    ).toBe(true);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(mockGhost, new Set(), difficultyWithOneHiddenClue)
    ).toBe(true);
  });

  it('Возвращает true, если найдено максимум улик и найдены все гарантированные улики', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
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
      isNotAtMaxCluesOrAllGuaranteedFound(
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

  it('Возвращает false, если найдено максимум улик, и найдены не все гарантированные улики', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        mockGhost,
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )
    ).toBe(false);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        mockGhost,
        new Set([
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithOneHiddenClue
      )
    ).toBe(false);
  });

  it('Возвращает false, если найдено максимум улик, и не найдено гарантированных улик', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        mockGhost,
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.GhostWriting,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )
    ).toBe(false);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        mockGhost,
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithOneHiddenClue
      )
    ).toBe(false);
  });
});
