<template>
    <neon-grid id="icon" :layouts="layouts">
      <neon-grid-area id="icon-content">
        <neon-card>
          <neon-card-header>
            <h1>Icons</h1>
          </neon-card-header>
          <neon-card-body class="icons-wrapper">
            <div v-for="icon in icons" :key="`icon-${icon}`" class="icon-container">
              <neon-icon :name="icon"></neon-icon>
              <label>{{ icon }}</label>
            </div>
          </neon-card-body>
        </neon-card>
      </neon-grid-area>
    </neon-grid>
</template>

<script lang="ts" src="./Icons.ts"></script>
