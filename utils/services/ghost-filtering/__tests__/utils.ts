import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import { ClueId } from '~/utils/schemas/clue-id.schema';

/**
 * Невалидные призраки: DotsProjector, EmfLevel5, GhostWriting
 *
 * Валидные призраки: DisturbedSaltPile, FreezingTemperatures, GhostOrb, SpiritBox, Ultraviolet
 *
 * Гарантированные призраки: DisturbedSaltPile, GhostOrb
 */
export const mockGhost: Ghost = {
  label: 'Мимик',
  description: 'Это моковый мимик',
  clues: new Set([
    ClueId.DisturbedSaltPile,
    ClueId.FreezingTemperatures,
    ClueId.GhostOrb,
    ClueId.SpiritBox,
    ClueId.Ultraviolet,
  ]),
  guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.GhostOrb]),
};

export const difficultyWithNoHiddenClues = (() => {
  for (const [difficulty, count] of hiddenCluesCounts) {
    if (count === 0) {
      return difficulty;
    }
  }

  throw new Error('Не найдена сложность без скрытых улик! Обновите тесты!');
})();

export const difficultyWithOneHiddenClue = (() => {
  for (const [difficulty, count] of hiddenCluesCounts) {
    if (count === 1) {
      return difficulty;
    }
  }

  throw new Error('Не найдена сложность с одной скрытой уликой. Обновите тесты!');
})();
