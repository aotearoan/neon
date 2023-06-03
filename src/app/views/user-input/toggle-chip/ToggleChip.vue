<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A Toggle chip component used to indicate an on/off state in form inputs. This is equivalent to a checkbox.
          This is a variation of a checkbox/switch which can be used as an on/off button to trigger an action or used in
          a group for filtering.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle chip sizes</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-toggle-chip v-model="checked1" label="Extra Small" size="xs" />
            <neon-toggle-chip v-model="checked2" label="Small" size="s" />
            <neon-toggle-chip v-model="checked3" label="Medium" />
            <neon-toggle-chip v-model="checked4" label="Large" size="l" />
          </div>
          <editor v-model="sizeTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle chip with no check</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-toggle-chip v-model="checked5" :show-check="false" label="Extra small" size="xs" />
            <neon-toggle-chip v-model="checked6" :show-check="false" label="Small" size="s" />
            <neon-toggle-chip v-model="checked7" :show-check="false" label="Medium" size="m" />
            <neon-toggle-chip v-model="checked8" :show-check="false" label="Large" size="l" />
          </div>
          <editor v-model="noCheckTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle chip colors</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-toggle-chip v-model="checked9" color="brand" label="Brand" />
            <neon-toggle-chip v-model="checked10" color="primary" label="Primary" />
            <neon-toggle-chip v-model="checked11" color="info" label="Info" />
            <neon-toggle-chip v-model="checked12" color="warn" label="Warning" />
          </div>
          <editor v-model="colorTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Group toggle chips</h2>
        <neon-stack>
          <neon-note color="info">
            <span
            ><strong>Note:</strong> Use toggle chips as an alternative to a multi-select with only a few options</span
            >
          </neon-note>
          <neon-inline>
            <neon-toggle-chip v-model="checked13" :show-check="false" label="Bacon" size="s" />
            <neon-toggle-chip v-model="checked14" :show-check="false" label="Cheese" size="s" />
            <neon-toggle-chip v-model="checked15" :show-check="false" label="Pineapple" size="s" />
            <neon-toggle-chip v-model="checked16" :show-check="false" label="Mushrooms" size="s" />
          </neon-inline>
          <editor v-model="fewOptionsTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Disabled toggle chip</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-toggle-chip v-model="checked17" :disabled="true" color="primary" label="Disabled" size="m" />
          </div>
          <editor v-model="stateTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ToggleChip.ts"></script>
