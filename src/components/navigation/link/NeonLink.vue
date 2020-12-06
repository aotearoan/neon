<template>
  <router-link
    v-if="routerUrl"
    :to="routerUrl"
    class="neon-link neon-link--router-link"
    :class="[{ 'neon-link--no-style': noStyle }, `neon-link--outline-${outlineStyle}`]"
    v-on="sanitizedListeners"
    v-bind="$attrs"
    tabindex="0"
    @click="onClick"
    @keydown.enter="onClick"
  >
    <span class="neon-link__label">
      <!-- @slot the content of the link -->
      <slot></slot>
    </span>
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    class="neon-link neon-link--external-link"
    :class="[
      { 'neon-link--no-style': noStyle, 'neon-link--with-external-indicator': externalIndicator },
      `neon-link--outline-${outlineStyle}`,
    ]"
    v-on="sanitizedListeners"
    v-bind="$attrs"
    tabindex="0"
    @click="onClick"
    @keydown.enter="onClick"
    rel="noopener"
  >
    <span class="neon-link__label">
      <!-- @slot the content of the link -->
      <slot></slot>
      <neon-icon
        v-if="externalIndicator"
        name="link-external"
        color="low-contrast"
        class="neon-link__external-indicator"
      />
    </span>
  </a>
  <a
    v-else
    class="neon-link"
    :class="[{ 'neon-link--no-style': noStyle }, `neon-link--outline-${outlineStyle}`]"
    v-on="sanitizedListeners"
    v-bind="$attrs"
    tabindex="0"
    @click="onClick"
    @keydown.enter="onClick"
  >
    <span class="neon-link__label">
      <!-- @slot the content of the link -->
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts" src="./NeonLink.ts" />
