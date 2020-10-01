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
      @blur="open = false"
    >
      <ul class="no-style neon-select__options">
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
            @click="!option.disabled && clickOption(option)"
            @mouseover="changeHighlighted(option.key)"
          >
            <div class="neon-select__option-container">
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