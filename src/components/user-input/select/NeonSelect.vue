<template>
  <div class="neon-select__wrapper">
    <neon-dropdown
      :id="id"
      ref="dropdown"
      v-model="open"
      :aria-activedescendant="multiple ? modelValue[0] : modelValue"
      :aria-multiselectable="multiple"
      :class="[`neon-select--${color}`, { 'neon-select--grouped': groupedOptions, 'neon-select--multiple': multiple }]"
      :color="color"
      :disabled="disabled"
      :icon="computedIcon"
      :label="computedLabel"
      :size="size"
      class="neon-select"
      role="listbox"
      v-bind="sanitizedAttributes"
      @dropdown-placement="onPlacement"
    >
      <ul class="no-style neon-select__options">
        <li
          v-if="placeholderAsOption"
          :class="`neon-select__option--${size}`"
          class="neon-select__option neon-select__option--disabled neon-select__option-placeholder"
        >
          <div class="neon-select__option-container">
            <span class="neon-select__option-label">{{ placeholder }}</span>
          </div>
        </li>
        <template v-for="group in computedOptions">
          <li v-if="group.group !== ''" :key="group.group" class="neon-select__option-title">{{ group.group }}</li>
          <li
            v-for="option in group.options"
            :id="option.key"
            :key="option.key"
            :aria-selected="multiple ? modelValue.indexOf(option.key) >= 0 : option.key === modelValue"
            :class="[
              {
                'neon-select__option--disabled': option.disabled,
                'neon-select__option--separator-before': option.separatorBefore,
                'neon-select__option--selected': multiple
                  ? modelValue.indexOf(option.key) >= 0
                  : option.key === modelValue,
                'neon-select__option--highlighted': option.key === highlightedKey,
              },
              `neon-select__option--${size}`,
            ]"
            class="neon-select__option"
            role="option"
            @click="!option.disabled && clickOption(option)"
            @mouseover="changeHighlighted(option.key)"
          >
            <div class="neon-select__option-container">
              <!-- @slot provide a custom template for an option.<br />Bindings: <strong>option</strong>
              (<em>NeonSelectOption</em>). This slot is purely for formatting the option, all accessibility actions
              still apply. -->
              <slot :option="option" name="option">
                <neon-switch
                  v-if="multiple"
                  :color="color"
                  :modelValue="modelValue.indexOf(option.key) >= 0"
                  :size="size === 'l' ? 'm' : 's'"
                  switch-style="checkbox"
                />
                <neon-icon
                  v-if="option.icon"
                  :disabled="option.disabled"
                  :name="option.icon"
                  class="neon-select__option-icon"
                />
                <span class="neon-select__option-label">{{ option.label }}</span>
              </slot>
            </div>
          </li>
        </template>
      </ul>
    </neon-dropdown>
    <select
      :disabled="disabled"
      :multiple="multiple"
      class="neon-select__native"
      v-bind="sanitizedAttributes"
      @input="nativeSelectChange"
    >
      <option :selected="multiple ? modelValue.length === 0 : modelValue === ''" disabled hidden value="">
        {{ placeholder }}
      </option>
      <template v-if="groupedOptions">
        <optgroup v-for="group in groupedOptions" :key="group.group" :label="group.group">
          <option
            v-for="(option, index) in group.options"
            :key="`${option.key}-native`"
            :data-index="index"
            :disabled="option.disabled"
            :multiple="multiple"
            :selected="multiple ? modelValue.indexOf(option.key) >= 0 : option.key === modelValue"
            :value="option.key"
          >
            {{ option.label }}
          </option>
        </optgroup>
      </template>
      <template v-else>
        <option
          v-for="(option, index) in options"
          :key="`${option.key}-native`"
          :data-index="index"
          :disabled="option.disabled"
          :multiple="multiple"
          :selected="multiple ? modelValue.indexOf(option.key) >= 0 : option.key === modelValue"
          :value="option.key"
        >
          {{ option.label }}
        </option>
      </template>
    </select>
  </div>
</template>

<script lang="ts" src="./NeonSelect.ts"></script>
