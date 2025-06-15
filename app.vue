<script setup lang="ts">
const {
  currentDifficulty,
  clueStates,
  selectedGhost,
  showAllGhosts,
  foundClues,
  excludedClues,
  possibleGhosts,
  resetClues,
  updateSelectedGhost,
} = useAppSettings();

// TODO распихать куда надо
void foundClues;
void excludedClues;
</script>

<template>
  <div class="app">
    <h1 class="heading"> Phasmophobia Ghost Identifier </h1>
    <DifficultySelector v-model="currentDifficulty" />
    <ClueList
      v-model="clueStates"
      :selected-ghost="selectedGhost"
      @reset-clues="resetClues"
    />
    <PossibleGhosts
      :possible-ghosts="possibleGhosts"
      :show-all-ghosts="showAllGhosts"
      :selected-ghost="selectedGhost"
      @update-selected-ghost="updateSelectedGhost"
    />
    <GhostDetails :selected-ghost="selectedGhost" />
    <GhostsModeSwitcher v-model="showAllGhosts" />
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
