<template>
  <neon-card>
    <neon-card-header>
      <h1>Labels</h1>
    </neon-card-header>
    <neon-card-body>
      <h2>Solid labels</h2>
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
      <h2>Outline labels</h2>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-outline`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-outline`"
            :color="color"
            :size="size"
            :label="color"
            label-style="outline"
          ></neon-label>
        </div>
      </div>
      <h2>Background color labels</h2>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-outline`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-outline`"
            :color="color"
            :size="size"
            :label="color"
            label-style="background"
          ></neon-label>
        </div>
      </div>
      <h2>With icons</h2>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-outline-with-icon`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-outline-with-icon`"
            :color="color"
            :size="size"
            :label="color"
            label-style="outline"
            icon="check"
            :icon-position="color === 'primary' ? 'right' : 'left'"
          ></neon-label>
        </div>
      </div>
      <h2>Icon only</h2>
      <div class="collection">
        <div v-for="size in labelSizes" :key="`label-${size}-solid-icon-only`" class="neon-vertically-spaced">
          <neon-label
            v-for="color in colors"
            :key="`label-${color}-${size}-outline-with-icon`"
            :color="color"
            :size="size"
            icon="check"
          ></neon-label>
        </div>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Label.ts"></script>
