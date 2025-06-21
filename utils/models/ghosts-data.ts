import { ClueId } from '~/utils/schemas/clue-id.schema';
import { GhostId } from '~/utils/types/ghost-id.enum';

export interface Ghost {
  readonly label: string;
  readonly description: string;
  readonly clues: ReadonlySet<ClueId>;
  readonly guaranteedClues: ReadonlySet<ClueId>;
}

export const ghostsData: ReadonlyMap<GhostId, Ghost> = new Map([
  [
    GhostId.Spirit,
    {
      label: 'Дух',
      description:
        'Не обладает особым поведением, кроме того, что использование благовония рядом с ним предотвращает охоту на гораздо более длительное время (180 секунд).',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.GhostWriting,
        ClueId.SpiritBox,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Wraith,
    {
      label: 'Мираж',
      description:
        'Может случайным образом телепортироваться к игрокам вне охоты. Не наступает в соль и, следовательно, не оставляет ультрафиолетовых следов.',
      clues: new Set([ClueId.EmfLevel5, ClueId.SpiritBox, ClueId.DotsProjector]),
      guaranteedClues: new Set(),
    },
  ],
  [
    GhostId.Phantom,
    {
      label: 'Фантом',
      description:
        'Дополнительно истощает рассудок игроков в поле зрения во время проявлений. Может перемещаться к случайным игрокам. Фотографирование Фантома делает его временно невидимым во время паранормальных явлений. Во время охоты призрак будет невидимым на фотографиях и будет видим меньше времени.',
      clues: new Set([
        ClueId.Ultraviolet,
        ClueId.SpiritBox,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Poltergeist,
    {
      label: 'Полтергейст',
      description:
        'Его способность может бросать несколько предметов одновременно с большой силой. Наблюдение за его способностью истощает рассудок игрока в зависимости от количества брошенных предметов. Во время охоты он открывает больше дверей и бросает все, что попадается на пути. Неэффективен в пустых комнатах без предметов для броска.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.Ultraviolet,
        ClueId.SpiritBox,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Banshee,
    {
      label: 'Банши',
      description:
        'Нападает на одного конкретного игрока, пока тот не будет убит, игнорируя остальных. Порог начала охоты зависит от рассудка цели. При использовании параболического микрофона можно услышать характерный крик.',
      clues: new Set([
        ClueId.Ultraviolet,
        ClueId.GhostOrb,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Jinn,
    {
      label: 'Джинн',
      description:
        'Во время охоты обладает более высокой скоростью, если видит цель на большом расстоянии (2.5 м/с). Его способность может снижать рассудок ближайших игроков (25%). Выключение щитка предотвращает использование этой способности. Не может выключить щиток.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.Ultraviolet,
        ClueId.FreezingTemperatures,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Mare,
    {
      label: 'Мара',
      description:
        'Начинает охоту при более высоком пороге рассудка в темноте (60%) и при более низком пороге рассудка на свету (40%). Чаще выключает свет и разбивает лампочки. Чаще остается в неосвещенных комнатах.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.SpiritBox,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Revenant,
    {
      label: 'Ревенант',
      description:
        'Во время охоты движется очень медленно (1 м/с), пока не получит прямую видимость игрока (3 м/с). Это делает крайне важным спрятаться как можно скорее после начала охоты. Потеряв прямую видимость, он сохраняет скорость до достижения последней известной позиции игрока, которого видел. Скорость призрака постепенно снижается после потери прямой видимости.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.FreezingTemperatures,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Shade,
    {
      label: 'Тень',
      description:
        'Сложнее найти из-за меньшей активности. Предпочитает паранормальные явления в виде шипения и теневой формы. Обычно неохотно проявляется в присутствии игроков.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.GhostWriting,
        ClueId.FreezingTemperatures,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Demon,
    {
      label: 'Демон',
      description:
        'Имеет редкий шанс начать охоту в любое время, независимо от среднего рассудка. Время между охотами меньше (20 секунд). Воздействие благовонием предотвращает охоту на меньшее время (60 секунд). Распятия имеют увеличенный эффективный радиус действия.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.Ultraviolet,
        ClueId.FreezingTemperatures,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Yurei,
    {
      label: 'Юрэй',
      description:
        'Может случайным образом закрыть дверь и снизить рассудок ближайших игроков. Будет временно ограничен своей комнатой после воздействия благовонием. Если призрак полностью закрывает входную дверь без проявления, это определенно Юрэй.',
      clues: new Set([
        ClueId.FreezingTemperatures,
        ClueId.GhostOrb,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Oni,
    {
      label: 'Они',
      description:
        'Более активен, когда рядом находятся люди. Не может создавать паранормальные явления в виде "сгустков воздуха". Остается видимым дольше во время охоты.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.FreezingTemperatures,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Yokai,
    {
      label: 'Ёкай',
      description:
        'Когда хотя бы один игрок говорит в пределах определенного радиуса от него, его порог рассудка для начала охоты увеличивается (80%). Во время охоты слышит или чувствует электронику только очень близко к себе (2.5 м).',
      clues: new Set([
        ClueId.SpiritBox,
        ClueId.GhostOrb,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Hantu,
    {
      label: 'Ханту',
      description:
        'Увеличивает скорость в холодных помещениях во время охоты. Движется медленнее в теплых зонах во время охоты. Иногда выпускает морозный пар изо рта во время охоты при выключенном щитке. Не может включить щиток и в два раза чаще его выключает.',
      clues: new Set([
        ClueId.Ultraviolet,
        ClueId.FreezingTemperatures,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.FreezingTemperatures]),
    },
  ],
  [
    GhostId.Goryo,
    {
      label: 'Горё',
      description:
        'Появляется на лазерном проекторе только при просмотре через видеокамеру и если в комнате с призраком нет игроков. Не может менять свою любимую комнату и реже уходит из нее.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.Ultraviolet,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.DotsProjector]),
    },
  ],
  [
    GhostId.Myling,
    {
      label: 'Мюлинг',
      description:
        'Имеет более тихие шаги и вокализации во время охоты, которые слышны только при приближении к призраку (12 м). При использовании параболического микрофона чаще издает паранормальные звуки.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.GhostWriting,
        ClueId.Ultraviolet,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Onryo,
    {
      label: 'Онрё',
      description:
        'Имеет шанс начать охоту при задувании огня. Наличие пламени предотвращает естественную охоту призрака (в радиусе 4 м). Чаще задувает пламя, чем другие типы призраков. Каждое третье задутое пламя заставляет его попытаться начать охоту, которая может быть заблокирована распятием или дополнительным пламенем.',
      clues: new Set([
        ClueId.SpiritBox,
        ClueId.FreezingTemperatures,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.TheTwins,
    {
      label: 'Близнецы',
      description:
        'На самом деле это один призрак, который случайным образом ведет себя по-разному. Может начать охоту и взаимодействовать с предметами в другом месте, чем ожидалось. Может взаимодействовать с окружающей средой одновременно.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.FreezingTemperatures,
        ClueId.SpiritBox,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Raiju,
    {
      label: 'Райдзю',
      description:
        'Нахождение рядом с включенной электроникой увеличивает его скорость во время охоты и позволяет ему охотиться при более высоком пороге рассудка. Расстояние зависит от размера карты (6 м - 10 м). Нарушает работу электроники с большего расстояния при проявлении (15 м).',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.GhostOrb,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
  [
    GhostId.Obake,
    {
      label: 'Обакэ',
      description:
        'Отпечатки пальцев исчезают быстрее, чем у других типов призраков. Не всегда оставляет отпечатки пальцев (75%) и может оставлять уникальные отпечатки (~17%). Может использовать свою способность, чтобы вдвое сократить время жизни отпечатков на карте. Во время охоты имеет 6.66% шанс при каждом мерцании превратиться в другую модель призрака на время этого мерцания, но гарантированно делает это хотя бы один раз за охоту.',
      clues: new Set([
        ClueId.EmfLevel5,
        ClueId.Ultraviolet,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.Ultraviolet]),
    },
  ],
  [
    GhostId.TheMimic,
    {
      label: 'Мимик',
      description:
        'Мимикрирует под другие типы призраков на короткое время, прежде чем сменить тип. Всегда имеет Призрачный огонёк как ложную улику. Может мимикрировать свойства улик призрака, которого он имитирует. Например, отпечатки Обакэ.',
      clues: new Set([
        ClueId.Ultraviolet,
        ClueId.SpiritBox,
        ClueId.FreezingTemperatures,
        ClueId.GhostOrb,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.GhostOrb]),
    },
  ],
  [
    GhostId.Moroi,
    {
      label: 'Морой',
      description:
        'Скорость выше в зависимости от того, насколько низок средний рассудок (до 2.25 м/с). Может проклясть игроков, заставляя их терять рассудок в два раза быстрее, при получении ответа в радиоприёмник или при слушании звуков призрака через параболический микрофон. Принятие таблеток для рассудка снимает проклятие. Благовоние ослепляет призрака на более долгий срок во время охоты.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.FreezingTemperatures,
        ClueId.SpiritBox,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.SpiritBox]),
    },
  ],
  [
    GhostId.Deogen,
    {
      label: 'Деоген',
      description:
        'Всегда знает местоположение игроков, из-за чего прятаться во время охоты бесполезно. Быстрый, когда находится далеко от игрока, но сильно замедляется при приближении (0.4 м/с). Кайт призрака — лучший способ выжить во время охоты. Может издавать уникальный ответ в радиоприёмник.',
      clues: new Set([
        ClueId.SpiritBox,
        ClueId.DotsProjector,
        ClueId.GhostWriting,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile, ClueId.SpiritBox]),
    },
  ],
  [
    GhostId.Thaye,
    {
      label: 'Тайэ',
      description:
        'Становится очень активным и быстрым (2.75 м/с) при первом приближении игрока. Чем больше времени игроки проводят рядом с ним, тем тише и медленнее (1 м/с) он становится, и его порог рассудка для начала охоты снижается.',
      clues: new Set([
        ClueId.GhostWriting,
        ClueId.GhostOrb,
        ClueId.DotsProjector,
        ClueId.DisturbedSaltPile,
      ]),
      guaranteedClues: new Set([ClueId.DisturbedSaltPile]),
    },
  ],
]);
