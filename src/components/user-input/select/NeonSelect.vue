<template>
  <div class="neon-select__wrapper">
    <neon-dropdown
      ref="dropdown"
      class="neon-select"
      :class="[`neon-select--${color}`, { 'neon-select--grouped': groupedOptions, 'neon-select--multiple': multiple }]"
      :size="size"
      :color="color"
      :label="computedLabel"
      :icon="computedIcon"
      :disabled="disabled"
      v-bind="sanitizedAttributes"
      v-model="open"
      v-on="sanitizedListeners"
      role="listbox"
      :aria-activedescendant="multiple ? value[0] : value"
      :aria-multiselectable="multiple"
    >
      <ul class="no-style neon-select__options">
        <li
          v-if="placeholderAsOption"
          class="neon-select__option neon--disabled neon-select__option--disabled"
          :class="`neon-select__option--${size}`"
        >
          <div class="neon-select__option-container">
            <span class="neon-select__option-label">{{ placeholder }}</span>
          </div>
        </li>
        <template v-for="group in computedOptions">
          <li v-if="group.group !== ''" :key="group.group" class="neon-select__option-title">{{ group.group }}</li>
          <li
            v-for="option in group.options"
            :key="option.key"
            class="neon-select__option"
            :class="[
              {
                'neon--disabled neon-select__option--disabled': option.disabled,
                'neon-select__option--separator-before': option.separatorBefore,
                'neon-select__option--selected': multiple ? value.indexOf(option.key) >= 0 : option.key === value,
                'neon-select__option--highlighted': option.key === highlightedKey,
              },
              `neon-select__option--${size}`,
            ]"
            role="option"
            :id="option.key"
            :aria-selected="multiple ? value.indexOf(option.key) >= 0 : option.key === value"
            @click="!option.disabled && clickOption(option)"
            @mouseover="changeHighlighted(option.key)"
          >
            <div class="neon-select__option-container">
              <!-- @slot provide a custom template for an option.<br />Bindings: <strong>option</strong>
              (<em>NeonSelectOption</em>). This slot is purely for formatting the option, all accessibility actions
              still apply. -->
              <slot name="option" :option="option">
                <neon-switch
                  v-if="multiple"
                  :size="size === 'l' ? 'm' : 's'"
                  :color="color"
                  :value="value.indexOf(option.key) >= 0"
                  switch-style="checkbox"
                />
                <neon-icon
                  class="neon-select__option-icon"
                  v-if="option.icon"
                  :name="option.icon"
                  :disabled="option.disabled"
                />
                <span class="neon-select__option-label">{{ option.label }}</span>
              </slot>
            </div>
          </li>
        </template>
      </ul>
    </neon-dropdown>
    <select
      class="neon-select__native"
      @input="nativeSelectChange"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="sanitizedAttributes"
      v-on="sanitizedListeners"
    >
      <option value="" disabled :selected="multiple ? value.length === 0 : value" hidden>{{ placeholder }}</option>
      <template v-if="groupedOptions">
        <optgroup v-for="group in groupedOptions" :key="group.group" :label="group.group">
          <option
            v-for="(option, index) in group.options"
            :key="`${option.key}-native`"
            :value="option.key"
            :data-index="index"
            :multiple="multiple"
            :selected="multiple ? value.indexOf(option.key) >= 0 : option.key === value"
            :disabled="option.disabled"
            >{{ option.label }}</option
          >
        </optgroup>
      </template>
      <template v-else>
        <option
          v-for="(option, index) in options"
          :key="`${option.key}-native`"
          :value="option.key"
          :data-index="index"
          :multiple="multiple"
          :selected="multiple ? value.indexOf(option.key) >= 0 : option.key === value"
          :disabled="option.disabled"
          >{{ option.label }}</option
        >
      </template>
    </select>
  </div>
</template>

<script lang="ts" src="./NeonSelect.ts"></script>
