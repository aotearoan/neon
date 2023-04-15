<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonExpansionIndicator</strong> is a small animated chevron which is used by other components to
          indicate the expansion of a container. It's unlikely that it would be used on it's own but rather as part of
          creating a more complex expandable component.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3>">Examples</h2>
        <div class="example--horizontal">
          <neon-expansion-indicator :expanded="false" />
          <neon-expansion-indicator :expanded="true" />
          <neon-expansion-indicator :expanded="false" color="primary" />
          <div class="example-inverse-bg">
            <neon-expansion-indicator :expanded="false" :inverse="true" />
          </div>
          <neon-expansion-indicator :disabled="true" />
        </div>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ExpansionIndicator.ts"></script>
