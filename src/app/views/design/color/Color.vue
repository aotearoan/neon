<template>
  <neon-card>
    <neon-card-header>
      <h1>Color palettes</h1>
    </neon-card-header>
    <neon-card-body>
      <div class="colors">
        <div v-for="color in colors" :key="color" class="color-list">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item dark-text"
            :ref="`${color}l${6 - i}`"
            :class="`neon-${color}-bg-color-l${6 - i}`"
          >
            {{ `${color}-l${6 - i}` }}
          </div>
          <div class="color-item" :class="`neon-${color}-bg-color-default`"></div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item light-text"
            :ref="`${color}d${i}`"
            :class="`neon-${color}-bg-color-d${i}`"
          >
            {{ `${color}-d${i}` }}
          </div>
        </div>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Color.ts"></script>
