<template>
  <div
    ref="tooltip"
    tabindex="0"
    class="neon-tooltip"
    :class="[
      { 'neon-tooltip--open': open },
      `neon-tooltip--${tooltipStyle}`,
      `neon-tooltip--${tooltipPlacement}`,
      `neon-tooltip--outline-${outlineStyle}`,
      `neon-tooltip--outline-color-${outlineColor}`,
    ]"
    :aria-describedby="id"
    @keydown.enter="toggleTooltip()"
    @keydown.esc="closeTooltip()"
    @keydown.space="toggleTooltip()"
    @keypress.space.prevent=""
    @mouseenter="openTooltip()"
    @mouseleave="closeTooltip()"
  >
    <div ref="content" class="neon-tooltip__content-wrapper">
      <div class="neon-tooltip__arrow"></div>
      <div v-if="tooltipStyle === 'popover'" class="neon-tooltip__arrow-overlay"></div>
      <div :id="id" class="neon-tooltip__content" role="tooltip">
        <!-- @slot the tooltip content -->
        <slot name="content"></slot>
      </div>
    </div>
    <!-- @slot the tooltip target, i.e. the text, icon or otherwise which when hovered over triggers the tooltip to open  -->
    <slot name="target"></slot>
  </div>
</template>

<script lang="ts" src="./NeonTooltip.ts"></script>
