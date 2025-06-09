<script setup lang="ts">
import { GhostId } from '#imports';

const selectedGhost = ref<GhostId | null>(null);

interface GhostButton {
  id: GhostId;
  label: string;
}

const ghostButtons: GhostButton[] = [
  { id: GhostId.Spirit, label: ghostsData[GhostId.Spirit].label },
  { id: GhostId.Wraith, label: ghostsData[GhostId.Wraith].label },
  { id: GhostId.Phantom, label: ghostsData[GhostId.Phantom].label },
  { id: GhostId.Poltergeist, label: ghostsData[GhostId.Poltergeist].label },
  { id: GhostId.Banshee, label: ghostsData[GhostId.Banshee].label },
  { id: GhostId.Jinn, label: ghostsData[GhostId.Jinn].label },
  { id: GhostId.Mare, label: ghostsData[GhostId.Mare].label },
  { id: GhostId.Revenant, label: ghostsData[GhostId.Revenant].label },
  { id: GhostId.Shade, label: ghostsData[GhostId.Shade].label },
  { id: GhostId.Demon, label: ghostsData[GhostId.Demon].label },
  { id: GhostId.Yurei, label: ghostsData[GhostId.Yurei].label },
  { id: GhostId.Oni, label: ghostsData[GhostId.Oni].label },
  { id: GhostId.Yokai, label: ghostsData[GhostId.Yokai].label },
  { id: GhostId.Hantu, label: ghostsData[GhostId.Hantu].label },
  { id: GhostId.Goryo, label: ghostsData[GhostId.Goryo].label },
  { id: GhostId.Myling, label: ghostsData[GhostId.Myling].label },
  { id: GhostId.Onryo, label: ghostsData[GhostId.Onryo].label },
  { id: GhostId.TheTwins, label: ghostsData[GhostId.TheTwins].label },
  { id: GhostId.Raiju, label: ghostsData[GhostId.Raiju].label },
  { id: GhostId.Obake, label: ghostsData[GhostId.Obake].label },
  { id: GhostId.TheMimic, label: ghostsData[GhostId.TheMimic].label },
  { id: GhostId.Moroi, label: ghostsData[GhostId.Moroi].label },
  { id: GhostId.Deogen, label: ghostsData[GhostId.Deogen].label },
  { id: GhostId.Thaye, label: ghostsData[GhostId.Thaye].label },
];
</script>

<template>
  <div class="possible-ghosts">
    <h2 class="heading">Возможные призраки</h2>
    <div class="list">
      <button
        v-for="ghost in ghostButtons"
        :key="ghost.id"
        class="ghost-button"
        @click="selectedGhost = selectedGhost !== ghost.id ? ghost.id : null"
      >
        <span :class="['ghost-label', { selected: selectedGhost === ghost.id }]">
          {{ ghost.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.possible-ghosts {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  width: 100%;
  padding: 0.3125rem;
  border: 0.0625rem solid #333;
  border-radius: 0.25rem;

  @include breakpoint-xs {
    padding: 0.75rem;
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

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.ghost-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.9375rem 0.1875rem;
  border: unset;

  background-color: unset;

  &:enabled {
    cursor: pointer;
  }

  @include hover {
    &:enabled {
      box-shadow:
        inset 0 0 0.1rem -0.025rem #ffd700,
        0 0 0.1rem -0.025rem #ffd700;
    }
  }
}

.ghost-label {
  font-size: var(--text-base);
  line-height: 1;
  color: #f0f0f0;
  transition: color 0.3s;

  &.selected {
    font-weight: 700;
    color: #ffd700;
  }
}
</style>
