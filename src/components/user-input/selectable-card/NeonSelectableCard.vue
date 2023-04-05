<template>
  <neon-card
    :class="[
      `neon-selectable-card--${color}`,
      { 'neon-selectable-card--selected': modelValue },
      { 'neon-selectable-card--disabled': disabled },
    ]"
    :horizontal-borders="false"
    :no-break="true"
    :size="size"
    class="neon-selectable-card"
    orientation="horizontal"
    tabindex="0"
    @click="clicked()"
    @keydown.enter.stop.prevent="clicked()"
    @keydown.space.stop.prevent="clicked()"
  >
    <neon-card-header>
      <neon-switch
        :color="color"
        :disabled="disabled"
        :model-value="modelValue"
        :size="size"
        class="neon-selectable-card__checkbox"
        switch-style="checkbox"
        @update:modelValue="clicked()"
      />
    </neon-card-header>
    <!-- @slot the card sections to add to the card after the checkbox -->
    <slot name="default"></slot>
  </neon-card>
</template>

<script lang="ts" src="./NeonSelectableCard.ts" />
