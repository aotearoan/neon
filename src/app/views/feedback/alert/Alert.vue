<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <template #default>
      <neon-card>
        <neon-card-header>
          <h2 class="neon-h3">Different types of alert</h2>
        </neon-card-header>
        <neon-card-body>
          <div class="example--horizontal">
            <neon-button color="info" label="Info" @click="infoAlert()" />
            <neon-button color="success" label="Success" @click="successAlert()" />
            <neon-button color="warn" label="Warning" @click="warnAlert()" />
            <neon-button color="error" label="Error" @click="errorAlert()" />
          </div>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="typesTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Alert placement</h2>
        </neon-card-header>
        <neon-card-body>
          <div class="example--horizontal">
            <neon-button label="Top left" @click="infoAlert('top-left')" />
            <neon-button label="Top right" @click="infoAlert('top-right')" />
            <neon-button label="Bottom left" @click="infoAlert('bottom-left')" />
            <neon-button label="Bottom right" @click="infoAlert('bottom-right')" />
          </div>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="alertPlacementTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Alerts with actions</h2>
        </neon-card-header>
        <neon-card-body>
          <div class="example--horizontal">
            <neon-button label="Single action" @click="alertSingleAction()" />
            <neon-button label="Both actions" @click="alertBothActions()" />
          </div>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="withActionsTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Toast alerts</h2>
        </neon-card-header>
        <neon-card-body>
          <div class="example--vertical">
            <div class="example--horizontal">
              <neon-button label="Toast top" @click="toastInfo()" />
              <neon-button label="Toast bottom" @click="toastInfo('bottom')" />
            </div>
            <div class="example--horizontal">
              <neon-button color="info" label="Toast info" @click="toastInfo()" />
              <neon-button color="success" label="Toast success" @click="toastSuccess()" />
              <neon-button color="warn" label="Toast warning" @click="toastWarn()" />
              <neon-button color="error" label="Toast error" @click="toastError()" />
            </div>
          </div>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="toastTemplate" />
        </neon-card-body>
      </neon-card>
    </template>
    <template #description>
      <neon-card>
        <neon-card-body>
          <p>
            The <strong>NeonAlert</strong> component can be used to display temporary notifications to the user. To use,
            include the <strong>NeonAlert</strong> component once on your page (usually just outside your main
            <em>&lt;router-view /&gt;</em>).
          </p>
          <editor language="html" modelValue="&lt;neon-alert&gt;&lt;/neon-alert&gt;" />
          <br />
          <h2 class="neon-h3">Displaying alerts</h2>
          <p>Use the following static methods on <strong>NeonAlertService</strong> to display alert style messages:</p>
          <editor v-model="infoExample" language="typescript" />
          <editor v-model="successExample" language="typescript" />
          <editor v-model="warnExample" language="typescript" />
          <editor v-model="errorExample" language="typescript" />
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
          <editor v-model="infoToast" language="typescript" />
          <editor v-model="successToast" language="typescript" />
          <editor v-model="warnToast" language="typescript" />
          <editor v-model="errorToast" language="typescript" />
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
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./Alert.ts"></script>
