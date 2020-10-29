<template>
  <div
    tabindex="0"
    class="neon-tooltip"
    :class="[
      { 'neon-tooltip--open': open },
      `neon-tooltip--${tooltipStyle}`,
      `neon-tooltip--${tooltipPlacement}`,
      `neon-tooltip--outline-${outlineStyle}`,
    ]"
    ref="tooltip"
    @keydown.enter="toggleTooltip()"
    @keydown.esc="closeTooltip()"
    @keydown.space="toggleTooltip()"
    @keypress.space.prevent=""
    :aria-describedby="id"
  >
    <div class="neon-tooltip__content-wrapper" ref="content">
      <div class="neon-tooltip__arrow"></div>
      <div class="neon-tooltip__arrow-overlay" v-if="tooltipStyle === 'popover'"></div>
      <div class="neon-tooltip__content" role="tooltip" :id="id">
        <!-- @slot the tooltip content -->
        <slot name="content"></slot>
      </div>
    </div>
    <!-- @slot the tooltip target, i.e. the text, icon or otherwise which when hovered over triggers the tooltip to open  -->
    <slot name="target"></slot>
  </div>
</template>

<script lang="ts" src="./NeonTooltip.ts"></script>
