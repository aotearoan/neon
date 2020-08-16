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
        <app-pre language="html">{{ `&lt;neon-alert&gt;&lt;/neon-alert&gt;` }}</app-pre>
        <p>Then use the following static methods on <strong>NeonAlertService</strong> to display alerts:</p>
        <app-pre language="typescript">{{
          `NeonAlertService.info('alert title', 'Optional detailed message');`
        }}</app-pre>
        <app-pre language="typescript">{{
          `NeonAlertService.success('alert title', 'Optional detailed message');`
        }}</app-pre>
        <app-pre language="typescript">{{
          `NeonAlertService.warning('alert title', 'Optional detailed message');`
        }}</app-pre>
        <app-pre language="typescript">{{
          `NeonAlertService.error('alert title', 'Optional detailed message');`
        }}</app-pre>
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
