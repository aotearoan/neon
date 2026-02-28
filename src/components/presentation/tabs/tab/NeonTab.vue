<template>
  <transition :name="transition ? 'neon-fade-transition' : null" mode="out-in">
    <div
      v-if="selected"
      :id="id"
      :aria-labelledby="id ? `${id}Button` : undefined"
      :class="{ 'neon-tab--selected': selected }"
      class="neon-tab"
      role="tabpanel"
      tabindex="0"
    >
      <!-- @slot The tab content -->
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonTab.ts"></script>
