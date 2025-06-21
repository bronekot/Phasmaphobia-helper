import { ghostsData } from '~/utils/models/ghosts-data';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import type { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';
import type { GhostId } from '~/utils/types/ghost-id.enum';
import { GhostFilteringService } from './ghost-filtering.service';

export function getPossibleGhosts(
  excludedClues: ReadonlySet<ClueId>,
  foundClues: ReadonlySet<ClueId>,
  currentDifficulty: GameDifficultyId
): ReadonlySet<GhostId> {
  const {
    isGuaranteedCluesNotExcluded,
    isFoundOnlyRelevantClues,
    isFoundCluesCountWithinLimit,
    isExcludedCountWithinLimit,
    isNotAtMaxCluesOrAllGuaranteedFound,
    isEnoughSlotsForGuaranteedClues,
  } = GhostFilteringService;

  const possibleGhosts = new Set<GhostId>();

  for (const [id, ghost] of ghostsData) {
    if (
      isGuaranteedCluesNotExcluded(ghost, excludedClues) &&
      isFoundOnlyRelevantClues(ghost, foundClues) &&
      isFoundCluesCountWithinLimit(ghost, foundClues, currentDifficulty) &&
      isExcludedCountWithinLimit(ghost, excludedClues, currentDifficulty) &&
      isNotAtMaxCluesOrAllGuaranteedFound(ghost, foundClues, currentDifficulty) &&
      isEnoughSlotsForGuaranteedClues(ghost, foundClues, currentDifficulty)
    ) {
      possibleGhosts.add(id);
    }
  }

  return possibleGhosts;
}
