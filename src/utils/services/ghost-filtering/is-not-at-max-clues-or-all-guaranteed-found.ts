import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import type { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

/** Возвращает `true`, если найдено максимум улик и найдены все гарантированные улики */
export function isNotAtMaxCluesOrAllGuaranteedFound(
  ghost: Ghost,
  foundClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): boolean {
  const hiddenCluesCount = hiddenCluesCounts.get(difficulty);

  if (hiddenCluesCount === undefined) {
    throw new Error(`Не найдено количество скрытых подсказок для сложности ${difficulty}!`);
  }

  if (foundClues.size < ghost.clues.size - hiddenCluesCount) {
    return true;
  }

  for (const guaranteedClue of ghost.guaranteedClues) {
    if (!foundClues.has(guaranteedClue)) {
      return false;
    }
  }

  return true;
}
