<template>
  <component-documentation v-if="menuModel" :examples="examples" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonAlert</strong> component can be used to display temporary notifications to the user. To use,
          include the <strong>NeonAlert</strong> component once on your page (usually just outside your main
          <em>&lt;router-view /&gt;</em>).
        </p>
        <editor :read-only="true" language="html" modelValue="&lt;neon-alert&gt;&lt;/neon-alert&gt;" />
        <br />
        <h2 class="neon-h3">Displaying alerts</h2>
        <p>Use the following static methods on <strong>NeonAlertService</strong> to display alert style messages:</p>
        <editor v-model="infoExample" :read-only="true" language="typescript" />
        <editor v-model="successExample" :read-only="true" language="typescript" />
        <editor v-model="warnExample" :read-only="true" language="typescript" />
        <editor v-model="errorExample" :read-only="true" language="typescript" />
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
        <editor v-model="infoToast" :read-only="true" language="typescript" />
        <editor v-model="successToast" :read-only="true" language="typescript" />
        <editor v-model="warnToast" :read-only="true" language="typescript" />
        <editor v-model="errorToast" :read-only="true" language="typescript" />
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
