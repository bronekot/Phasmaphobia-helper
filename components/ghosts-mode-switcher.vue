<script setup lang="ts">
const inputId = useId();

const store = useSettings();
</script>

<template>
  <div class="ghosts-mode-switcher">
    <label
      :for="inputId"
      class="label"
    >
      <input
        :id="inputId"
        v-model="store.showAllGhosts"
        class="toggle"
        type="checkbox"
      />
      <span class="label-text"> Показывать всех призраков (затенять отфильтрованных)</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.ghosts-mode-switcher {
  width: 100%;
  padding: 8px 0;
  border-radius: 0.25rem;
}

.toggle {
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 1.25rem;
  border-radius: 1.25rem;

  appearance: none;
  background-color: #555;

  transition: background-color 0.3s ease;

  &::before {
    content: '';

    transform: translateX(-0.625rem);

    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    background-color: #eee;

    transition: transform 0.3s ease;

    @include breakpoint-xs {
      transform: translateX(-0.8125rem);
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  &:checked {
    background-color: #4caf50;
  }

  &:checked::before {
    transform: translateX(0.625rem);

    @include breakpoint-xs {
      transform: translateX(0.8125rem);
    }
  }

  @include breakpoint-xs {
    width: 3.125rem;
    height: 1.5rem;
    border-radius: 1.5rem;
  }
}

.label {
  cursor: pointer;

  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  width: fit-content;
  margin-inline: auto;
  padding: 0.3125rem;

  @include breakpoint-xs {
    padding: 0.5rem;
  }
}

.label-text {
  user-select: none;
  font-size: var(--text-xs);
  line-height: 1;

  @include breakpoint-xs {
    font-size: var(--text-sm);
  }

  @include breakpoint-sm {
    font-size: var(--text-base);
  }
}
</style>
