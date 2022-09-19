<template>
  <div
    class="neon-slider"
    :class="[
      {
        'neon-slider--disabled': disabled,
        'neon-slider--no-legend': !legend,
      },
      `neon-slider--${color}`,
    ]"
    :style="'--min: ' + min + ';--max: ' + computedMax + ';--val: ' + modelValue"
  >
    <output v-if="output" :for="id" class="neon-slider__output">{{ formattedValue }}</output>
    <input
      :id="id"
      type="range"
      :value="modelValue"
      :step="computedStep"
      :min="min"
      :max="computedMax"
      :aria-valuemin="min"
      :aria-valuemax="computedMax"
      :aria-valuenow="modelValue"
      :disabled="disabled"
      @input="changeValue"
      class="neon-slider__input"
      v-bind="sanitizedAttributes"
    />
    <div v-if="legend" class="neon-slider__legend">
      <span class="neon-slider__legend-item">{{ formattedMin }}</span>
      <span class="neon-slider__legend-item">{{ formattedMax }}</span>
    </div>
    <output v-if="tooltip" :for="id" class="neon-slider__tooltip">
      <div class="neon-slider__tooltip-content">
        <span class="neon-slider__tooltip-value">{{ formattedValue }}</span>
      </div>
    </output>
  </div>
</template>

<script lang="ts" src="./NeonSlider.ts"></script>
