import { ClueId } from '~/utils/types/clue-id.enum';

export const cluesData: ReadonlyMap<ClueId, string> = new Map([
  [ClueId.EmfLevel5, 'ЭМП 5 уровня'],
  [ClueId.Ultraviolet, 'Ультрафиолет'],
  [ClueId.GhostWriting, 'Записи в блокноте'],
  [ClueId.FreezingTemperatures, 'Минусовая температура'],
  [ClueId.DotsProjector, 'Лазерный проектор'],
  [ClueId.GhostOrb, 'Призрачный огонёк'],
  [ClueId.SpiritBox, 'Радиоприёмник'],
  [ClueId.DisturbedSaltPile, 'След на соли'],
]);
