<script setup lang="ts">
import { ClueId, ClueStatus } from '#imports';

const { currentDifficulty, showAllGhosts, selectedGhost } = useAppSettings();

const clueStates = ref<Record<ClueId, ClueStatus>>({
  [ClueId.EmfLevel5]: ClueStatus.Null,
  [ClueId.Ultraviolet]: ClueStatus.Null,
  [ClueId.GhostWriting]: ClueStatus.Null,
  [ClueId.FreezingTemperatures]: ClueStatus.Null,
  [ClueId.DotsProjector]: ClueStatus.Null,
  [ClueId.GhostOrb]: ClueStatus.Null,
  [ClueId.SpiritBox]: ClueStatus.Null,
  [ClueId.DisturbedSaltPile]: ClueStatus.Null,
});
</script>

<template>
  <div class="app">
    <h1 class="heading"> Phasmophobia Ghost Identifier </h1>
    <DifficultySelector v-model:current-difficulty="currentDifficulty" />
    <ClueList v-model:clue-states="clueStates" />
    <PossibleGhosts v-model:selected-ghost="selectedGhost" />
    <GhostDetails :selected-ghost="selectedGhost" />
    <GhostsModeSwitcher v-model:show-all-ghosts="showAllGhosts" />
  </div>
  <footer class="footer">
    <span class="copyright"> © 2025 Phasmophobia Helper. Разработано TactiKot с ❤️ </span>
  </footer>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  width: 100%;
  max-width: 56rem;
  padding: 0.25rem;
  border-radius: 0.25rem;

  background-color: #222;
  box-shadow: 0 0 0.9375rem #00000080;

  .heading {
    margin-block: 0;
    padding: 0.25rem;
    font-size: var(--text-xl);

    @include breakpoint-xs {
      padding: 0.5rem;
      font-size: var(--text-2xl);
    }

    @include breakpoint-sm {
      padding: 0.75rem;
      font-size: var(--text-3xl);
    }

    @include breakpoint-md {
      padding: 1rem;
      font-size: var(--text-4xl);
    }
  }

  @include breakpoint-xs {
    padding: 0.5rem;
  }
}

.footer {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

.copyright {
  font-size: var(--text-xs);
  color: #aaa;

  @include breakpoint-xs {
    font-size: var(--text-sm);
  }
}
</style>
