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
      <!-- @slot the link's content -->
      <slot></slot>
    </span>
  </router-link>
  <a
    v-else
    :href="href"
    class="neon-link neon-link--external-link"
    :class="{ 'neon-link--no-style': noStyle }"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <span class="neon-link__label">
      <!-- @slot the link's content -->
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts" src="./NeonLink.ts" />
