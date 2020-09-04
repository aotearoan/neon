<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonAlert</strong> component can be used to display notifications to the user. To use, include the
          <strong>NeonAlert</strong> component only once on your page (usually just outside your main
          <em>&lt;router-view /&gt;</em>):
        </p>
        <editor :read-only="true" value="&lt;neon-alert&gt;&lt;/neon-alert&gt;" language="html" />
        <p>Then use the following static methods on <strong>NeonAlertService</strong> to display alerts:</p>
        <editor
          :read-only="true"
          value="NeonAlertService.info('alert title', 'Optional detailed message');"
          language="typescript"
        />
        <editor
          :read-only="true"
          value="NeonAlertService.success('alert title', 'Optional detailed message');"
          language="typescript"
        />
        <editor
          :read-only="true"
          value="NeonAlertService.warning('alert title', 'Optional detailed message');"
          language="typescript"
        />
        <editor
          :read-only="true"
          value="NeonAlertService.error('alert title', 'Optional detailed message');"
          language="typescript"
        />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Alert.ts"></script>
