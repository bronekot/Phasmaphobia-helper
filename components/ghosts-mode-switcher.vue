<script setup lang="ts">
const inputId = useId();

const isChecked = defineModel<boolean>('show-all-ghosts', { required: true });
</script>

<template>
  <div class="ghosts-mode-switcher">
    <input
      :id="inputId"
      v-model="isChecked"
      class="toggle"
      type="checkbox"
    />
    <label
      :for="inputId"
      class="label"
    >
      Показывать всех призраков (затенять отфильтрованных)
    </label>
  </div>
</template>

<style scoped lang="scss">
.ghosts-mode-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem 0.3125rem;
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
