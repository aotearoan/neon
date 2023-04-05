<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h2 class="neon-h3">Icons</h2>
      </neon-card-header>
      <neon-card-body>
        <p>
          Below is the set of icons provided with Neon for components or used in the showcase examples. This set is
          intentionally kept small so that it is easier to replace this set with custom icons. Plus the additional
          benefit is that only those icons which are necessary are included in the final application payload.
        </p>
      </neon-card-body>
      <neon-card-body class="icons-wrapper">
        <div v-for="icon in icons" :key="`icon-${icon}`" class="icon-container">
          <neon-icon :name="icon"></neon-icon>
          <label>{{ icon }}</label>
        </div>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Icons.ts"></script>
