import { getPossibleGhosts } from './get-possible-ghosts';
import { isEnoughSlotsForGuaranteedClues } from './is-enough-slots-for-guaranteed-clues';
import { isExcludedCountWithinLimit } from './is-excluded-clues-count-within-limit';
import { isFoundCluesCountWithinLimit } from './is-found-clues-count-within-limit';
import { isFoundOnlyRelevantClues } from './is-found-only-relevant-clues';
import { isGuaranteedCluesNotExcluded } from './is-guaranteed-clues-not-excluded';
import { isNotAtMaxCluesOrAllGuaranteedFound } from './is-not-at-max-clues-or-all-guaranteed-found';

export const GhostFilteringService = {
  isEnoughSlotsForGuaranteedClues,
  isExcludedCountWithinLimit,
  isFoundCluesCountWithinLimit,
  isFoundOnlyRelevantClues,
  isGuaranteedCluesNotExcluded,
  isNotAtMaxCluesOrAllGuaranteedFound,
  getPossibleGhosts,
};
