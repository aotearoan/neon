<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p><strong>NeonFieldLabel</strong> is an enhanced HTML <em>label</em> supporting an optional indicator.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <neon-field-label :optional="true" label="Test label" label-for="input1">
          <neon-input id="input1" v-model="inputValue" />
        </neon-field-label>
        <editor v-model="example" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FieldLabel.ts" />
