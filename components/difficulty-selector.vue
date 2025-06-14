<script setup lang="ts">
import { GameDifficultyId } from '~/utils';

const currentDifficulty = defineModel<GameDifficultyId>();

interface DifficultyItem {
  id: GameDifficultyId;
  icon: string;
  borderColor: string;
  backgroundColor: string;
}

const difficultyItems: DifficultyItem[] = [
  {
    id: GameDifficultyId.Amateur,
    icon: 'fa6-solid:baby',
    borderColor: '#4caf50',
    backgroundColor: '#2a3e2b',
  },
  {
    id: GameDifficultyId.Intermediate,
    icon: 'fa6-solid:user',
    borderColor: '#2196f3',
    backgroundColor: '#22394c',
  },
  {
    id: GameDifficultyId.Professional,
    icon: 'fa6-solid:user-tie',
    borderColor: '#ff9800',
    backgroundColor: '#4e391b',
  },
  {
    id: GameDifficultyId.Nightmare,
    icon: 'fa6-solid:skull',
    borderColor: '#f44336',
    backgroundColor: '#4c2826',
  },
  {
    id: GameDifficultyId.Insanity,
    icon: 'fa6-solid:face-dizzy',
    borderColor: '#9c27b0',
    backgroundColor: '#3a233e',
  },
];

const formId = useId();
</script>

<template>
  <div class="difficulty-selector">
    <h2 class="heading"> Выберите сложность: </h2>

    <form
      class="difficulties"
      @submit.prevent
    >
      <template
        v-for="difficulty in difficultyItems"
        :key="difficulty.id"
      >
        <input
          :id="`${formId}-${difficulty.id}`"
          v-model="currentDifficulty"
          class="difficulty-input sr-only"
          type="radio"
          name="difficulty"
          :value="difficulty.id"
        />
        <label
          :for="`${formId}-${difficulty.id}`"
          class="difficulty-label"
          :style="{
            '--background-color': difficulty.backgroundColor,
            '--border-color': difficulty.borderColor,
          }"
        >
          <Icon
            class="difficulty-icon"
            :name="difficulty.icon"
          />
          <span>
            {{ gameDifficultiesData[difficulty.id].label }}
          </span>
        </label>
      </template>
    </form>
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

.difficulties {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.25rem;
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

.difficulty-label {
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

.difficulty-input {
  &:not(:checked) + .difficulty-label {
    cursor: pointer;

    @include hover {
      background-color: #444;
    }
  }

  &:checked + .difficulty-label {
    border-color: var(--border-color);
    background-color: var(--background-color);
    box-shadow: 0 0 0.625rem #fff3;
  }

  &:focus-visible + .difficulty-label {
    outline: 0.0625rem auto #101010;
    outline-offset: 2px;
  }
}

.difficulty-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
