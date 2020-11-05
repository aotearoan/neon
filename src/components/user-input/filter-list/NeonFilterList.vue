<template>
  <div
    class="neon-filter-list"
    :class="[
      `neon-filter-list--${color}`,
      `neon-list--${size}`,
      `neon-filter-list--${size}`,
      { 'neon-filter-list--multiple': multiple },
    ]"
    role="listbox"
    :aria-activedescendant="multiple ? value[0] : value"
    :aria-multiselectable="multiple"
  >
    <div
      v-for="item in items"
      :key="item.key"
      class="neon-list__item neon-filter-list__item"
      :class="[
        {
          'neon-filter-list__item--disabled': item.disabled,
          'neon-filter-list__item--selected': selected[item.key],
        },
      ]"
      :tabindex="!item.disabled ? 0 : -1"
      role="option"
      :aria-selected="selected[item.key]"
      @click="!item.disabled && toggleItem(item.key, $event)"
      @keydown.enter="!item.disabled && toggleItem(item.key)"
      @keydown.space="!item.disabled && toggleItem(item.key)"
      @keypress.space.prevent=""
    >
      <span class="neon-filter-list__item-label">{{ item.label }}</span>
      <span v-if="item.count" class="neon-filter-list__item-count">{{ item.count }}</span>
      <neon-icon
        v-if="selected[item.key]"
        class="neon-filter-list__item-close"
        name="times"
        :color="color"
        :disabled="item.disabled"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./NeonFilterList.ts"></script>
