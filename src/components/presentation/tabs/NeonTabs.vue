<template>
  <div class="neon-tabs" :class="[`neon-tabs--${size}`, `neon-tabs--${color}`]" role="tablist">
    <div class="neon-tabs__menu-items" :class="{ 'neon-tabs__menu-items--underlined': underline }">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.key"
        class="neon-tabs__menu-item"
        :class="{ 'neon-tabs__menu-item--selected': tab.key === value }"
        @click="tab.key !== value && onClick(tab.key)"
        tabindex="-1"
        role="tab"
        :aria-selected="tab.key === value"
        :aria-controls="tab.key"
        :id="`${tab.key}Button`"
      >
        <div
          :id="`${tab.key}ButtonContainer`"
          class="neon-tabs__menu-item-container"
          @keydown.right="onClick(tabs[index + 1 === tabs.length ? 0 : index + 1].key, true)"
          @keydown.left="onClick(tabs[index === 0 ? tabs.length - 1 : index - 1].key, true)"
          :tabindex="tab.key === value ? 0 : -1"
        >
          <neon-icon
            v-if="tab.icon"
            class="neon-tabs__menu-icon"
            :color="tab.key === value ? color : undefined"
            :name="tab.icon"
          />
          <span v-if="tab.label" class="neon-tabs__menu-label">{{ tab.label }}</span>
        </div>
      </div>
    </div>
    <!-- @slot Add tabs here (NeonTab). NOTE: Tabs can also be added outside of the component if preferred -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTabs.ts"></script>
