<template>
  <neon-dropdown v-model="open" class="neon-search-filter">
    <template #dropdown-button>
      <neon-field-group v-if="modelValue !== ''" indicator-style="external">
        <neon-button
          :color="color"
          :disabled="disabled"
          :label="computedLabel"
          :size="size"
          :title="editTitle"
          button-style="solid"
          @click="onOpen"
        />
        <neon-button
          :color="color"
          :disabled="disabled"
          :size="size"
          :title="clearTitle"
          button-style="solid"
          icon="close"
          @click="updateSearch('')"
        />
      </neon-field-group>
      <neon-button
        v-else
        :disabled="disabled"
        :label="label"
        :size="size"
        button-style="outline"
        color="high-contrast"
        icon="search"
        icon-position="right"
        @click="onOpen"
      />
    </template>
    <template #default>
      <neon-stack class="neon-search-filter__content">
        <neon-stack gap="m">
          <span class="neon-search-filter__title">{{ label }}</span>
          <neon-input
            ref="searchElement"
            :icon="search === '' ? 'search' : 'times'"
            :model-value="search"
            :placeholder="placeholder"
            color="high-contrast"
            @icon-click="onSearchClear()"
            @update:model-value="onSearchChange"
          />
        </neon-stack>
        <neon-button
          :button-style="isDirty ? 'solid' : 'outline'"
          :disabled="searchCount === 0"
          :label="computedShowLabel"
          class="neon-search-filter__cta"
          color="high-contrast"
          full-width
          @click="updateSearch(search)"
        />
      </neon-stack>
    </template>
  </neon-dropdown>
</template>
<script lang="ts" src="./NeonSearchFilter.ts" />
