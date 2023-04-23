<template>
  <div :class="[`neon-tabs--${size}`, `neon-tabs--${color}`]" class="neon-tabs" role="tablist">
    <div :class="{ 'neon-tabs__menu-items--underlined': underline }" class="neon-tabs__menu-items">
      <div
        v-for="(tab, index) in tabs"
        :id="`${tab.key}Button`"
        :key="tab.key"
        :aria-controls="tab.key"
        :aria-selected="tab.key === modelValue"
        :class="{ 'neon-tabs__menu-item--selected': tab.key === modelValue }"
        class="neon-tabs__menu-item"
        role="tab"
        tabindex="-1"
        @click="tab.key !== modelValue && onClick(tab.key)"
      >
        <div
          :id="`${tab.key}ButtonContainer`"
          :tabindex="tab.key === modelValue ? 0 : -1"
          class="neon-tabs__menu-item-container"
          @keydown.right="onClick(tabs[index + 1 === tabs.length ? 0 : index + 1].key, true)"
          @keydown.left="onClick(tabs[index === 0 ? tabs.length - 1 : index - 1].key, true)"
        >
          <neon-icon
            v-if="tab.icon"
            :color="tab.key === modelValue ? color : undefined"
            :name="tab.icon"
            class="neon-tabs__menu-icon"
          />
          <span v-if="tab.label" class="neon-tabs__menu-label">{{ tab.label }}</span>
        </div>
      </div>
    </div>
    <!-- @slot Add tabs here (NeonTab). NOTE: Tabs can also be added outside the component if preferred -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTabs.ts"></script>
