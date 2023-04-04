<template>
  <div :class="`neon-stepper--${color}`" class="neon-stepper">
    <div
      v-for="(step, index) in steps"
      :key="step"
      :class="{
        'neon-stepper__step--has-value': index <= modelValue || index <= completedIndex,
        'neon-stepper__step--active': index === modelValue,
        'neon-stepper__step--display-stepper': index <= completedIndex,
      }"
      class="neon-stepper__step"
    >
      <div
        class="neon-stepper__step-indicator-wrapper"
        @click="index !== modelValue && index <= completedIndex && emit('update:modelValue', index)"
      >
        <div class="neon-stepper__step-indicator">
          <neon-icon v-if="index < completedIndex" class="neon-stepper__step-completed-icon" name="check" />
          <neon-icon v-else-if="index === completedIndex" class="neon-stepper__step-completing-icon" name="dot" />
        </div>
      </div>
      <span
        class="neon-stepper__step-title"
        @click="index !== modelValue && index <= completedIndex && emit('update:modelValue', index)"
      >
        {{ step }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonStepper.ts" />
