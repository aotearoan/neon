<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <template #default>
      <neon-card>
        <neon-card-header>
          <h2 class="neon-h3">Different types of alert</h2>
        </neon-card-header>
        <neon-card-body>
          <neon-inline>
            <neon-button color="info" label="Info" @click="infoAlert()" />
            <neon-button color="success" label="Success" @click="successAlert()" />
            <neon-button color="warn" label="Warning" @click="warnAlert()" />
            <neon-button color="error" label="Error" @click="errorAlert()" />
          </neon-inline>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="typesTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Alert placement</h2>
        </neon-card-header>
        <neon-card-body>
          <neon-inline>
            <neon-button color="low-contrast" label="Top left" @click="infoAlert(NeonAlertPlacement.TopLeft)" />
            <neon-button color="low-contrast" label="Top right" @click="infoAlert(NeonAlertPlacement.TopRight)" />
            <neon-button color="low-contrast" label="Bottom left" @click="infoAlert(NeonAlertPlacement.BottomLeft)" />
            <neon-button color="low-contrast" label="Bottom right" @click="infoAlert(NeonAlertPlacement.BottomRight)" />
          </neon-inline>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="alertPlacementTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Alerts with actions</h2>
        </neon-card-header>
        <neon-card-body>
          <neon-inline>
            <neon-button color="low-contrast" label="Single action" @click="alertSingleAction()" />
            <neon-button color="low-contrast" label="Both actions" @click="alertBothActions()" />
          </neon-inline>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="withActionsTemplate" />
        </neon-card-body>
        <neon-card-header>
          <h2 class="neon-h3">Toast alerts</h2>
        </neon-card-header>
        <neon-card-body>
          <neon-stack>
            <neon-inline>
              <neon-button color="low-contrast" label="Toast top" @click="toastInfo()" />
              <neon-button color="low-contrast" label="Toast bottom" @click="toastInfo(NeonVerticalPosition.Bottom)" />
            </neon-inline>
            <neon-inline breakpoint="tablet">
              <neon-button color="info" label="Toast info" @click="toastInfo()" />
              <neon-button color="success" label="Toast success" @click="toastSuccess()" />
              <neon-button color="warn" label="Toast warning" @click="toastWarn()" />
              <neon-button color="error" label="Toast error" @click="toastError()" />
            </neon-inline>
          </neon-stack>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="toastTemplate" />
        </neon-card-body>
      </neon-card>
    </template>
    <template #description>
      <neon-card>
        <neon-card-body>
          <neon-stack>
            <neon-stack gap="s">
              <p>
                The <strong>NeonAlert</strong> component can be used to display temporary notifications to the user. The
                <strong>NeonAlert</strong> component is included inside <strong>NeonPage</strong> by default. To use
                outside of this include the <strong>NeonAlert</strong> component in an application template.
              </p>
              <editor language="html" modelValue="&lt;neon-alert&gt;&lt;/neon-alert&gt;" />
            </neon-stack>
            <neon-stack gap="s">
              <h2 class="neon-h3">Displaying alerts</h2>
              <p>
                Use the following static methods on <strong>NeonAlertService</strong> to display alert style messages:
              </p>
            </neon-stack>
            <editor v-model="infoExample" language="typescript" />
            <editor v-model="successExample" language="typescript" />
            <editor v-model="warnExample" language="typescript" />
            <editor v-model="errorExample" language="typescript" />
            <p>
              By default alerts have a duration of 2500ms until they disappear, they can be dismissed by clicking on
              them and they are placed in the top right corner of the screen. Duration and dismissability can be
              configured globally on the <strong>NeonAlert</strong> component as well as per message.
            </p>
            <p>
              For a full range of alert message options see
              <neon-link href="/models/NeonAlertMessage">NeonAlertMessage</neon-link>
            </p>
            <h2 class="neon-h3">Displaying toasts</h2>
            <neon-stack gap="s">
              <p>
                Use the following static methods on <strong>NeonToastService</strong> to display toast style messages:
              </p>
              <editor v-model="infoToast" language="typescript" />
            </neon-stack>
            <editor v-model="successToast" language="typescript" />
            <editor v-model="warnToast" language="typescript" />
            <editor v-model="errorToast" language="typescript" />
            <p>
              By default toasts have a duration of 2500ms until they disappear, they can be dismissed by clicking on
              them and they are displayed centered at the top of the screen. Duration and dismissability can be
              configured globally on the <strong>NeonAlert</strong> component as well as per message.
            </p>
            <p>
              For a full range of message options see
              <neon-link href="/models/NeonToastMessage">NeonToastMessage</neon-link>
            </p>
          </neon-stack>
        </neon-card-body>
      </neon-card>
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./Alert.ts"></script>
