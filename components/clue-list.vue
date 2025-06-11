<script setup lang="ts">
import type { ClueStatus } from '#imports';
import { ClueId } from '#imports';

const clueStates = defineModel<Record<string, ClueStatus>>('clue-states', { required: true });

interface ClueItem {
  id: ClueId;
  label: string;
}

const clueItems = ref<ClueItem[]>([
  { id: ClueId.EmfLevel5, label: cluesData[ClueId.EmfLevel5].label },
  { id: ClueId.Ultraviolet, label: cluesData[ClueId.Ultraviolet].label },
  { id: ClueId.GhostWriting, label: cluesData[ClueId.GhostWriting].label },
  { id: ClueId.FreezingTemperatures, label: cluesData[ClueId.FreezingTemperatures].label },
  { id: ClueId.DotsProjector, label: cluesData[ClueId.DotsProjector].label },
  { id: ClueId.GhostOrb, label: cluesData[ClueId.GhostOrb].label },
  { id: ClueId.SpiritBox, label: cluesData[ClueId.SpiritBox].label },
  { id: ClueId.DisturbedSaltPile, label: cluesData[ClueId.DisturbedSaltPile].label },
]);
</script>

<template>
  <div class="clue-list">
    <div class="header">
      <h2 class="heading">Улики</h2>
      <button
        class="reset-button"
        aria-label="Сбросить всё"
        @click="
          () => {
            Object.keys(clueStates).forEach((key) => {
              clueStates[key] = ClueStatus.Null;
            });
          }
        "
      >
        <Icon name="fa6-solid:arrows-rotate" />
      </button>
    </div>
    <div class="list">
      <div
        v-for="clue in clueItems"
        :key="clue.id"
        :class="[
          'clue',
          {
            positive: clueStates[clue.id] === ClueStatus.Found,
            negative: clueStates[clue.id] === ClueStatus.Excluded,
          },
        ]"
      >
        <span class="clue-label">
          {{ clue.label }}
        </span>
        <div class="clue-buttons">
          <button
            class="clue-button"
            :disabled="clueStates[clue.id] === ClueStatus.Found"
            aria-label="Подтвердить"
            @click="clueStates[clue.id] = ClueStatus.Found"
          >
            <Icon name="fa6-solid:check" />
          </button>
          <button
            class="clue-button"
            :disabled="clueStates[clue.id] === ClueStatus.Null"
            aria-label="Сбросить"
            @click="clueStates[clue.id] = ClueStatus.Null"
          >
            <Icon name="fa6-solid:arrow-rotate-left" />
          </button>
          <button
            class="clue-button"
            :disabled="clueStates[clue.id] === ClueStatus.Excluded"
            aria-label="Вычеркнуть"
            @click="clueStates[clue.id] = ClueStatus.Excluded"
          >
            <Icon name="fa6-solid:xmark" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.clue-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  width: 100%;
  padding: 0.3125rem;
  border: 0.0625rem solid #333;
  border-radius: 0.25rem;

  @include breakpoint-xs {
    padding: 0.9375rem;
  }

  @include breakpoint-sm {
    gap: 0.5rem;
  }
}

.header {
  display: flex;
  justify-content: space-between;
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

.reset-button {
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.875rem;
  height: 1.875rem;
  border: unset;
  border-radius: 0.1875rem;

  color: #eee;

  background-color: #757575;

  transition: background-color 0.3s ease;

  @include breakpoint-xs {
    width: 2rem;
    height: 2rem;
  }

  @include breakpoint-sm {
    width: 2.25rem;
    height: 2.25rem;
  }

  &::before {
    pointer-events: none;
    content: attr(aria-label);

    position: absolute;
    bottom: 125%;

    padding: 0.375rem;
    border-radius: 0.25rem;

    font-size: var(--text-xxs);
    color: #fff;

    opacity: 0;
    background-color: #333;

    transition: opacity 0.3s ease;

    @include breakpoint-xs {
      font-size: var(--text-xs);
    }

    @include breakpoint-sm {
      padding: 0.5rem;
      font-size: var(--text-sm);
    }
  }

  @include hover {
    background-color: #9e9e9e;

    &::before {
      opacity: 1;
    }
  }
}

.list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.clue {
  display: flex;
  gap: 0.3125rem;
  align-items: center;

  padding: 0.375rem 0.5rem;

  transition: background-color 0.3s ease;

  &:not(:last-child) {
    border-bottom: 0.0625rem solid #444;
  }

  &.positive {
    background-color: #4caf50;
  }

  &.negative {
    background-color: #f44336;
  }

  @include breakpoint-md {
    padding: 0.75rem;
  }
}

.clue-label {
  flex-grow: 1;
  font-size: var(--text-sm);
  line-height: 1;

  @include breakpoint-xs {
    font-size: var(--text-base);
  }
}

.clue-buttons {
  display: flex;
  gap: 0.3125rem;
}

.clue-button {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.25rem;
  height: 2.25rem;
  border: unset;
  border-radius: 0.1875rem;

  color: #eee;

  background-color: #555;

  transition: background-color 0.3s ease;

  &::before {
    pointer-events: none;
    content: attr(aria-label);

    position: absolute;
    bottom: 125%;

    padding: 0.375rem;
    border-radius: 0.25rem;

    font-size: var(--text-xxs);
    color: #fff;

    opacity: 0;
    background-color: #333;

    transition: opacity 0.3s ease;

    @include breakpoint-xs {
      font-size: var(--text-xs);
    }

    @include breakpoint-sm {
      padding: 0.5rem;
      font-size: var(--text-sm);
    }
  }

  &:enabled {
    cursor: pointer;
  }

  @include hover {
    &::before {
      opacity: 1;
    }

    &:enabled {
      background-color: #777;
    }
  }
}
</style>
