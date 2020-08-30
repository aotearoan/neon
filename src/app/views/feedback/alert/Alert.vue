<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-header>
        <h2>Description</h2>
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
  </component-documentation>
</template>

<script lang="ts" src="./Alert.ts"></script>
