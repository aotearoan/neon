<template>
  <div class="neon-search__wrapper">
    <neon-dropdown
      ref="dropdown"
      v-model="open"
      :aria-activedescendant="multiple ? modelValue[0] && modelValue[0].key : modelValue"
      :aria-multiselectable="multiple"
      :class="[
        `neon-search--${color}`,
        {
          'neon-search--multiple': multiple,
          'neon-search--disabled': disabled,
          'neon-search--empty': computedOptions.length === 0,
        },
      ]"
      :color="color"
      :disabled="disabled"
      :size="size"
      class="neon-search"
      role="listbox"
      v-bind="sanitizedAttributes"
      @dropdown-placement="onPlacement"
    >
      <template #dropdown-button>
        <div
          ref="dropdownButton"
          :class="[
            `neon-search__container--${size}`,
            `neon-search__container--${color}`,
            { 'neon-search__container--disabled': disabled },
          ]"
          class="neon-search__container"
        >
          <neon-icon class="neon-search__search-icon" color="low-contrast" name="search" />
          <template v-if="multiple">
            <neon-chip
              v-for="(selected, index) in modelValue"
              :id="selected.key"
              :key="selected.key"
              :class="{ 'neon-chip--last-chip': index === modelValue.length - 1 }"
              :color="selected.chipColor"
              :disabled="disabled"
              :label="selected.label"
              :size="size"
              action="remove"
              aria-selected="true"
              role="option"
              @close="removeSelected(selected)"
            />
          </template>
          <neon-input
            :disabled="disabled"
            :modelValue="filter"
            :placeholder="placeholder"
            :size="size"
            class="neon-search__input"
            v-bind="sanitizedAttributes"
            @focus="showOptions()"
            @update:modelValue="onFilterChange"
            @icon-click="onFilterChange('')"
          />
        </div>
      </template>
      <template #default>
        <ul class="no-style neon-search__options">
          <li
            v-for="option in computedOptions"
            :id="option.key"
            :key="option.key"
            :class="[
              {
                'neon-search__option--separator-before': option.separatorBefore,
                'neon-search__option--highlighted': option.key === highlightedKey,
              },
              `neon-search__option--${size}`,
            ]"
            aria-selected="false"
            class="neon-search__option"
            role="option"
            @click="clickOption(option)"
            @mouseover="changeHighlighted(option.key)"
          >
            <div class="neon-search__option-container">
              <!-- @slot provide a custom template for an option.<br />Bindings: <strong>option</strong>
              (<em>NeonSearchOption</em>). This slot is purely for formatting the option, all accessibility actions
              still apply. -->
              <slot :option="option" name="option">
                <neon-icon v-if="option.icon" :name="option.icon" class="neon-search__option-icon" />
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
