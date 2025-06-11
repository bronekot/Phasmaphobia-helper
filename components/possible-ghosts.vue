<script setup lang="ts">
import { GhostId } from '#imports';

defineProps<{
  selectedGhost: GhostId | null;
}>();
defineEmits<{
  updateSelectedGhost: [newSelectedGhost: GhostId];
}>();

const ghostButtons: GhostId[] = [
  GhostId.Spirit,
  GhostId.Wraith,
  GhostId.Phantom,
  GhostId.Poltergeist,
  GhostId.Banshee,
  GhostId.Jinn,
  GhostId.Mare,
  GhostId.Revenant,
  GhostId.Shade,
  GhostId.Demon,
  GhostId.Yurei,
  GhostId.Oni,
  GhostId.Yokai,
  GhostId.Hantu,
  GhostId.Goryo,
  GhostId.Myling,
  GhostId.Onryo,
  GhostId.TheTwins,
  GhostId.Raiju,
  GhostId.Obake,
  GhostId.TheMimic,
  GhostId.Moroi,
  GhostId.Deogen,
  GhostId.Thaye,
];
</script>

<template>
  <div class="possible-ghosts">
    <h2 class="heading">Возможные призраки</h2>
    <div class="list">
      <button
        v-for="ghostId in ghostButtons"
        :key="ghostId"
        class="ghost-button"
        @click="$emit('updateSelectedGhost', ghostId)"
      >
        <span :class="['ghost-label', { selected: selectedGhost === ghostId }]">
          {{ ghostsData[ghostId].label }}
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
