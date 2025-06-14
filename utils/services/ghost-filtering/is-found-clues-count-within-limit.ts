import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import type { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

/** Возвращает `true`, если количество найденных улик не превышает максимальное количество улик призрака с учетом скрываемых улик */
export function isFoundCluesCountWithinLimit(
  foundClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): (ghost: Ghost) => boolean {
  return (ghost) => foundClues.size <= ghost.clues.size - hiddenCluesCounts[difficulty].count;
}
