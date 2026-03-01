<template>
  <nav ref="menuWrapper" class="neon-menu__wrapper">
    <ul :class="[`neon-menu--${color}`, `neon-menu--${size}`]" class="neon-menu no-style" role="menubar">
      <li
        v-for="item in menu"
        :key="item.key"
        ref="menuItem"
        :class="{ 'neon-menu__item--disabled': item.disabled }"
        class="neon-menu__item"
        role="menuitem"
      >
        <neon-dropdown-menu
          v-if="item.children"
          :key="`${item.key}DropdownMenu`"
          :class="{ 'router-link-active': routeMatches(item.href) }"
          :color="color"
          :disabled="item.disabled"
          :icon="item.icon"
          :label="item.label"
          :model="item.children"
          :openOnHover="!item.disabled"
          :size="size"
          dropdown-style="text"
        />
        <neon-link
          v-else
          :key="`${item.key}Link`"
          :class="{ 'router-link-active': routeMatches(item.href) }"
          :href="item.href"
          :no-style="true"
          :tabindex="item.disabled ? -1 : 0"
          outline-style="none"
          @keydown.enter="!item.disabled && onClick(item.key)"
        >
          <div class="neon-menu__link-container" tabindex="-1" @click="!item.disabled && onClick(item.key)">
            <neon-icon
              v-if="item.icon"
              :id="`${item.key}MenuIcon`"
              :key="`${item.key}LinkIcon`"
              :name="item.icon"
              class="neon-menu__item-icon"
              color="neutral"
            />
            <span class="neon-menu__item-label">{{ item.label }}</span>
          </div>
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
      dropdown-style="text"
      icon="ellipsis"
      placement="bottom-right"
    />
  </nav>
</template>

<script lang="ts" src="./NeonMenu.ts" />
