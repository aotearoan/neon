<template>
  <router-link
    v-if="routerUrl"
    :to="routerUrl"
    class="neon-link neon-link--router-link"
    :class="{ 'neon-link--no-style': noStyle }"
    v-on="$listeners"
    v-bind="$attrs"
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
    :class="{ 'neon-link--no-style': noStyle }"
    v-on="$listeners"
    v-bind="$attrs"
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
  <a v-else class="neon-link" :class="{ 'neon-link--no-style': noStyle }" v-on="$listeners" v-bind="$attrs">
    <span class="neon-link__label">
      <!-- @slot the content of the link -->
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts" src="./NeonLink.ts" />
