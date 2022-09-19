<template>
  <nav ref="menuWrapper" class="neon-menu__wrapper">
    <ul :class="[`neon-menu--${color}`, `neon-menu--${size}`]" class="neon-menu no-style" role="menubar">
      <li
        v-for="item in menu"
        :key="item.key"
        ref="menuItem"
        :class="{ 'neon-menu__item--disabled': item.disabled }"
        class="neon-menu__item"
      >
        <neon-dropdown-menu
          v-if="item.children"
          :class="{ 'router-link-active': routeMatches(item.href) }"
          :color="color"
          :disabled="item.disabled"
          :icon="item.icon"
          :label="item.label"
          :model="item.children"
          :openOnHover="!item.disabled"
          :size="size"
          dropdown-style="text-button"
        />
        <neon-link
          v-else
          :href="item.href"
          :no-style="true"
          :tabindex="item.disabled ? -1 : 0"
          outline-style="none"
          role="menuitem"
          @click="!item.disabled && onClick(item.key)"
          @keydown.enter="!item.disabled && onClick(item.key)"
          @keydown.space="!item.disabled && onClick(item.key)"
          @keypress.space.prevent=""
        >
          <neon-icon v-if="item.icon" :name="item.icon" class="neon-menu__item-icon" color="neutral" />
          <span class="neon-menu__item-label">{{ item.label }}</span>
        </neon-link>
      </li>
    </ul>
    <neon-dropdown-menu
      :class="{ 'neon-menu__responsive-menu--hidden': responsiveMenuItems.length === 0 }"
      :color="color"
      :indicator="false"
      :model="responsiveMenuItems"
      :openOnHover="true"
      :size="size"
      class="neon-menu__responsive-menu"
      dropdown-style="text-button"
      icon="ellipsis"
      placement="bottom-right"
      @button-ref="responsiveButton = $event"
    />
  </nav>
</template>

<script lang="ts" src="./NeonMenu.ts" />
