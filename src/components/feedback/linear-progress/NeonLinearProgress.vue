<template>
  <div
    class="neon-linear-progress"
    :class="[
      `neon-linear-progress--${color}`,
      `neon-linear-progress--${size}`,
      alternateColor ? `neon-linear-progress--alternate-color-${alternateColor}` : '',
    ]"
    role="progressbar"
    :aria-valuenow="calculatedValue"
    aria-valuemin="0"
    :aria-valuemax="computedTotal"
  >
    <div class="neon-linear-progress__container">
      <span v-if="label" class="neon-linear-progress__label">{{ label }}</span>
      <div class="neon-linear-progress__bar">
        <div
          class="neon-linear-progress__indicator"
          :class="{ 'neon-linear-progress__indicator--completed': completed }"
          :style="`width:${computedPercentage}%`"
        ></div>
      </div>
    </div>
    <neon-icon
      v-if="completedIcon && completed"
      :name="completedIcon"
      :color="completedIconColor || color || alternateColor"
      class="neon-linear-progress__icon"
    />
    <span v-if="output" class="neon-linear-progress__output">{{ computedOutput }}</span>
  </div>
</template>

<script lang="ts" src="./NeonLinearProgress.ts" />
