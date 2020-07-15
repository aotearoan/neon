<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Alerts</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <strong>NeonAlert</strong> component can be used to display notifications to the user. To use, include the
          <strong>NeonAlert</strong> component only once on your page (usually just outside your main
          <strong>&lt;router-view /&gt;</strong>):
        </p>
        <neon-pre>
          <pre>&lt;neon-alert&gt;&lt;/neon-alert&gt;</pre>
        </neon-pre>
        <p>Then use the following static methods on <strong>NeonAlertService</strong> to display alerts:</p>
        <neon-pre>
          <pre>NeonAlertService.info('alert title', 'Optional detailed message');</pre>
        </neon-pre>
        <neon-pre>
          <pre>NeonAlertService.success('alert title', 'Optional detailed message');</pre>
        </neon-pre>
        <neon-pre>
          <pre>NeonAlertService.warning('alert title', 'Optional detailed message');</pre>
        </neon-pre>
        <neon-pre>
          <pre>NeonAlertService.error('alert title', 'Optional detailed message');</pre>
        </neon-pre>
      </neon-card-body>
    </neon-card>
    <neon-card class="examples">
      <neon-card-header>
        <h1>Examples</h1>
      </neon-card-header>
      <neon-card-body class="alert-buttons">
        <neon-button color="info" label="Info Alert" @click="infoAlert()" />
        <neon-button color="success" label="Success Alert" @click="successAlert()" />
        <neon-button color="warn" label="Warn Alert" @click="warnAlert()" />
        <neon-button color="error" label="Error Alert" @click="errorAlert()" />
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Alert.ts"></script>
