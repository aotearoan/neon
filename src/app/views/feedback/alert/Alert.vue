<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonAlert</strong> component can be used to display temporary notifications to the user. To use,
          include the <strong>NeonAlert</strong> component once on your page (usually just outside your main
          <em>&lt;router-view /&gt;</em>).
        </p>
        <editor :read-only="true" value="&lt;neon-alert&gt;&lt;/neon-alert&gt;" language="html" />
        <br />
        <h2 class="neon-h3">Displaying alerts</h2>
        <p>Use the following static methods on <strong>NeonAlertService</strong> to display alert style messages:</p>
        <editor :read-only="true" :value="infoExample" language="typescript" />
        <editor :read-only="true" :value="successExample" language="typescript" />
        <editor :read-only="true" :value="warnExample" language="typescript" />
        <editor :read-only="true" :value="errorExample" language="typescript" />
        <p>
          By default alerts have a duration of 2500ms until they disappear, they can be dismissed by clicking on them
          and they are placed in the top right corner of the screen. Duration and dismissability can be configured
          globally on the <strong>NeonAlert</strong> component as well as per message.
        </p>
        <p>
          For a full range of alert message options see
          <neon-link href="/models/NeonAlertMessage">NeonAlertMessage</neon-link>
        </p>
        <h2 class="neon-h3">Displaying toasts</h2>
        <p>Use the following static methods on <strong>NeonToastService</strong> to display toast style messages:</p>
        <editor :read-only="true" :value="infoToast" language="typescript" />
        <editor :read-only="true" :value="successToast" language="typescript" />
        <editor :read-only="true" :value="warnToast" language="typescript" />
        <editor :read-only="true" :value="errorToast" language="typescript" />
        <p>
          By default toasts have a duration of 2500ms until they disappear, they can be dismissed by clicking on them
          and they are displayed centered at the top of the screen. Duration and dismissability can be configured
          globally on the <strong>NeonAlert</strong> component as well as per message.
        </p>
        <p>
          For a full range of message options see
          <neon-link href="/models/NeonToastMessage">NeonToastMessage</neon-link>
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Alert.ts"></script>
