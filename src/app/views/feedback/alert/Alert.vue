<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Alerts</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonAlert</span> component can be used to display notifications to the user.
          To use, include the <span class="neon-monospaced">NeonAlert</span> component only once on your page and then
          use the following static methods on <span class="neon-monospaced">NeonAlertService</span> to display alerts:
        </p>
        <ul>
          <li>
            <span class="neon-monospaced">NeonAlertService.info(title: string, message = '')</span>
          </li>
          <li>
            <span class="neon-monospaced">NeonAlertService.success(title: string, message = '')</span>
          </li>
          <li>
            <span class="neon-monospaced">NeonAlertService.warning(title: string, message = '')</span>
          </li>
          <li>
            <span class="neon-monospaced">NeonAlertService.error(title: string, message = '')</span>
          </li>
        </ul>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Alert.ts"></script>
