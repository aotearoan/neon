<template>
  <neon-card>
    <neon-card-header>
      <h1>Labels</h1>
    </neon-card-header>
    <neon-card-body>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-solid`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-solid`"
            :color="color"
            :size="size"
            :label="color"
          ></neon-label>
        </div>
      </div>
      <h2>Labels with icons</h2>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-solid-icon-only`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-outline-with-icon`"
            :color="color"
            :size="size"
            :label="color"
            icon="lock"
          ></neon-label>
        </div>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Label.ts"></script>
