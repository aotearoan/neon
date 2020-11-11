<template>
  <div class="neon-search__wrapper">
    <neon-dropdown
      ref="dropdown"
      class="neon-search"
      :class="[
        `neon-search--${color}`,
        {
          'neon-search--multiple': multiple,
          'neon-search--disabled': disabled,
          'neon-search--empty': computedOptions.length === 0,
        },
      ]"
      :size="size"
      :color="color"
      :disabled="disabled"
      v-bind="sanitizedAttributes"
      v-model="open"
      v-on="sanitizedListeners"
      role="listbox"
      :aria-activedescendant="multiple ? value[0] && value[0].key : value"
      :aria-multiselectable="multiple"
    >
      <template #dropdown-button>
        <div
          ref="dropdownButton"
          class="neon-search__container"
          :class="[
            `neon-search__container--${size}`,
            `neon-search__container--${color}`,
            { 'neon-search__container--disabled': disabled },
          ]"
        >
          <neon-icon name="search" color="low-contrast" class="neon-search__search-icon" />
          <template v-if="multiple">
            <neon-chip
              v-for="(selected, index) in value"
              :key="selected.key"
              :label="selected.label"
              :color="selected.chipColor"
              :size="size"
              action="remove"
              role="option"
              :id="selected.key"
              aria-selected="true"
              :class="{ 'neon-chip--last-chip': index === value.length - 1 }"
              @close="removeSelected(selected)"
              :disabled="disabled"
            />
          </template>
          <neon-input
            :value="filter"
            :placeholder="placeholder"
            :size="size"
            @input="onFilterChange"
            @icon-click="onFilterChange('')"
            @focus="showOptions()"
            class="neon-search__input"
            :disabled="disabled"
          />
        </div>
      </template>
      <template #default>
        <ul class="no-style neon-search__options">
          <li
            v-for="option in computedOptions"
            :key="option.key"
            class="neon-search__option"
            :class="[
              {
                'neon-search__option--separator-before': option.separatorBefore,
                'neon-search__option--highlighted': option.key === highlightedKey,
              },
              `neon-search__option--${size}`,
            ]"
            role="option"
            :id="option.key"
            aria-selected="false"
            @click="clickOption(option)"
            @mouseover="changeHighlighted(option.key)"
          >
            <div class="neon-search__option-container">
              <!-- @slot provide a custom template for an option.
            Available properties: <strong>option</strong> (<em>NeonSearchOption</em>) and all properties provided to
            the search component. This slot is purely for formatting the option, all accessibility actions still
            apply. -->
              <slot name="option">
                <neon-icon class="neon-search__option-icon" v-if="option.icon" :name="option.icon" />
                <span class="neon-search__option-label">{{ option.label }}</span>
              </slot>
            </div>
          </li>
        </ul>
      </template>
    </neon-dropdown>
  </div>
</template>

<script lang="ts" src="./NeonSearch.ts"></script>
