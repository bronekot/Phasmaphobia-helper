import type { Ghost } from '~/utils/models/ghosts-data';
import { hiddenCluesCounts } from '~/utils/models/hidden-clues-counts';
import type { ClueId } from '~/utils/schemas/clue-id.schema';
import { GameDifficultyId } from '~/utils/schemas/game-difficulty-id.schema';

/** Возвращает `true`, если для гарантированных улик достаточно слотов */
export function isEnoughSlotsForGuaranteedClues(
  foundClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): (ghost: Ghost) => boolean {
  return (ghost) => {
    const hiddenCluesCount = hiddenCluesCounts[difficulty].count;

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
  };
}

export function is6b(
  foundClues: ReadonlySet<ClueId>,
  difficulty: GameDifficultyId
): (ghost: Ghost) => boolean {
  return (ghost) => {
    const foundCluesArray = Array.from(foundClues);
    const ghostCluesArray = Array.from(ghost.clues);
    const ghostGuaranteedCluesArray = Array.from(ghost.guaranteedClues);

    const hasGuaranteed =
      (difficulty === GameDifficultyId.Nightmare || difficulty === GameDifficultyId.Insanity) &&
      ghostGuaranteedCluesArray &&
      ghostGuaranteedCluesArray.length > 0;

    if (hasGuaranteed) {
      const guaranteed = ghostGuaranteedCluesArray;
      const foundGuaranteedCount = guaranteed.filter((gc) => foundCluesArray.includes(gc)).length;
      const remainingGuaranteedNeeded = guaranteed.length - foundGuaranteedCount;
      const remainingSlots =
        ghostCluesArray.length - hiddenCluesCounts[difficulty].count - foundCluesArray.length;

      console.log({ foundClues, difficulty, remainingGuaranteedNeeded, remainingSlots });

      if (remainingGuaranteedNeeded > remainingSlots) {
        return false;
      }
    }

    return true;
  };
}
