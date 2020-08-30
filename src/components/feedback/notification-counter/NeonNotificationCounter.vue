<template>
  <div
    class="neon-notification-counter"
    :class="[
      { 'neon-notification-counter--large-count': count > 9, 'neon-notification-counter--active': active },
      `neon-notification-counter--${color}`,
    ]"
  >
    {{ count > 9 ? '9+' : count }}
  </div>
</template>

<script lang="ts" src="./NeonNotificationCounter.ts" />
