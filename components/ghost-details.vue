<script setup lang="ts">
import type { GhostId } from '#imports';

const { selectedGhost } = defineProps<{ selectedGhost: GhostId | null }>();
</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
  >
    <div
      v-if="selectedGhost"
      :key="selectedGhost"
      class="ghost-details"
    >
      <h2 class="heading"> {{ ghostsData[selectedGhost].label }} </h2>
      <p class="description"> {{ ghostsData[selectedGhost].description }} </p>
      <h3 class="subheading">Улики:</h3>
      <ul class="clues">
        <li
          v-for="clue in ghostsData[selectedGhost].clues"
          :key="clue"
          class="clue"
        >
          {{ cluesData[clue].label }}
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.ghost-details {
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0.3125rem;
  border: 0.0625rem solid #333;
  border-radius: 0.25rem;

  background-color: #2a2a2a;

  @include breakpoint-xs {
    gap: 0.125rem;
    padding: 0.9375rem;
  }

  @include breakpoint-sm {
    gap: 0.25rem;
  }

  @include breakpoint-md {
    gap: 0.5rem;
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

.description {
  margin-block: 0;
  padding: 0.25rem;
  font-size: var(--text-xs);
  line-height: 1.2;

  @include breakpoint-xs {
    font-size: var(--text-sm);
  }

  @include breakpoint-sm {
    font-size: var(--text-base);
  }

  @include breakpoint-md {
    font-size: var(--text-lg);
  }
}

.subheading {
  margin-block: 0;
  padding: 0.25rem;
  font-size: var(--text-sm);

  @include breakpoint-xs {
    font-size: var(--text-base);
  }

  @include breakpoint-sm {
    font-size: var(--text-lg);
  }

  @include breakpoint-md {
    font-size: var(--text-xl);
  }
}

.clues {
  margin-block: 0;
}

.clue {
  padding: 0.125rem;
  font-size: var(--text-xs);

  @include breakpoint-xs {
    font-size: var(--text-sm);
  }

  @include breakpoint-sm {
    font-size: var(--text-base);
  }

  @include breakpoint-md {
    font-size: var(--text-lg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
