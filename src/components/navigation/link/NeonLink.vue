<template>
  <router-link
    v-if="routerUrl"
    :to="routerUrl"
    class="neon-link neon-link--router-link"
    :class="{ 'neon-link--no-style': noStyle }"
    v-on="$listeners"
    @click.native="onClick"
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
    @click="onClick"
    v-bind="$attrs"
  >
    <span class="neon-link__label">
      <!-- @slot the link's content -->
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts" src="./NeonLink.ts" />
