import type { Ghost } from '~/utils/models/ghosts-data';
import type { ClueId } from '~/utils/schemas/clue-id.schema';

/** Возвращает `true`, если гарантированных улик нет среди исключенных */
export function isGuaranteedCluesNotExcluded(
  ghost: Ghost,
  excludedClues: ReadonlySet<ClueId>
): boolean {
  const ghostClues = ghost.guaranteedClues;

  for (const excludedClue of excludedClues) {
    if (ghostClues.has(excludedClue)) {
      return false;
    }
  }

  return true;
}
