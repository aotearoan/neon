<template>
  <neon-grid id="drawer" :layouts="layouts">
    <neon-grid-area id="drawer-content">
      <neon-card>
        <neon-card-header>
          <h1>Drawer</h1>
        </neon-card-header>
        <neon-card-body>
          <div class="neon-horizontal neon-space-evenly">
            <neon-button label="Open left" @click="openLeft = true"></neon-button>
            <neon-button label="Open right" @click="openRight = true"></neon-button>
            <neon-button label="Open top" @click="openTop = true"></neon-button>
            <neon-button label="Open bottom" @click="openBottom = true"></neon-button>
            <neon-drawer :open="openLeft" position="left" @close="openLeft = false">
              <div v-html="contents"></div>
            </neon-drawer>
            <neon-drawer :open="openRight" position="right" @close="openRight = false">
              <div v-html="contents"></div>
            </neon-drawer>
            <neon-drawer :open="openTop" position="top" @close="openTop = false" :overlay="false">
              <div v-html="contents"></div>
            </neon-drawer>
            <neon-drawer :open="openBottom" position="bottom" @close="openBottom = false" :full-width="true">
              <div v-html="contents"></div>
            </neon-drawer>
          </div>
        </neon-card-body>
      </neon-card>
    </neon-grid-area>
  </neon-grid>
</template>

<script lang="ts" src="./Drawer.ts"></script>
