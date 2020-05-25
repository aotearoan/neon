<template>
  <neon-grid id="badge" :layouts="layouts">
    <neon-grid-area id="badge-content">
      <neon-card>
        <neon-card-header>
          <h1>Badges</h1>
        </neon-card-header>
        <neon-card-body>
          <div v-for="size in sizes" :key="`badge-${size}`" class="neon-horizontal neon-space-evenly">
            <neon-badge
              v-for="color in colors"
              :key="`badge-${color}-${size}`"
              :color="color"
              :size="size"
              label="XD"
              :circular="size === 'l'"
            ></neon-badge>
          </div>
          <div v-for="size in sizes" :key="`badge-${size}-image-icon`" class="neon-horizontal neon-space-evenly">
            <neon-badge :circular="size === 'l'" :size="size" image="/images/doge.jpg"></neon-badge>
            <neon-badge :circular="size === 'l'" :size="size" icon="user"></neon-badge>
          </div>
        </neon-card-body>
      </neon-card>
    </neon-grid-area>
  </neon-grid>
</template>

<script lang="ts" src="./Badge.ts"></script>
