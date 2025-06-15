import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import type { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

/** Возвращает `true`, если для гарантированных улик достаточно слотов */
export function isEnoughSlotsForGuaranteedClues(
  ghost: Ghost,
  foundClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): boolean {
  const hiddenCluesCount = hiddenCluesCounts.get(difficulty);

  if (hiddenCluesCount === undefined) {
    throw new Error(`Не найдено количество скрытых подсказок для сложности ${difficulty}!`);
  }

  if (hiddenCluesCount < 1 || ghost.guaranteedClues.size < 1) {
    return true;
  }

  let missingGuaranteedCluesCount = ghost.guaranteedClues.size;

  for (const clue of ghost.guaranteedClues) {
    if (foundClues.has(clue)) {
      missingGuaranteedCluesCount -= 1;
    }
  }

  return missingGuaranteedCluesCount <= ghost.clues.size - hiddenCluesCount - foundClues.size;
}
