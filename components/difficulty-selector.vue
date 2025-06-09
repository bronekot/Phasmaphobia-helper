<script setup lang="ts">
import { GameDifficultyId } from '#imports';

const activeButton = useCurrentDifficulty();

interface DifficultyButton {
  id: GameDifficultyId;
  icon: string;
  label: string;
  borderColor: string;
  backgroundColor: string;
}

const difficultyButtons: DifficultyButton[] = [
  {
    id: GameDifficultyId.Amateur,
    icon: 'fa6-solid:baby',
    label: gameDifficultiesData[GameDifficultyId.Amateur].label,
    borderColor: '#4caf50',
    backgroundColor: '#2a3e2b',
  },
  {
    id: GameDifficultyId.Intermediate,
    icon: 'fa6-solid:user',
    label: gameDifficultiesData[GameDifficultyId.Intermediate].label,
    borderColor: '#2196f3',
    backgroundColor: '#22394c',
  },
  {
    id: GameDifficultyId.Professional,
    icon: 'fa6-solid:user-tie',
    label: gameDifficultiesData[GameDifficultyId.Professional].label,
    borderColor: '#ff9800',
    backgroundColor: '#4e391b',
  },
  {
    id: GameDifficultyId.Nightmare,
    icon: 'fa6-solid:skull',
    label: gameDifficultiesData[GameDifficultyId.Nightmare].label,
    borderColor: '#f44336',
    backgroundColor: '#4c2826',
  },
  {
    id: GameDifficultyId.Insanity,
    icon: 'fa6-solid:face-dizzy',
    label: gameDifficultiesData[GameDifficultyId.Insanity].label,
    borderColor: '#9c27b0',
    backgroundColor: '#3a233e',
  },
];
</script>

<template>
  <div class="difficulty-selector">
    <h2 class="heading"> Выберите сложность: </h2>
    <div class="buttons">
      <button
        v-for="button in difficultyButtons"
        :key="button.id"
        :class="['button', { active: activeButton === button.id }]"
        :style="{
          '--background-color': button.backgroundColor,
          '--border-color': button.borderColor,
        }"
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
    border-color: var(--border-color);
    background-color: var(--background-color);
    box-shadow: 0 0 0.625rem #fff3;
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
