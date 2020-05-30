<template>
  <neon-card>
    <neon-card-header>
      <h1>Labels</h1>
    </neon-card-header>
    <neon-card-body>
      <div v-for="size in labelSizes" :key="`label-${size}-solid-with-icon`" class="neon-horizontal neon-space-evenly">
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-solid-with-icon`"
          :color="color"
          :size="size"
          :label="color"
          icon="check"
          :icon-position="color === 'primary' ? 'right' : 'left'"
        ></neon-label>
      </div>
      <div v-for="size in labelSizes" :key="`label-${size}-solid`" class="neon-horizontal neon-space-evenly">
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-solid`"
          :color="color"
          :size="size"
          :label="color"
        ></neon-label>
      </div>
      <div
        v-for="size in labelSizes"
        :key="`label-${size}-outline-with-icon`"
        class="neon-horizontal neon-space-evenly"
      >
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-outline-with-icon`"
          :color="color"
          :size="size"
          :label="color"
          :outline="true"
          icon="check"
          :icon-position="color === 'primary' ? 'right' : 'left'"
        ></neon-label>
      </div>
      <div v-for="size in labelSizes" :key="`label-${size}-outline`" class="neon-horizontal neon-space-evenly">
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-outline`"
          :color="color"
          :size="size"
          :label="color"
          :outline="true"
        ></neon-label>
      </div>
      <div v-for="size in labelSizes" :key="`label-${size}-solid-icon-only`" class="neon-horizontal neon-space-evenly">
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-outline-with-icon`"
          :color="color"
          :size="size"
          icon="check"
        ></neon-label>
      </div>
      <div
        v-for="size in labelSizes"
        :key="`label-${size}-outline-icon-only`"
        class="neon-horizontal neon-space-evenly"
      >
        <neon-label
          v-for="color in colors"
          :key="`label-${color}-${size}-outline-with-icon`"
          :color="color"
          :size="size"
          :outline="true"
          icon="check"
        ></neon-label>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Label.ts"></script>
