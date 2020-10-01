<template>
  <neon-dropdown
    class="neon-dropdown-menu"
    :class="`neon-dropdown-menu--${color}`"
    :size="size"
    v-bind="sanitizedAttributes"
    v-model="open"
    v-on="sanitizedListeners"
    :color="color"
  >
    <ul class="no-style neon-dropdown-menu__items">
      <li
        v-for="item in model"
        :key="item.key"
        class="neon-dropdown-menu__item"
        :class="[
          {
            'neon--disabled neon-dropdown-menu__item--disabled': item.disabled,
            'neon-dropdown-menu__item--separator-before': item.separatorBefore,
          },
          `neon-dropdown-menu__item--${size}`,
        ]"
        @click="!item.disabled && clickItem(item)"
      >
        <neon-link v-if="item.href && !item.disabled" :href="item.href" :disabled="item.disabled" :no-style="true">
          <neon-icon
            class="neon-dropdown-menu__item-icon"
            v-if="item.icon"
            :name="item.icon"
            :disabled="item.disabled"
          />
          <span class="neon-dropdown-menu__item-label">{{ item.label }}</span>
        </neon-link>
        <div v-else class="neon-dropdown-menu__item-container">
          <neon-icon
            class="neon-dropdown-menu__item-icon"
            v-if="item.icon"
            :name="item.icon"
            :disabled="item.disabled"
          />
          <span class="neon-dropdown-menu__item-label">{{ item.label }}</span>
        </div>
      </li>
    </ul>
  </neon-dropdown>
</template>

<script lang="ts" src="./NeonDropdownMenu.ts"></script>
