<template>
  <neon-grid id="button" :layouts="layouts">
    <neon-grid-area id="button-content">
      <neon-card>
        <neon-card-header>
          <h1>Buttons</h1>
        </neon-card-header>
        <neon-card-body class="buttons" v-for="buttonStyle in buttonStyles" :key="buttonStyle">
          <h4>{{ buttonStyle }} buttons</h4>
          <div v-for="size in sizes" :key="size" class="neon-horizontal neon-space-evenly">
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
        </neon-card-body>
        <neon-card-body class="buttons">
          <h4>Icon only buttons</h4>
          <div v-for="size in sizes" :key="size" class="neon-horizontal neon-space-evenly">
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
        </neon-card-body>
        <neon-card-body class="buttons">
          <h4>Circular icon buttons</h4>
          <div v-for="size in sizes" :key="size" class="neon-horizontal neon-space-evenly">
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
        </neon-card-body>
        <neon-card-body class="buttons">
          <h4>Buttons with icons</h4>
          <div v-for="size in sizes" :key="`button-with-icon-${size}`" class="neon-horizontal neon-space-evenly">
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
        </neon-card-body>
        <neon-card-body class="buttons">
          <h4>Link buttons</h4>
          <neon-note><strong>Note:</strong> add an href to buttons and they will be rendered as links</neon-note>
          <div class="neon-horizontal neon-space-evenly">
            <neon-button label="Link button" href="."></neon-button>
            <neon-button label="Link button" href="." button-style="outline"></neon-button>
            <neon-button label="Link button" href="." button-style="text"></neon-button>
          </div>
        </neon-card-body>
        <neon-card-body class="buttons">
          <h4>Full width buttons</h4>
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
    </neon-grid-area>
  </neon-grid>
</template>

<script lang="ts" src="./Button.ts"></script>
