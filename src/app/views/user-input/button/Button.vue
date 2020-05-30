<template>
  <neon-card>
    <neon-card-header>
      <h1>Buttons</h1>
    </neon-card-header>
    <neon-card-body class="buttons">
      <div v-for="buttonStyle in buttonStyles" :key="buttonStyle">
        <h2>{{ buttonName(buttonStyle) }} buttons</h2>
        <div class="collection">
          <div v-for="size in sizes" :key="size" class="collection-sub-list">
            <neon-button
              v-for="color in colors"
              :key="`button-${color}-${size}`"
              :color="color"
              :size="size"
              :label="color"
              :button-style="buttonStyle"
              icon="plus"
            ></neon-button>
            <neon-button label="Disabled" :size="size" :disabled="true" :button-style="buttonStyle"></neon-button>
          </div>
        </div>
      </div>
      <h2>Icon only buttons</h2>
      <div class="collection">
        <div v-for="size in sizes" :key="size" class="collection-sub-list">
          <neon-button
            v-for="color in colors"
            :key="`icon-only-button-${color}-${size}`"
            :color="color"
            :size="size"
            button-style="outline"
            icon="plus"
          ></neon-button>
          <neon-button :size="size" :disabled="true" icon="plus"></neon-button>
        </div>
      </div>
      <h2>Circular icon buttons</h2>
      <div class="collection">
        <div v-for="size in sizes" :key="size" class="collection-sub-list">
          <neon-button
            v-for="color in colors"
            :key="`circular-icon-only-${color}-${size}`"
            :color="color"
            :size="size"
            button-style="outline"
            icon="plus"
            :circular="true"
          ></neon-button>
          <neon-button :size="size" :disabled="true" icon="plus" :circular="true"></neon-button>
        </div>
      </div>
      <h2>Buttons with icons</h2>
      <div class="collection">
        <div v-for="size in sizes" :key="`button-with-icon-${size}`" class="collection-sub-list">
          <neon-button
            v-for="color in colors"
            :key="`button-with-icon-${color}-${size}`"
            :color="color"
            :size="size"
            :label="color"
            icon="plus"
          ></neon-button>
          <neon-button label="Disabled" :size="size" :disabled="true" icon="plus" icon-position="right"></neon-button>
        </div>
      </div>
      <h2>Link buttons</h2>
      <neon-note color="info">
        <strong>Note:</strong> add an href to buttons and they will be rendered as links</neon-note
      >
      <div class="link-buttons neon-button-group">
        <neon-button label="Link button" href="."></neon-button>
        <neon-button label="Link button" href="." button-style="outline"></neon-button>
        <neon-button label="Link button" href="." button-style="text"></neon-button>
      </div>
      <h2>Full width buttons</h2>
      <div class="full-width-buttons">
        <neon-button
          v-for="color in colors"
          :key="`fullwidth-${color}`"
          :color="color"
          :label="color"
          :full-width="true"
        ></neon-button>
        <neon-button label="Disabled" :disabled="true" :full-width="true"></neon-button>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Button.ts"></script>
