<template>
  <nav class="neon-action-menu">
    <ul class="no-style">
      <li v-for="item in model" :key="item.key" class="neon-action-menu__item">
        <neon-link
          :class="[
            {
              'neon-action-menu__link--selected': item.key === modelValue,
              'neon-action-menu__link--disabled': item.disabled,
            },
            `neon-action-menu__link--${color}`,
          ]"
          :no-style="true"
          :tabindex="item.disabled ? -1 : 0"
          class="neon-action-menu__link"
          outline-style="none"
          @click="!item.disabled && onClick(item.key)"
          @keydown.space.prevent="!item.disabled && onClick(item.key)"
        >
          <div class="neon-action-menu__link-label">{{ item.label }}</div>
          <div v-if="item.count" class="neon-action-menu__link-count">{{ item.count.toLocaleString() }}</div>
        </neon-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonActionMenu.ts"></script>
