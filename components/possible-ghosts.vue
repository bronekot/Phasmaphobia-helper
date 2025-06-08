<script setup lang="ts">
const selectedGhost = ref<GhostId | null>(null);

const ghosts = [
  { id: 'spirit', label: 'Дух' },
  { id: 'wraith', label: 'Мираж' },
  { id: 'phantom', label: 'Фантом' },
  { id: 'poltergeist', label: 'Полтергейст' },
  { id: 'banshee', label: 'Банши' },
  { id: 'jinn', label: 'Джинн' },
  { id: 'mare', label: 'Мара' },
  { id: 'revenant', label: 'Ревенант' },
  { id: 'shade', label: 'Тень' },
  { id: 'demon', label: 'Демон' },
  { id: 'yurei', label: 'Юрэй' },
  { id: 'oni', label: 'Они' },
  { id: 'yokai', label: 'Ёкай' },
  { id: 'hantu', label: 'Ханту' },
  { id: 'goryo', label: 'Горё' },
  { id: 'myling', label: 'Мюлинг' },
  { id: 'onryo', label: 'Онрё' },
  { id: 'the-twins', label: 'Близнецы' },
  { id: 'raiju', label: 'Райдзю' },
  { id: 'obake', label: 'Обакэ' },
  { id: 'the-mimic', label: 'Мимик' },
  { id: 'moroi', label: 'Морой' },
  { id: 'deogen', label: 'Деоген' },
  { id: 'thaye', label: 'Тайэ' },
] satisfies Array<{ id: GhostId; label: string }>;
</script>

<template>
  <div class="possible-ghosts">
    <h2 class="heading">Возможные призраки</h2>
    <div class="list">
      <button
        v-for="ghost in ghosts"
        :key="ghost.id"
        class="ghost-button"
        @click="selectedGhost = selectedGhost !== ghost.id ? ghost.id : null"
      >
        <span :class="['ghost-label', { selected: selectedGhost === ghost.id }]">
          {{ ghost.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.possible-ghosts {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  width: 100%;
  padding: 0.3125rem;
  border: 0.0625rem solid #333;
  border-radius: 0.25rem;

  @include breakpoint-xs {
    padding: 0.75rem;
  }
}

.heading {
  margin-block: 0;
  padding: 0.25rem;
  font-size: var(--text-base);

  @include breakpoint-xs {
    font-size: var(--text-lg);
  }

  @include breakpoint-sm {
    font-size: var(--text-xl);
  }

  @include breakpoint-md {
    font-size: var(--text-2xl);
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.ghost-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.9375rem 0.1875rem;
  border: unset;

  background-color: unset;

  &:enabled {
    cursor: pointer;
  }

  @include hover {
    &:enabled {
      box-shadow:
        inset 0 0 0.1rem -0.025rem #ffd700,
        0 0 0.1rem -0.025rem #ffd700;
    }
  }
}

.ghost-label {
  font-size: var(--text-base);
  line-height: 1;
  color: #f0f0f0;
  transition: color 0.3s;

  &.selected {
    font-weight: 700;
    color: #ffd700;
  }
}
</style>
