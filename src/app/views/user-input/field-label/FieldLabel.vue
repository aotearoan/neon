<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p><strong>NeonFieldLabel</strong> is an enhanced HTML <em>label</em> supporting an optional indicator.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Examples</h2>
        <neon-field-label label="Default label" label-for="input1">
          <neon-input id="input1" v-model="inputValue" />
        </neon-field-label>
        <neon-field-label :optional="true" label="Optional label" label-for="input2">
          <neon-input id="input2" v-model="inputValue" />
        </neon-field-label>
        <neon-field-label :disabled="true" label="Disabled label" label-for="input3">
          <neon-input id="input3" v-model="inputValue" :disabled="true" />
        </neon-field-label>
        <editor v-model="example" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FieldLabel.ts" />
