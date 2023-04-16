<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonList</strong> component renders a list of removable items. This can be used as an alternative
          to removable chips where a vertical list is more appropriate.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">List sizes</h2>
        <div class="neon-vertically-spaced">
          <h4>Small</h4>
          <neon-list v-model="smallItems" size="s" @close="onClose" />
          <h4>Medium</h4>
          <neon-list v-model="mediumItems" @close="onClose" />
          <h4>Large</h4>
          <neon-list v-model="largeItems" size="l" @close="onClose" />
        </div>
        <editor v-model="sizeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">List colors</h2>
        <div class="neon-vertically-spaced">
          <h4>High contrast</h4>
          <neon-list v-model="hcItems" color="high-contrast" @close="onClose" />
          <h4>Brand</h4>
          <neon-list v-model="brandItems" color="brand" @close="onClose" />
          <h4>Warn</h4>
          <neon-list v-model="warnItems" color="warn" @close="onClose" />
        </div>
        <editor v-model="colorExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">List states</h2>
        <div class="neon-vertically-spaced">
          <h4>Disabled</h4>
          <neon-list v-model="disabledItems" :disabled="true" />
        </div>
        <editor v-model="stateExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./List.ts"></script>
