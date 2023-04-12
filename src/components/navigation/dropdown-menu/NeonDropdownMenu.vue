<template>
  <neon-dropdown
    ref="dropdown"
    v-model="open"
    :class="`neon-dropdown-menu--${color}`"
    :color="color"
    :disabled="disabled"
    :openOnHover="openOnHover"
    :size="size"
    class="neon-dropdown-menu"
    v-bind="attrs"
    @blur="onBlur()"
    @button="emit('button-ref', $event)"
    @focus="onFocus()"
    @update:modelValue="open = $event"
    @dropdown-placement="onPlacement"
  >
    <ul class="no-style neon-dropdown-menu__items" role="menu">
      <li
        v-for="item in model"
        :key="item.key"
        ref="items"
        :class="[
          {
            'neon-dropdown-menu__item--disabled': item.disabled,
            'neon-dropdown-menu__item--separator-before': item.separatorBefore,
            'neon-dropdown-menu__item--group-title': item.isGroup,
            'neon-dropdown-menu__item--grouped': item.grouped,
            'neon-dropdown-menu__item--highlighted': item.key === highlightedKey,
          },
          `neon-dropdown-menu__item--${size}`,
        ]"
        class="neon-dropdown-menu__item"
        @mouseover="changeHighlighted(item.key)"
      >
        <div v-if="item.isGroup" class="neon-dropdown-menu__item-container">
          <neon-icon
            v-if="item.icon"
            :disabled="item.disabled"
            :name="item.icon"
            class="neon-dropdown-menu__item-icon"
          />
          <span class="neon-dropdown-menu__item-label">{{ item.label }}</span>
        </div>
        <neon-link
          v-else-if="item.href && !item.disabled"
          :href="item.href"
          :no-style="true"
          outline-style="none"
          role="menuitem"
        >
          <neon-icon
            v-if="item.icon"
            :disabled="item.disabled"
            :name="item.icon"
            class="neon-dropdown-menu__item-icon"
          />
          <span class="neon-dropdown-menu__item-label">{{ item.label }}</span>
        </neon-link>
        <div v-else class="neon-dropdown-menu__item-container" role="menuitem" @click="clickItem(item)">
          <neon-icon
            v-if="item.icon"
            :disabled="item.disabled"
            :name="item.icon"
            class="neon-dropdown-menu__item-icon"
          />
          <span class="neon-dropdown-menu__item-label">{{ item.label }}</span>
        </div>
      </li>
    </ul>
  </neon-dropdown>
</template>

<script lang="ts" src="./NeonDropdownMenu.ts"></script>
