import type { Ghost } from '~/utils/models/ghosts-data';
import type { ClueId } from '~/utils/schemas/clue-id.schema';

/** Возвращает `true`, если все найденные улики подходят призраку */
export function isFoundOnlyRelevantClues(ghost: Ghost, foundClues: ReadonlySet<ClueId>): boolean {
  const ghostClues = ghost.clues;

  for (const foundClue of foundClues) {
    if (!ghostClues.has(foundClue)) {
      return false;
    }
  }

  return true;
}
