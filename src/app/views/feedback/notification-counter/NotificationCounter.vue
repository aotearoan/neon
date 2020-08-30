<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-header>
        <h2>Description</h2>
      </neon-card-header>
      <neon-card-body>
        <p>
          Place a <strong>NeonNotificationCounter</strong> inside a positioned flex element and it will position the
          styled counter in the top right hand corner of the parent.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./NotificationCounter.ts"></script>
