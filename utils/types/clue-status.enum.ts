export const ClueStatus = {
  Found: 'Found',
  Excluded: 'Excluded',
  Null: 'Null',
} as const;

export type ClueStatus = ValueOf<typeof ClueStatus>;
