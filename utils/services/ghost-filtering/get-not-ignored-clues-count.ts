import type { Ghost } from '~/utils/models/ghosts-data';
import type { ClueId } from '~/utils/schemas/clue-id.schema';

export function getNotIgnoredCluesCount(ghost: Ghost, clues: ReadonlySet<ClueId>): number {
  let count = 0;

  for (const clue of clues) {
    if (!ghost.ignoredClues?.has(clue)) {
      count += 1;
    }
  }

  return count;
}
