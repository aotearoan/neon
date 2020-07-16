<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel">
    <p>
      Place a <strong>NeonNotificationCounter</strong> inside a positioned flex element and it will position the styled
      counter in the top right hand corner of the parent.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./NotificationCounter.ts"></script>
