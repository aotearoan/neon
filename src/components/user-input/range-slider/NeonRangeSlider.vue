<template>
  <div
    class="neon-range-slider"
    :class="{
      'neon-range-slider--disabled': disabled,
      'neon-range-slider--all-upper-bound': value[0] === value[1] && value[0] === max,
    }"
  >
    <output class="neon-slider__output" v-if="output">
      <span class="neon-range-slider__output-range">
        <span>{{ formattedValues[0] }}</span>
        <span class="neon-range-slider__output-range-separator">:</span>
        <span>{{ formattedValues[1] }}</span>
      </span>
    </output>
    <neon-slider
      :id="ids && ids[0]"
      :color="color"
      :aria-label="$t(lowerBoundLabel)"
      :value="value[0]"
      @input="changeLowerBound"
      :upperBound="value[1]"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :decimals="decimals"
      :value-template="valueTemplate"
      :disableFormatting="disableFormatting"
      :percentage="percentage"
      :tooltip="tooltip"
      :legend="legend"
      class="neon-range-slider__lower"
      :output="false"
    ></neon-slider>
    <neon-slider
      :id="ids && ids[1]"
      :color="color"
      :aria-label="$t(upperBoundLabel)"
      :value="value[1]"
      @input="changeUpperBound"
      :lowerBound="value[0]"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :decimals="decimals"
      :value-template="valueTemplate"
      :disableFormatting="disableFormatting"
      :percentage="percentage"
      :tooltip="tooltip"
      :legend="false"
      class="neon-range-slider__upper"
      :output="false"
    ></neon-slider>
  </div>
</template>

<script lang="ts" src="./NeonRangeSlider.ts"></script>
