<template>
  <neon-card>
    <neon-card-header>
      <h1>Badges</h1>
    </neon-card-header>
    <neon-card-body>
      <div v-for="size in sizes" :key="`badge-neutral-${size}`" class="neon-horizontal neon-space-evenly">
        <neon-badge
          v-for="color in neutralColors"
          :key="`badge-neutral-${color}-${size}`"
          :color="color"
          :size="size"
          label="XD"
          :circular="size === 'l'"
        ></neon-badge>
        <neon-badge :circular="size === 'l'" :size="size" :image="imgUrl"></neon-badge>
        <neon-badge :circular="size === 'l'" :size="size" icon="user"></neon-badge>
      </div>
      <div v-for="size in sizes" :key="`badge-color-${size}`" class="neon-horizontal neon-space-evenly">
        <neon-badge
          v-for="color in functionalColors"
          :key="`badge-color-${color}-${size}`"
          :color="color"
          :size="size"
          label="XD"
          :circular="size === 'l'"
        ></neon-badge>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Badge.ts"></script>
