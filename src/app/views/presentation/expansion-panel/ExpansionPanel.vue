<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonExpansionPanel</strong> is used to show and hide content that may be less important or too
          large to display on screen all the time. It can also be used to expand lists of items, e.g.
          <em>Show more</em>. <strong>NeonExpansionPanel</strong> consists of a button which, when clicked, toggles the
          open/closed state of the expansion panel and a slot for the content to display on expansion.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Expansion panel sizes</h2>
        <div class="neon--vertical example-expansion-panel">
          <neon-expansion-panel v-model="expanded1" label="Small" size="s">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded2" label="Medium" size="m">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded3" label="Large" size="l">
            <p>{{ content }}</p>
          </neon-expansion-panel>
        </div>
        <editor v-model="sizesTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">More styles</h2>
        <div class="neon--vertical example-expansion-panel">
          <neon-expansion-panel v-model="expanded4" icon="contrast" label="With icon">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded5" color="success" icon="contrast" label="Colored label">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded6" :full-width="true" label="Full width">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded7" :disabled="true" label="Disabled">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded8" label="From bottom" position="bottom">
            <p>{{ content }}</p>
          </neon-expansion-panel>
        </div>
        <editor v-model="moreTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ExpansionPanel.ts"></script>
