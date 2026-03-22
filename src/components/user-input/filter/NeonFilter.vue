<template>
  <neon-dropdown v-model="open" class="neon-filter">
    <template #dropdown-button>
      <neon-field-group v-if="selected.length" indicator-style="external">
        <neon-button
          :color="color"
          :disabled="disabled"
          :label="computedLabel"
          :size="size"
          :title="editTitle"
          button-style="solid"
          @click="open = true"
        />
        <neon-button
          :color="color"
          :disabled="disabled"
          :size="size"
          :title="clearTitle"
          button-style="solid"
          icon="close"
          @click="clearSelection"
        />
      </neon-field-group>
      <neon-button
        v-else
        :disabled="disabled"
        :label="computedLabel"
        :size="size"
        button-style="outline"
        color="high-contrast"
        indicator
        @click="open = true"
      />
    </template>
    <template #default>
      <neon-stack class="neon-filter__content">
        <neon-stack gap="m">
          <span class="neon-filter__title">{{ computedTitle }}</span>
          <neon-link class="neon-filter__reset-link" @click="resetFilter">
            {{ resetLabel }}
          </neon-link>
          <neon-input
            v-model="filterString"
            :icon="filterString === '' ? 'search' : 'close'"
            :placeholder="placeholder"
            color="high-contrast"
            @icon-click="filterString !== '' ? (filterString = '') : undefined"
          />
        </neon-stack>
        <neon-stack class="neon-filter__items" gap="s">
          <div v-for="item in filteredItems" :key="item.label" class="neon-filter__item">
            <neon-switch
              :disabled="item.disabled"
              :label="item.label"
              :model-value="item.selected"
              color="brand"
              switch-style="checkbox"
              @update:model-value="toggleSelected(item.label)"
            />
            <span
              :class="[
                'neon-number',
                'neon-filter__item-count',
                { 'neon-filter__item-count--disabled': item.disabled },
              ]"
              @click="!item.disabled && toggleSelected(item.label)"
            >
              {{ formatNumber(item.count) }}
            </span>
          </div>
        </neon-stack>
        <neon-button
          :button-style="isDirty ? 'solid' : 'outline'"
          :label="computedShowLabel"
          class="neon-filter__cta"
          color="high-contrast"
          full-width
          @click="ctaClick"
        />
      </neon-stack>
    </template>
  </neon-dropdown>
</template>
<script lang="ts" src="./NeonFilter.ts" />
