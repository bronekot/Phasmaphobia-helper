<script setup lang="ts">
import { GhostId } from '~/utils';

const ghostButtons = [
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
] as const satisfies GhostId[];

const store = useSettings();
</script>

<template>
  <div class="possible-ghosts">
    <h2 class="heading">Возможные призраки</h2>
    <TransitionGroup
      name="ghost-list"
      class="ghost-list"
      tag="ul"
    >
      <li
        v-for="ghostId in store.showAllGhosts
          ? ghostButtons
          : ghostButtons.filter((ghostId) => store.possibleGhosts.has(ghostId))"
        :key="ghostId"
      >
        <button
          class="ghost-button"
          @click="store.selectedGhostId = store.selectedGhostId === ghostId ? null : ghostId"
        >
          <span
            :class="[
              'ghost-label',
              {
                impossible: !store.possibleGhosts.has(ghostId),
                selected: store.selectedGhostId === ghostId,
              },
            ]"
          >
            {{ ghostsData.get(ghostId)?.label ?? ghostId }}
          </span>
        </button>
      </li>
    </TransitionGroup>
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

.ghost-list {
  position: relative;

  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  margin-block: 0;
  padding-inline-start: 0;

  list-style: none;

  .ghost-list-move,
  .ghost-list-enter-active,
  .ghost-list-leave-active {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .ghost-list-enter-from,
  .ghost-list-leave-to {
    transform: translateX(1.875rem);
    opacity: 0;
  }

  .ghost-list-leave-active {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.ghost-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
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
  transition:
    color 0.3s,
    opacity 0.3s;

  &.impossible {
    opacity: 0.5;
  }

  &.selected {
    font-weight: 700;
    color: #ffd700;
  }
}
</style>
