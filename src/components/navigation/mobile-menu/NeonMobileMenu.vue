<template>
  <nav ref="menuWrapper" class="neon-mobile-menu__wrapper">
    <ul :class="[`neon-mobile-menu--${color}`]" class="neon-mobile-menu no-style" role="menubar">
      <li
        v-for="item in menu"
        :key="item.key"
        ref="menuItem"
        :class="{ 'neon-mobile-menu__item--disabled': item.disabled }"
        class="neon-mobile-menu__item"
        role="menuitem"
        tabindex="-1"
      >
        <neon-link
          :key="`${item.key}Link`"
          :class="{ 'router-link-active': item.href && routeMatches(item.href) }"
          :href="!item.disabled ? item.href : null"
          :no-style="true"
          :tabindex="item.disabled ? -1 : 0"
          outline-style="none"
          @keydown.enter="!item.disabled && onClick(item.key)"
        >
          <div class="neon-mobile-menu__link-container" tabindex="-1" @click="!item.disabled && onClick(item.key)">
            <neon-icon
              v-if="item.icon"
              :id="`${item.key}MobileMenuIcon`"
              :key="`${item.key}LinkIcon`"
              :disabled="item.disabled"
              :name="item.icon"
              class="neon-mobile-menu__item-icon"
            />
            <span class="neon-mobile-menu__item-label">{{ item.label }}</span>
          </div>
        </neon-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonMobileMenu.ts" />
