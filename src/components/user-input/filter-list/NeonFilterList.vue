<template>
  <div
    :aria-activedescendant="
      multiple && Array.isArray(modelValue) ? modelValue[0] : (!Array.isArray(modelValue) && modelValue) || undefined
    "
    :aria-multiselectable="multiple"
    :class="[
      `neon-filter-list--${color}`,
      `neon-list--${size}`,
      `neon-filter-list--${size}`,
      { 'neon-filter-list--multiple': multiple },
    ]"
    class="neon-filter-list"
    role="listbox"
  >
    <div
      v-for="item in visibleItems"
      :key="item.key"
      :aria-selected="selected[item.key]"
      :class="[
        {
          'neon-filter-list__item--disabled': item.disabled,
          'neon-filter-list__item--enabled': !item.disabled,
          'neon-filter-list__item--selected': selected[item.key],
        },
      ]"
      :tabindex="!item.disabled ? 0 : -1"
      class="neon-list__item neon-filter-list__item"
      role="option"
      @click.stop.prevent="!item.disabled && toggleItem(item.key, $event)"
      @keydown.enter.stop.prevent="!item.disabled && toggleItem(item.key)"
      @keydown.space.stop.prevent="!item.disabled && toggleItem(item.key)"
    >
      <span class="neon-filter-list__item-label">{{ item.label }}</span>
      <span v-if="item.count" class="neon-filter-list__item-count">{{ item.count.toLocaleString() }}</span>
      <neon-icon
        v-if="!item.disabled && selected[item.key]"
        :color="color"
        :disabled="item.disabled"
        class="neon-filter-list__item-close"
        name="times"
      />
    </div>
    <neon-link v-if="displayShowAllToggle" class="neon-filter-list__show-toggle" @click="toggleShowAll()">
      {{ toggleShowAllLabel }}
    </neon-link>
  </div>
</template>

<script lang="ts" src="./NeonFilterList.ts"></script>
