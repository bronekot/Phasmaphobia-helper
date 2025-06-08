<script setup lang="ts">
const activeButton = ref<GameDifficulty>('amateur');

const buttons = [
  { id: 'amateur', class: 'amateur', icon: 'fa6-solid:baby', label: 'Любитель' },
  { id: 'intermediate', class: 'intermediate', icon: 'fa6-solid:user', label: 'Средняя' },
  { id: 'professional', class: 'professional', icon: 'fa6-solid:user-tie', label: 'Профессионал' },
  { id: 'nightmare', class: 'nightmare', icon: 'fa6-solid:skull', label: 'Кошмар' },
  { id: 'insanity', class: 'insanity', icon: 'fa6-solid:face-dizzy', label: 'Безумие' },
] satisfies Array<{ id: GameDifficulty } & Record<'class' | 'icon' | 'label', string>>;
</script>

<template>
  <div class="difficulty-selector">
    <h2 class="heading"> Выберите сложность: </h2>
    <div class="buttons">
      <button
        v-for="button in buttons"
        :key="button.id"
        :class="['button', button.class, { active: activeButton === button.id }]"
        @click="activeButton = button.id"
      >
        <Icon
          class="button-icon"
          :name="button.icon"
        />
        <span>
          {{ button.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.difficulty-selector {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  width: 100%;
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

.buttons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.25rem;
  align-items: center;

  width: 100%;

  @include breakpoint-xs {
    display: flex;
    grid-template-columns: unset;
    justify-content: center;
  }

  @include breakpoint-sm {
    gap: 0.625rem;
  }
}

.button {
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.25rem;
  border: 0.125rem solid transparent;
  border-radius: 0.375rem;

  font-size: var(--text-xxs);
  line-height: 1;
  color: #ddd;

  background-color: #333;

  transition: background-color 0.3s ease;

  @include hover {
    background-color: #444;
  }

  &.active {
    box-shadow: 0 0 0.625rem #fff3;

    &.amateur {
      border-color: #4caf50;
      background-color: #2a3e2b;
    }

    &.intermediate {
      border-color: #2196f3;
      background-color: #22394c;
    }

    &.professional {
      border-color: #ff9800;
      background-color: #4e391b;
    }

    &.nightmare {
      border-color: #f44336;
      background-color: #4c2826;
    }

    &.insanity {
      border-color: #9c27b0;
      background-color: #3a233e;
    }
  }

  @include breakpoint-xs {
    flex-direction: row;
    padding: 0.625rem 0.375rem;
  }

  @include breakpoint-sm {
    gap: 0.375rem;
    padding: 0.625rem;
    font-size: var(--text-xs);
  }

  @include breakpoint-md {
    padding: 0.625rem 0.875rem;
    font-size: var(--text-base);
  }
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
