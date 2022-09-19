<template>
  <div
    :aria-valuemax="computedTotal"
    :aria-valuenow="calculatedValue"
    :class="[
      `neon-linear-progress--${color}`,
      `neon-linear-progress--${size}`,
      alternateColor ? `neon-linear-progress--alternate-color-${alternateColor}` : '',
    ]"
    aria-valuemin="0"
    class="neon-linear-progress"
    role="progressbar"
  >
    <div class="neon-linear-progress__container">
      <span v-if="label" class="neon-linear-progress__label">{{ label }}</span>
      <div class="neon-linear-progress__bar">
        <div
          :class="{ 'neon-linear-progress__indicator--completed': completed }"
          :style="`width:${computedPercentage}%`"
          class="neon-linear-progress__indicator"
        ></div>
      </div>
    </div>
    <neon-icon
      v-if="completedIcon && completed"
      :color="completedIconColor || alternateColor || color"
      :name="completedIcon"
      class="neon-linear-progress__icon"
    />
    <span v-if="output" class="neon-linear-progress__output">{{ computedOutput }}</span>
  </div>
</template>

<script lang="ts" src="./NeonLinearProgress.ts" />
