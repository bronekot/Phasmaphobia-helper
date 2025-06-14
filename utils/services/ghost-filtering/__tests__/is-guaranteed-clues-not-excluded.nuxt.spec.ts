import { describe, expect, it } from 'vitest';
import { isGuaranteedCluesNotExcluded } from '../is-guaranteed-clues-not-excluded';
import { mockGhost } from './utils';

describe('isGuaranteedCluesNotExcluded', () => {
  it('Возвращает true, если исключенных улик нет', () => {
    expect(isGuaranteedCluesNotExcluded(new Set())(mockGhost)).toBe(true);
  });

  it('Возвращает true, если гарантированных улик нет среди исключенных', () => {
    expect(isGuaranteedCluesNotExcluded(new Set([ClueId.Ultraviolet]))(mockGhost)).toBe(true);
  });

  it('Возвращает false, если гарантированные улики есть среди исключенных', () => {
    expect(isGuaranteedCluesNotExcluded(new Set([ClueId.GhostOrb]))(mockGhost)).toBe(false);
  });
});
