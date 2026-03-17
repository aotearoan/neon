<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A header component consisting of a title, an optional subtitle, actions, labels and breadcrumbs. This
          component supports different levels of headers including Page, Section & SubSection (`NeonHeaderLevel`).
        </p>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">Header level examples</h2>
          <neon-header :back-button="true" :breadcrumbs="breadcrumbs" subtitle="This is a subtitle" title="Page title">
            <template #labels>
              <neon-label color="success" label="Published" size="xs" />
              <neon-icon class="app-header__info-icon" color="info" name="information-circle" />
            </template>
            <template #actions>
              <neon-button button-style="outline" color="high-contrast" label="Decline" size="m" />
              <neon-button button-style="outline" color="high-contrast" label="Action" size="m" />
              <neon-button label="Save" size="m" />
            </template>
          </neon-header>
          <editor v-model="examplePage" language="html" />
          <br />
          <neon-header level="section" subtitle="This is a subtitle" title="Section title">
            <template #labels>
              <neon-label color="success" label="Published" size="xs" />
              <neon-icon class="app-header__info-icon" color="info" name="information-circle" />
            </template>
            <template #actions>
              <neon-button button-style="outline" color="high-contrast" label="Decline" size="s" />
              <neon-button button-style="outline" color="high-contrast" label="Action" size="s" />
              <neon-button label="Save" size="s" />
            </template>
          </neon-header>
          <editor v-model="exampleSection" language="html" />
          <br />
          <neon-header level="sub-section" subtitle="This is a subtitle" title="Sub-section title">
            <template #labels>
              <neon-label color="success" label="Published" size="xs" />
              <neon-icon class="app-header__info-icon" color="info" name="information-circle" />
            </template>
            <template #actions>
              <neon-button button-style="outline" color="high-contrast" label="Decline" size="s" />
              <neon-button button-style="outline" color="high-contrast" label="Action" size="s" />
              <neon-button label="Save" size="s" />
            </template>
          </neon-header>
          <editor v-model="exampleSubsection" language="html" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./AppHeader.ts"></script>

<style lang="scss">
.app-header__info-icon {
  width: 20rem;
  height: 20rem;
}
</style>
