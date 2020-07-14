<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel">
    <p>
      Place a <span class="neon-monospaced">NeonNotificationCounter</span> inside a positioned flex element and it will
      position the styled counter in the top right hand corner if the parent.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./NotificationCounter.ts"></script>
