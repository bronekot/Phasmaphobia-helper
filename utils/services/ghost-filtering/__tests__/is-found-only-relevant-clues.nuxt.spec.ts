import { describe, expect, it } from 'vitest';
import { isFoundOnlyRelevantClues } from '../is-found-only-relevant-clues';
import { mockGhost } from './utils';

describe('isFoundOnlyRelevantClues', () => {
  it('Возвращает true, если найденных улик нет', () => {
    expect(isFoundOnlyRelevantClues(new Set())(mockGhost)).toBe(true);
  });

  it('Возвращает true, если все найденные улики подходят призраку', () => {
    expect(isFoundOnlyRelevantClues(new Set([ClueId.Ultraviolet]))(mockGhost)).toBe(true);
  });

  it('Возвращает false, если какие-либо найденные улики не подходят призраку', () => {
    expect(isFoundOnlyRelevantClues(new Set([ClueId.EmfLevel5]))(mockGhost)).toBe(false);
  });
});
