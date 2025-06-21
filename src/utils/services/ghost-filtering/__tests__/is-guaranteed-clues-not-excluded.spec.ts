import { describe, expect, it } from 'vitest';
import { ClueId } from '~/utils/schemas/clue-id.schema';
import { isGuaranteedCluesNotExcluded } from '../is-guaranteed-clues-not-excluded';
import { mockGhost } from './utils';

describe('isGuaranteedCluesNotExcluded', () => {
  it('Возвращает true, если исключенных улик нет', () => {
    expect(isGuaranteedCluesNotExcluded(mockGhost, new Set())).toBe(true);
  });

  it('Возвращает true, если гарантированных улик нет среди исключенных', () => {
    expect(isGuaranteedCluesNotExcluded(mockGhost, new Set([ClueId.Ultraviolet]))).toBe(true);
  });

  it('Возвращает false, если гарантированные улики есть среди исключенных', () => {
    expect(isGuaranteedCluesNotExcluded(mockGhost, new Set([ClueId.GhostOrb]))).toBe(false);
  });
});
