<template>
  <neon-grid id="toggle-example" :layouts="layouts">
    <neon-grid-area id="toggle-content">
      <neon-card>
        <neon-card-header>
          <h1>Toggle</h1>
        </neon-card-header>
        <neon-card-body>
          <div v-for="size in sizes" :key="`toggle-${size}`" class="neon-horizontal neon-space-evenly">
            <neon-toggle
              :name="`toggle-neutral-${size}`"
              :size="size"
              color="neutral"
              :model="model"
              v-model="selected"
            />
            <neon-toggle :name="`toggle-${size}`" :size="size" color="primary" :model="model" v-model="selected" />
            <neon-toggle
              :name="`toggle-${size}-disabled`"
              :size="size"
              color="info"
              :disabled="true"
              :model="model"
              v-model="selected"
            />
          </div>
          <pre>selected = {{ selected }}</pre>
        </neon-card-body>
      </neon-card>
    </neon-grid-area>
    <neon-grid-area id="radio-buttons-content">
      <neon-card>
        <neon-card-header>
          <h1>Radio buttons</h1>
        </neon-card-header>
        <neon-card-body>
          <div v-for="size in sizes" :key="`rb-${size}`" class="neon-horizontal neon-space-evenly">
            <neon-toggle
              :name="`rb-neutral-${size}`"
              :size="size"
              toggleStyle="radio-buttons"
              color="neutral"
              orientation="horizontal"
              :model="model"
              v-model="selected"
            />
            <neon-toggle
              :name="`rb-${size}`"
              :size="size"
              toggleStyle="radio-buttons"
              color="primary"
              :model="model"
              v-model="selected"
            />
            <neon-toggle
              :name="`rb-${size}-disabled`"
              :size="size"
              toggleStyle="radio-buttons"
              color="info"
              :disabled="true"
              :model="model"
              v-model="selected"
            />
          </div>
          <pre>selected = {{ selected }}</pre>
        </neon-card-body>
      </neon-card>
    </neon-grid-area>
  </neon-grid>
</template>

<script lang="ts" src="./Toggle.ts"></script>
