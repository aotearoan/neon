<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Place a <strong>NeonNotificationCounter</strong> inside a positioned flex element and it will position the
          styled counter in the top right hand corner of the parent.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Notification counters</h2>
        <div class="neon--vertical">
          <div class="neon--horizontal example--margin-top">
            <span class="positioned-element">No value<neon-notification-counter :active="active" /></span>
            <span class="positioned-element">With value<neon-notification-counter :active="active" :count="9" /></span>
            <span class="positioned-element"
              >Large number<neon-notification-counter :active="active" :count="42"
            /></span>
            <span class="positioned-element"
              >With color<neon-notification-counter :active="active" :count="9" color="brand"
            /></span>
          </div>
          <neon-switch v-model="active" label="Activate notifications" />
          <editor v-model="template" />
        </div>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./NotificationCounter.ts"></script>
