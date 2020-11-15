<template>
  <nav class="neon-action-menu">
    <ul class="no-style">
      <li v-for="item in model" :key="item.key" class="neon-action-menu__item">
        <neon-link
          :no-style="true"
          outline-style="none"
          :tabindex="item.disabled ? -1 : 0"
          class="neon-action-menu__link"
          :class="[
            {
              'neon-action-menu__link--selected': item.key === value,
              'neon-action-menu__link--disabled': item.disabled,
            },
            `neon-action-menu__link--${color}`,
          ]"
          @click="!item.disabled && onClick(item.key)"
          @keydown.space="!item.disabled && onClick(item.key)"
          @keypress.space.prevent=""
          >{{ item.label }}</neon-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonActionMenu.ts"></script>
