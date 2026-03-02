<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>A component for rendering a piece of content with a label.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Label + Value</h2>
        <neon-labelled-content label="Label" value="Value" />
        <editor v-model="labelValueTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Important label</h2>
        <neon-labelled-content important label="Label" value="Value" />
        <editor v-model="importantTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Numeric value</h2>
        <neon-labelled-content label="Label" numeric value="12,000.55" />
        <editor v-model="numericTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Value slot</h2>
        <neon-labelled-content label="Label">
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </neon-labelled-content>
        <editor v-model="slotTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./LabelledContent.ts"></script>
