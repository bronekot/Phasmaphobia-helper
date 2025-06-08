<script setup lang="ts">
const mock = {
  heading: 'Ревенант',
  description:
    'Во время охоты движется очень медленно (1 м/с), пока не получит прямую видимость игрока (3 м/с). Это делает крайне важным спрятаться как можно скорее после начала охоты. Потеряв прямую видимость, он сохраняет скорость до достижения последней известной позиции игрока, которого видел. Скорость призрака постепенно снижается после потери прямой видимости.',
  clues: [
    { id: '1', label: 'Записи в блокноте' },
    { id: '2', label: 'Минусовая температура' },
    { id: '3', label: 'Призрачный огонёк' },
    { id: '4', label: 'След на соли' },
  ],
};
</script>

<template>
  <div class="ghost-details">
    <h2 class="heading"> {{ mock.heading }} </h2>
    <p class="description"> {{ mock.description }} </p>
    <h3 class="subheading">Улики:</h3>
    <ul class="clues">
      <li
        v-for="clue in mock.clues"
        :key="clue.id"
        class="clue"
      >
        {{ clue.label }}
      </li>
    </ul>
  </div>
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
</style>
