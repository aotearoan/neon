<template>
  <div>
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
      <neon-card-header>
        <h2>Icon toggle</h2>
      </neon-card-header>
      <neon-card-body>
        <div v-for="size in sizes" :key="`toggle-icon-${size}`" class="neon-horizontal neon-space-evenly">
          <neon-toggle
            :name="`toggle-icon-neutral-${size}`"
            :size="size"
            color="neutral"
            :model="iconModel"
            v-model="iconSelected"
          />
          <neon-toggle
            :name="`toggle-icon-${size}`"
            :size="size"
            color="primary"
            :model="iconModel"
            v-model="iconSelected"
          />
          <neon-toggle
            :name="`toggle-icon-${size}-disabled`"
            :size="size"
            color="info"
            :disabled="true"
            :model="iconModel"
            v-model="iconSelected"
          />
        </div>
        <pre>selected = {{ iconSelected }}</pre>
      </neon-card-body>
    </neon-card>
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
  </div>
</template>

<script lang="ts" src="./Toggle.ts"></script>
