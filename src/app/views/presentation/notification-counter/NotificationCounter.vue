<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Notification Counter</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          Place a <span class="neon-monospaced">NeonNotificationCounter</span> inside a positioned flex element and it
          will position the styled counter in the top right hand corner if the parent.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Examples" :template="example"></example>
  </div>
</template>

<script lang="ts" src="./NotificationCounter.ts"></script>
