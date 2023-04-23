<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch
          supports both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Switch sizes</h2>
        <div>
          <neon-switch v-model="checked1" label="Small" size="s" />
          <neon-switch v-model="checked2" label="Medium" />
          <neon-switch v-model="checked3" label="Large" size="l" />
        </div>
        <editor v-model="sizeTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Switch colors</h2>
        <div>
          <neon-switch v-model="checked4" color="low-contrast" label="Low contrast" size="m" />
          <neon-switch v-model="checked5" color="info" label="Info" size="m" />
        </div>
        <editor v-model="colorTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Label position</h2>
        <div>
          <neon-switch v-model="checked6" color="primary" label="Right label" size="m" />
          <neon-switch v-model="checked7" color="primary" label="Left label" label-position="left" size="m" />
        </div>
        <editor v-model="labelTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Disabled switch</h2>
        <div>
          <neon-switch v-model="checked8" :disabled="true" color="primary" label="Disabled" size="m" />
        </div>
        <editor v-model="stateTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Checkbox style</h2>
        <div>
          <neon-switch v-model="checked9" label="Small checkbox" size="s" switch-style="checkbox" />
          <neon-switch v-model="checked10" label="Medium checkbox" switch-style="checkbox" />
          <neon-switch v-model="checked11" label="Large checkbox" size="l" switch-style="checkbox" />
          <neon-switch v-model="checked12" label="Left label" label-position="left" switch-style="checkbox" />
          <neon-switch
            v-model="checked13"
            :indeterminate="indeterminate"
            label="Indeterminate checkbox"
            switch-style="checkbox"
            @indeterminate-change="setIndeterminate()"
          />
          <neon-switch v-model="checked14" :disabled="true" label="Disabled checkbox" switch-style="checkbox" />
        </div>
        <editor v-model="checkboxTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SwitchExample.ts"></script>
