<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonFilter</strong> is a filtering component consisting of a button and a dropdown with a list of
          options. The button either displayed the label or information about the selected items (the selected item or
          the count of selected items).
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter sizes</h2>
        <neon-stack>
          <neon-stack gap="m">
            <h4>Small</h4>
            <neon-filter v-model="items" :label="label" size="s" />
            <h4>Medium</h4>
            <neon-filter v-model="items" :label="label" />
            <h4>Large</h4>
            <neon-filter v-model="items" :label="label" size="l" />
          </neon-stack>
          <editor v-model="sizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter colors</h2>
        <neon-stack>
          <neon-stack gap="m">
            <h4>Default (High contrast)</h4>
            <neon-filter v-model="items" :label="label" />
            <h4>Brand</h4>
            <neon-filter v-model="items" :label="label" color="brand" />
            <h4>Primary</h4>
            <neon-filter v-model="items" :label="label" color="primary" />
          </neon-stack>
          <editor v-model="colorExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Filter.ts"></script>
