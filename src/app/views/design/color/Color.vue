<template>
  <neon-card>
    <neon-card-header>
      <h1>Colors</h1>
    </neon-card-header>
    <neon-card-body>
      <h2>Neutral palettes</h2>
      <div class="colors neutral-colors">
        <div v-for="color in neutralColors" :key="color" class="color-list">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`${color}l${6 - i}`"
            :class="`neon-${color}-bg-color-l${6 - i}`"
          >
            {{ `${color}-l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`${color}d${i}`"
            :class="`neon-${color}-bg-color-d${i}`"
          >
            {{ `${color}-d${i}` }}
          </div>
        </div>
      </div>
      <h2>Functional color palettes</h2>
      <div class="colors">
        <div v-for="color in functionalColors" :key="color" class="color-list">
          <div
            v-for="i in 5"
            :key="`l${i}`"
            class="color-item neon-dark-text"
            :ref="`${color}l${6 - i}`"
            :class="`neon-${color}-bg-color-l${6 - i}`"
          >
            {{ `${color}-l${6 - i}` }}
          </div>
          <div
            v-for="i in 5"
            :key="`d${i}`"
            class="color-item neon-light-text"
            :ref="`${color}d${i}`"
            :class="`neon-${color}-bg-color-d${i}`"
          >
            {{ `${color}-d${i}` }}
          </div>
        </div>
      </div>
      <h2>Text colors</h2>
      <div class="neon-color-text-low-contrast">This is the low contrast color</div>
      <div class="neon-color-text-neutral">This is the neutral color</div>
      <div class="neon-color-text-high-contrast">This is the high-contrast color</div>
      <div class="neon-color-text-brand">This is the brand color</div>
      <div class="neon-color-text-primary">This is the primary color</div>
      <div class="neon-color-text-info">This is the info color</div>
      <div class="neon-color-text-success">This is the success color</div>
      <div class="neon-color-text-warn">This is the warn color</div>
      <div class="neon-color-text-error">This is the error color</div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Color.ts"></script>
