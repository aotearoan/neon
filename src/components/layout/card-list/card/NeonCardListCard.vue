<template>
  <neon-card
    :class="[
      color && `neon-card-list__card--${color}`,
      {
        'neon-card-list__card--clickable': clickable,
        'neon-card-list__card--disabled': disabled,
      },
    ]"
    class="neon-card-list__card"
    size="s"
    @click="clickable && !disabled && emit('click')"
  >
    <neon-card-body>
      <!-- @slot slot for rendering card contents -->
      <slot></slot>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./NeonCardListCard.ts"></script>
