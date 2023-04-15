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
        <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel :model-value="expanded1"
                                label="Small"
                                size="s"
                                @update:modelValue="toggleExpanded('expanded1')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded2"
                                label="Medium"
                                size="m"
                                @update:modelValue="toggleExpanded('expanded2')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded3"
                                label="Large"
                                size="l"
                                @update:modelValue="toggleExpanded('expanded3')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
        </div>
        <editor v-model="sizesTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">More styles</h2>
        <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel :model-value="expanded4"
                                icon="contrast"
                                label="With icon"
                                @update:modelValue="toggleExpanded('expanded4')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded5"
                                color="success"
                                icon="contrast"
                                label="Colored label"
                                @update:modelValue="toggleExpanded('expanded5')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :full-width="true"
                                :model-value="expanded6"
                                label="Full width"
                                @update:modelValue="toggleExpanded('expanded6')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :disabled="true"
                                :model-value="expanded7"
                                label="Disabled"
                                @update:modelValue="toggleExpanded('expanded7')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded8"
                                label="From bottom"
                                position="bottom"
                                @update:modelValue="toggleExpanded('expanded8')">
            <p>{{ content }}</p>
          </neon-expansion-panel>
        </div>
        <editor v-model="moreTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ExpansionPanel.ts"></script>
