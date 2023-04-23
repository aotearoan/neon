<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="field-group-examples">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonFieldGroup</strong> component can be used to combine inputs, button and input indicators into
          a single control.
        </p>
        <p>
          This is useful for providing a richer interface and also giving hints to the users about the input fields they
          need to complete.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Field Group Examples</h2>
        <div class="neon-vertically-spaced">
          <neon-field-group>
            <neon-input-indicator label="Salary" size="s" />
            <neon-input v-model="indexFilter" color="primary" placeholder="Enter amount" size="s" type="text" />
            <neon-select v-model="currency" :options="currencies" color="primary" placeholder="Currency" size="s" />
          </neon-field-group>
          <neon-field-group>
            <neon-input v-model="indexFilter" color="primary" placeholder="Enter rate" type="text" />
            <neon-input-indicator label="%" />
          </neon-field-group>
          <neon-field-group>
            <neon-input-indicator label="$" size="l" />
            <neon-input v-model="indexFilter" placeholder="Enter amount" size="l" type="text" />
            <neon-button label="Submit" size="l" />
          </neon-field-group>
        </div>
        <editor v-model="inputIndicatorExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FieldGroup.ts"></script>
