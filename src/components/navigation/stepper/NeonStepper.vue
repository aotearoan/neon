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
        :aria-label="step"
        class="neon-stepper__step-indicator-wrapper"
        role="button"
        tabindex="-1"
        @click="index !== modelValue && index <= completedIndex && emit('update:modelValue', index)"
      >
        <div
          :tabindex="index <= completedIndex ? 0 : -1"
          class="neon-stepper__step-indicator"
          @keydown.enter="index !== modelValue && index <= completedIndex && emit('update:modelValue', index)"
        >
          <neon-icon v-if="index < completedIndex" class="neon-stepper__step-completed-icon" name="check" />
          <neon-icon v-else-if="index === completedIndex" class="neon-stepper__step-completing-icon" name="dot" />
        </div>
      </div>
      <span
        class="neon-stepper__step-title"
        tabindex="-1"
        @click="index !== modelValue && index <= completedIndex && emit('update:modelValue', index)"
      >
        {{ step }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonStepper.ts" />
