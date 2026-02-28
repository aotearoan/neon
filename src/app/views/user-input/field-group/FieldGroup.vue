<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="field-group-examples">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            The <strong>NeonFieldGroup</strong> component can be used to combine inputs, button and input indicators
            into a single control.
          </p>
          <p>
            This is useful for providing a richer interface and also giving hints to the users about the input fields
            they need to complete.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Field Group internal style examples</h2>
        <neon-stack>
          <neon-stack gap="m">
            <neon-field-group>
              <neon-input-indicator label="Salary" size="s" />
              <neon-input v-model="indexFilter" color="primary" placeholder="Enter amount" size="s" type="text" />
              <neon-input-indicator label="USD" size="s" />
            </neon-field-group>
            <neon-field-group>
              <neon-input v-model="indexFilter" color="primary" placeholder="Enter rate" type="text" />
              <neon-input-indicator label="%" />
            </neon-field-group>
            <neon-field for="largeField" label="Large field">
              <neon-field-group>
                <neon-input-indicator for="largeField" label="USD" size="l" />
                <neon-input id="largeField" v-model="indexFilter" placeholder="Enter amount" size="l" type="text" />
              </neon-field-group>
            </neon-field>
            <neon-field for="largeDisabledField" label="Disabled field">
              <neon-field-group :disabled="true">
                <neon-input-indicator :disabled="true" for="largeDisabledField" label="USD" size="l" />
                <neon-input
                  id="largeDisabledField"
                  v-model="indexFilter"
                  :disabled="true"
                  placeholder="Enter amount"
                  size="l"
                  type="text"
                />
              </neon-field-group>
            </neon-field>
          </neon-stack>
          <editor v-model="inputIndicatorInternalExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Field Group external style examples</h2>
        <neon-stack>
          <neon-stack gap="m">
            <neon-field-group indicator-style="external">
              <neon-input-indicator label="Salary" size="s" />
              <neon-input v-model="indexFilter" color="primary" placeholder="Enter amount" size="s" type="text" />
              <neon-select v-model="currency" :options="currencies" color="primary" placeholder="Currency" size="s" />
            </neon-field-group>
            <neon-field-group indicator-style="external">
              <neon-input v-model="indexFilter" color="primary" placeholder="Enter rate" type="text" />
              <neon-input-indicator label="%" />
            </neon-field-group>
            <neon-field-group indicator-style="external">
              <neon-input-indicator label="$" size="l" />
              <neon-input v-model="indexFilter" placeholder="Enter amount" size="l" type="text" />
              <neon-button color="low-contrast" label="Submit" size="l" />
            </neon-field-group>
          </neon-stack>
          <editor v-model="inputIndicatorExternalExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FieldGroup.ts"></script>
