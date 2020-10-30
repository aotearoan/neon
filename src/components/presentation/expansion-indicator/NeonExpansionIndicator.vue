<template>
  <div
    class="neon-expansion-indicator"
    :class="[
      {
        'neon-expansion-indicator--expanded': expanded,
        'neon-expansion-indicator--inverse': inverse,
        'neon-expansion-indicator--disabled': disabled,
      },
      `neon-expansion-indicator--${color}`,
    ]"
    role="presentation"
  >
    <svg width="16" height="16" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
      <g class="neon-expansion-indicator__container">
        <line class="neon-svg--stroke neon-expansion-indicator__line1" x1="2" y1="8" x2="8" y2="8"></line>
        <line class="neon-svg--stroke neon-expansion-indicator__line2" x1="14" y1="8" x2="8" y2="8"></line>
      </g>
    </svg>
  </div>
</template>

<script lang="ts" src="./NeonExpansionIndicator.ts"></script>
