<template>
  <transition-group
    tag="ul"
    name="neon-transition-list-item"
    class="no-style neon-list"
    :class="[`neon-list--${size}`, `neon-list--${color}`, { 'neon-list--disabled': disabled }]"
    role="group"
    :aria-disabled="disabled"
  >
    <li
      v-for="item in value"
      :key="item.key"
      @click="remove(item.key)"
      @keydown.enter="remove(item.key)"
      @keydown.space="remove(item.key)"
      @keydown.space.prevent=""
      class="neon-list__item"
      tabindex="0"
      role="switch"
      aria-checked="true"
    >
      <span>{{ item.label }}</span>
      <neon-icon v-if="!disabled" name="times" />
    </li>
  </transition-group>
</template>

<script lang="ts" src="./NeonList.ts" />
