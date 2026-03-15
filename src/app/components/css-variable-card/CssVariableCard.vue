<template>
  <neon-stack class="css-variable-card" gap="m">
    <span class="css-variable-card__name">{{ variable.name }}</span>
    <neon-inline v-if="variable.type === 'global'" gap="m">
      <neon-label class="css-variable-card__default-label" color="high-contrast" label="Default" size="xs" />
      <span class="css-variable-card__default">{{ variable.defaultValue }}</span>
    </neon-inline>
    <neon-stack v-else gap="s">
      <neon-inline gap="m">
        <neon-label class="css-variable-card__default-label" color="high-contrast" label="Light" size="xs" />
        <span class="css-variable-card__default">{{ variable.defaultValue }}</span>
      </neon-inline>
      <neon-inline gap="m">
        <neon-label class="css-variable-card__default-label" color="low-contrast" label="Dark" size="xs" />
        <span class="css-variable-card__default">{{ variable.defaultValueAlt }}</span>
      </neon-inline>
    </neon-stack>
    <p class="css-variable-card__description">
      <em v-html="variable.description" />
    </p>
  </neon-stack>
</template>

<script lang="ts" src="./CssVariableCard.ts" />
