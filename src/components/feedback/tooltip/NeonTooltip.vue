<template>
  <div
    class="neon-tooltip"
    :class="[{ 'neon-tooltip--open': open }, `neon-tooltip--${tooltipStyle}`, `neon-tooltip--${tooltipPlacement}`]"
    ref="tooltip"
  >
    <div class="neon-tooltip__content-wrapper" ref="content">
      <div class="neon-tooltip__arrow"></div>
      <div class="neon-tooltip__arrow-overlay" v-if="tooltipStyle === 'popover'"></div>
      <div class="neon-tooltip__content">
        <!-- @slot the tooltip content -->
        <slot name="content"></slot>
      </div>
    </div>
    <!-- @slot the tooltip target, i.e. the text, icon or otherwise which when hovered over triggers the tooltip to open  -->
    <slot name="target"></slot>
  </div>
</template>

<script lang="ts" src="./NeonTooltip.ts"></script>
