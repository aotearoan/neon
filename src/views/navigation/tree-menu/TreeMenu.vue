<template>
    <neon-grid id="tree-menu" :layouts="layouts">
      <neon-grid-area id="tree-menu-content">
        <neon-card>
          <neon-card-header>
            <h1>Tree Menu</h1>
          </neon-card-header>
          <neon-card-body>
            <neon-tree-menu :model="model"></neon-tree-menu>
          </neon-card-body>
        </neon-card>
      </neon-grid-area>
    </neon-grid>
</template>

<script lang="ts" src="./TreeMenu.ts"></script>
