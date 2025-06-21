import { describe, expect, it } from 'vitest';
import { isFoundOnlyRelevantClues } from '../is-found-only-relevant-clues';
import { mockGhost } from './utils';
import { ClueId } from '~/utils/schemas/clue-id.schema';

describe('isFoundOnlyRelevantClues', () => {
  it('Возвращает true, если найденных улик нет', () => {
    expect(isFoundOnlyRelevantClues(mockGhost, new Set())).toBe(true);
  });

  it('Возвращает true, если все найденные улики подходят призраку', () => {
    expect(isFoundOnlyRelevantClues(mockGhost, new Set([ClueId.Ultraviolet]))).toBe(true);
  });

  it('Возвращает false, если какие-либо найденные улики не подходят призраку', () => {
    expect(isFoundOnlyRelevantClues(mockGhost, new Set([ClueId.EmfLevel5]))).toBe(false);
  });
});
