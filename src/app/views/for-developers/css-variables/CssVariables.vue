<template>
  <neon-stack>
    <neon-card>
      <neon-card-header>
        <h1>CSS Variables</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <h2 class="neon-h4">Variable list</h2>
        <neon-stack gap="m">
          <p>Here is the list of customizable CSS variables that are provided in Neon.</p>
          <p>Set these variables in any scoped context to override the default values</p>
          <neon-card-list :items="filteredVariables" :load-on-demand="loadOnDemandConfig">
            <template #header>
              <neon-input v-model="filter" placeholder="Filter..." />
            </template>
            <template #card="{ model, index }">
              <css-variable-card :variable="model" />
            </template>
          </neon-card-list>
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./CssVariables.ts" />
