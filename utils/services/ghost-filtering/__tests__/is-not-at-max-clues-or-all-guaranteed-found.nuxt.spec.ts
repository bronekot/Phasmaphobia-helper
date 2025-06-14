import { describe, expect, it } from 'vitest';
import { isNotAtMaxCluesOrAllGuaranteedFound } from '../is-not-at-max-clues-or-all-guaranteed-found';
import { difficultyWithNoHiddenClues, difficultyWithOneHiddenClue, mockGhost } from './utils';

describe('isNotAtMaxCluesOrAllGuaranteedFound', () => {
  it('Возвращает true, если нет найденных улик', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(new Set(), difficultyWithNoHiddenClues)(mockGhost)
    ).toBe(true);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(new Set(), difficultyWithOneHiddenClue)(mockGhost)
    ).toBe(true);
  });

  it('Возвращает true, если найдено максимум улик и найдены все гарантированные улики', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.DisturbedSaltPile,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )(mockGhost)
    ).toBe(true);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.DisturbedSaltPile,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
        ]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(true);
  });

  it('Возвращает false, если найдено максимум улик, и найдены не все гарантированные улики', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )(mockGhost)
    ).toBe(false);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.FreezingTemperatures,
          ClueId.GhostOrb,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(false);
  });

  it('Возвращает false, если найдено максимум улик, и не найдено гарантированных улик', () => {
    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.GhostWriting,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithNoHiddenClues
      )(mockGhost)
    ).toBe(false);

    expect(
      isNotAtMaxCluesOrAllGuaranteedFound(
        new Set([
          ClueId.DotsProjector,
          ClueId.FreezingTemperatures,
          ClueId.SpiritBox,
          ClueId.Ultraviolet,
        ]),
        difficultyWithOneHiddenClue
      )(mockGhost)
    ).toBe(false);
  });
});
