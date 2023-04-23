<template>
  <transition-group
    :aria-disabled="disabled"
    :class="[`neon-list--${size}`, `neon-list--${color}`, { 'neon-list--disabled': disabled }]"
    class="no-style neon-list"
    name="neon-transition-list-item"
    role="group"
    tag="ul"
  >
    <li
      v-for="item in modelValue"
      :key="item.key"
      aria-checked="true"
      class="neon-list__item"
      role="switch"
      tabindex="0"
      @click="remove(item.key)"
      @keydown.enter="remove(item.key)"
      @keydown.space="remove(item.key)"
      @keydown.space.prevent=""
    >
      <span>{{ item.label }}</span>
      <neon-icon v-if="!disabled" name="times" />
    </li>
  </transition-group>
</template>

<script lang="ts" src="./NeonList.ts" />
