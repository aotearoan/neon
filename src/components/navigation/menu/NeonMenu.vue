<template>
  <nav class="neon-menu__wrapper" ref="menu">
    <ul class="neon-menu no-style" :class="[`neon-menu--${color}`, `neon-menu--${size}`]" role="menubar">
      <li
        v-for="item in menu"
        :key="item.key"
        ref="menuItem"
        class="neon-menu__item"
        :class="{ 'neon-menu__item--disabled': item.disabled }"
      >
        <neon-dropdown-menu
          v-if="item.children"
          :model="item.children"
          :color="color"
          :size="size"
          :disabled="item.disabled"
          :label="item.label"
          :icon="item.icon"
          dropdown-style="text-button"
          :openOnHover="!item.disabled"
          :class="{ 'router-link-active': routeMatches(item.href) }"
        />
        <neon-link
          v-else
          outline-style="none"
          :href="item.href"
          @click.native="!item.disabled && onClick(item.key)"
          @keydown.enter="!item.disabled && onClick(item.key)"
          @keydown.space.native="!item.disabled && onClick(item.key)"
          @keypress.space.prevent=""
          :no-style="true"
          :tabindex="item.disabled ? -1 : 0"
          role="menuitem"
        >
          <neon-icon v-if="item.icon" :name="item.icon" color="neutral" class="neon-menu__item-icon" />
          <span class="neon-menu__item-label">{{ item.label }}</span>
        </neon-link>
      </li>
    </ul>
    <neon-dropdown-menu
      ref="responsiveMenu"
      class="neon-menu__responsive-menu"
      :class="{ 'neon-menu__responsive-menu--hidden': responsiveMenuItems.length === 0 }"
      icon="ellipsis"
      :color="color"
      :size="size"
      :model="responsiveMenuItems"
      dropdown-style="text-button"
      placement="bottom-right"
      :openOnHover="true"
      :indicator="false"
    />
  </nav>
</template>

<script lang="ts" src="./NeonMenu.ts" />
