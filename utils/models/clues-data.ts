import { ClueId } from '~/utils/types/clue-id.enum';

interface Clue {
  readonly id: ClueId;
  readonly label: string;
}

export const cluesData: Readonly<Record<ClueId, Clue>> = {
  [ClueId.EmfLevel5]: {
    id: ClueId.EmfLevel5,
    label: 'ЭМП 5 уровня',
  },
  [ClueId.Ultraviolet]: {
    id: ClueId.Ultraviolet,
    label: 'Ультрафиолет',
  },
  [ClueId.GhostWriting]: {
    id: ClueId.GhostWriting,
    label: 'Записи в блокноте',
  },
  [ClueId.FreezingTemperatures]: {
    id: ClueId.FreezingTemperatures,
    label: 'Минусовая температура',
  },
  [ClueId.DotsProjector]: {
    id: ClueId.DotsProjector,
    label: 'Лазерный проектор',
  },
  [ClueId.GhostOrb]: {
    id: ClueId.GhostOrb,
    label: 'Призрачный огонёк',
  },
  [ClueId.SpiritBox]: {
    id: ClueId.SpiritBox,
    label: 'Радиоприёмник',
  },
  [ClueId.DisturbedSaltPile]: {
    id: ClueId.DisturbedSaltPile,
    label: 'След на соли',
  },
};
