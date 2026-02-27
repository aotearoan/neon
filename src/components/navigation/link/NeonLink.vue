<template>
  <router-link
    v-if="routerUrl"
    :class="[
      { 'neon-link--no-style': noStyle, 'neon-link--active': activeRoute, 'neon-link--exact-active': exactRoute },
      `neon-link--outline-${outlineStyle}`,
    ]"
    :to="routerUrl"
    class="neon-link neon-link--router-link"
    tabindex="0"
    v-bind="sanitizedAttributes"
    @click="onClick"
    @keydown.enter="onClick"
    @keydown.space.prevent="onSpace"
  >
    <!-- @slot the content of the link -->
    <slot></slot>
  </router-link>
  <a
    v-else-if="href"
    :class="[
      {
        'neon-link--no-style': noStyle,
        'neon-link--with-external-indicator': externalIndicator,
        'neon-link--active': activeRoute,
        'neon-link--exact-active': exactRoute,
      },
      `neon-link--outline-${outlineStyle}`,
    ]"
    :href="href"
    class="neon-link neon-link--external-link"
    rel="noopener"
    tabindex="0"
    v-bind="sanitizedAttributes"
    @click="onClick"
    @keydown.enter="onClick"
    @keydown.space.prevent="onSpace"
  >
    <!-- @slot the content of the link -->
    <slot></slot>
    <neon-icon
      v-if="externalIndicator"
      class="neon-link__external-indicator"
      color="low-contrast"
      name="share-external-link-1"
    />
  </a>
  <a
    v-else
    :class="[{ 'neon-link--no-style': noStyle }, `neon-link--outline-${outlineStyle}`]"
    class="neon-link"
    tabindex="0"
    v-bind="sanitizedAttributes"
    @click="onClick"
    @keydown.enter="onClick"
    @keydown.space.prevent="onSpace"
  >
    <!-- @slot the content of the link -->
    <slot></slot>
  </a>
</template>

<script lang="ts" src="./NeonLink.ts" />
