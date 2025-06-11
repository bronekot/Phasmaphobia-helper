<script setup lang="ts">
import { ClueStatus, ClueId } from '#imports';

defineModel<Record<ClueId, ClueStatus>>({ required: true });
defineEmits<{
  resetClues: [];
}>();

const clueItems = ref<ClueId[]>([
  ClueId.EmfLevel5,
  ClueId.Ultraviolet,
  ClueId.GhostWriting,
  ClueId.FreezingTemperatures,
  ClueId.DotsProjector,
  ClueId.GhostOrb,
  ClueId.SpiritBox,
  ClueId.DisturbedSaltPile,
]);

const clueItemButtons = [
  { id: ClueStatus.Found, icon: 'fa6-solid:check', label: 'Подтвердить' },
  { id: ClueStatus.Null, icon: 'fa6-solid:arrow-rotate-left', label: 'Сбросить' },
  { id: ClueStatus.Excluded, icon: 'fa6-solid:xmark', label: 'Вычеркнуть' },
];

const formId = useId();
</script>

<template>
  <form
    class="clue-list"
    @submit.prevent
  >
    <div class="header">
      <h2 class="heading">Улики</h2>
      <button
        class="reset-button"
        aria-label="Сбросить всё"
        @click="$emit('resetClues')"
      >
        <Icon name="fa6-solid:arrows-rotate" />
      </button>
    </div>
    <div class="list">
      <fieldset
        v-for="clueId in clueItems"
        :key="clueId"
        :class="[
          'clue',
          {
            positive: modelValue[clueId] === ClueStatus.Found,
            negative: modelValue[clueId] === ClueStatus.Excluded,
          },
        ]"
      >
        <legend class="clue-label">
          {{ cluesData[clueId].label }}
        </legend>
        <template
          v-for="button in clueItemButtons"
          :key="button.id"
        >
          <input
            :id="`${formId}-${clueId}-${button.id}`"
            v-model="modelValue[clueId]"
            type="radio"
            class="clue-button-input sr-only"
            :name="`${formId}-${clueId}`"
            :value="button.id"
          />
          <label
            :for="`${formId}-${clueId}-${button.id}`"
            class="clue-button-label"
            :aria-label="button.label"
          >
            <Icon :name="button.icon" />
          </label>
        </template>
      </fieldset>
    </div>
  </form>
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
  border: unset;

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
  float: left;
  flex-grow: 1;
  font-size: var(--text-sm);
  line-height: 1;

  @include breakpoint-xs {
    font-size: var(--text-base);
  }
}

.clue-button-label {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.25rem;
  height: 2.25rem;
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

  @include hover {
    &::before {
      opacity: 1;
    }
  }
}

.clue-button-input {
  &:not(:checked) + .clue-button-label {
    cursor: pointer;

    @include hover {
      background-color: #777;
    }
  }

  &:focus-visible + .clue-button-label {
    outline: 0.0625rem auto #101010;
  }
}
</style>
