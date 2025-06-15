import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import type { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

/** Возвращает `true`, если количество исключенных улик не превышает количество скрываемых улик */
export function isExcludedCountWithinLimit(
  ghost: Ghost,
  excludedClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): boolean {
  const ghostClues = ghost.clues;

  let allowedMatches = hiddenCluesCounts.get(difficulty);

  if (allowedMatches === undefined) {
    throw new Error(`Не найдено количество скрытых подсказок для сложности ${difficulty}!`);
  }

  for (const excludedClue of excludedClues) {
    if (ghostClues.has(excludedClue)) {
      allowedMatches -= 1;

      if (allowedMatches < 0) {
        return false;
      }
    }
  }

  return true;
}
