<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A drawer is a slide out panel for representing data which may be secondary or not fit on the main screen.
          Examples are a responsive navigation menu, more details of a selected item on the page. Drawers can be opened
          from top, bottom, left or right and an overlay covers the screen to focus more attention on the drawer
          contents.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Drawer examples</h2>
        <div class="example--horizontal">
          <!-- Left -->
          <neon-button label="Open left" @click="onOpenLeft(true)"></neon-button>
          <neon-drawer :open="openLeft" position="left" @close="onOpenLeft(false)">
            <div v-html="contents"></div>
          </neon-drawer>
          <!-- Right -->
          <neon-button label="Open right" @click="onOpenRight(true)"></neon-button>
          <neon-drawer :open="openRight" position="right" @close="onOpenRight(false)">
            <div v-html="contents"></div>
          </neon-drawer>
          <!-- Top (overlay = false) -->
          <neon-button label="Open top" @click="onOpenTop(true)"></neon-button>
          <neon-drawer :open="openTop" :overlay="false" position="top" @close="onOpenTop(false)">
            <div v-html="contents"></div>
          </neon-drawer>
          <!-- Bottom -->
          <neon-button label="Open bottom" @click="onOpenBottom(true)"></neon-button>
          <neon-drawer :dismissible="false" :open="openBottom" position="bottom">
            <div v-html="contents"></div>
            <br />
            <neon-button label="Close" style="align-self: flex-end" @click="onOpenBottom(false)" />
          </neon-drawer>
        </div>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Drawer.ts"></script>
