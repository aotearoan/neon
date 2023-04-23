<template>
  <div
    :class="{
      'neon-range-slider--disabled': disabled,
      'neon-range-slider--all-upper-bound': modelValue[0] === modelValue[1] && modelValue[0] === max,
    }"
    class="neon-range-slider"
  >
    <output v-if="output" class="neon-slider__output">
      <span class="neon-range-slider__output-range">
        <span>{{ formattedValues[0] }}</span>
        <span class="neon-range-slider__output-range-separator"> : </span>
        <span>{{ formattedValues[1] }}</span>
      </span>
    </output>
    <neon-slider
      :id="ids && ids[0]"
      :aria-label="lowerBoundLabel"
      :color="color"
      :decimals="decimals"
      :disableFormatting="disableFormatting"
      :disabled="disabled"
      :legend="legend"
      :max="max"
      :min="min"
      :modelValue="modelValue[0]"
      :output="false"
      :percentage="percentage"
      :step="step"
      :tooltip="tooltip"
      :upperBound="modelValue[1]"
      :value-template="valueTemplate"
      class="neon-range-slider__lower"
      @update:modelValue="changeLowerBound"
    ></neon-slider>
    <neon-slider
      :id="ids && ids[1]"
      :aria-label="upperBoundLabel"
      :color="color"
      :decimals="decimals"
      :disableFormatting="disableFormatting"
      :disabled="disabled"
      :legend="false"
      :lowerBound="modelValue[0]"
      :max="max"
      :min="min"
      :modelValue="modelValue[1]"
      :output="false"
      :percentage="percentage"
      :step="step"
      :tooltip="tooltip"
      :value-template="valueTemplate"
      class="neon-range-slider__upper"
      @update:modelValue="changeUpperBound"
    ></neon-slider>
  </div>
</template>

<script lang="ts" src="./NeonRangeSlider.ts"></script>
