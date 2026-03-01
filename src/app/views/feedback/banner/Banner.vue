<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <template #default>
      <neon-card>
        <neon-card-header>
          <h2 class="neon-h3">Different types of banner message</h2>
        </neon-card-header>
        <neon-card-body>
          <neon-inline>
            <neon-button color="info" label="Info" @click="infoMessage()" />
            <neon-button color="success" label="Success" @click="successMessage()" />
            <neon-button color="warn" label="Warning" @click="warnMessage()" />
            <neon-button color="error" label="Error" @click="errorMessage()" />
            <neon-button color="high-contrast" label="Remove info" @click="removeMessage()" />
          </neon-inline>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="typesTemplate" />
        </neon-card-body>
      </neon-card>
    </template>
    <template #description>
      <neon-card>
        <neon-card-body>
          <neon-stack>
            <neon-stack gap="s">
              <p>
                The <strong>NeonBanner</strong> component can be used to display sticky notifications at the top of the
                page. The <strong>NeonBanner</strong> component is included inside <strong>NeonPage</strong> by default.
                To use outside of this include the <strong>NeonBanner</strong> component at the top level of an
                application template.
              </p>
              <editor language="html" modelValue="&lt;neon-banner&gt;&lt;/neon-banner&gt;" />
            </neon-stack>
            <neon-stack gap="s">
              <h2 class="neon-h3">Displaying banner messages</h2>
              <p>Use the following static methods on <strong>NeonBannerService</strong> to display banner messages:</p>
            </neon-stack>
            <editor v-model="infoExample" language="typescript" />
            <editor v-model="successExample" language="typescript" />
            <editor v-model="warnExample" language="typescript" />
            <editor v-model="errorExample" language="typescript" />
            <p>
              For a full range of banner message options see
              <neon-link href="/models/NeonBannerMessage">NeonBannerMessage</neon-link>
            </p>
            <h2 class="neon-h3">Removing banners</h2>
            <neon-stack gap="s">
              <p>
                Use the following static method on <strong>NeonBannerService</strong> to remove a banner style messages:
              </p>
            </neon-stack>
            <editor v-model="removeExample" language="typescript" />
          </neon-stack>
        </neon-card-body>
      </neon-card>
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./Banner.ts"></script>
