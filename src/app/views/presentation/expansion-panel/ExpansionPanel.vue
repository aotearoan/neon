<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonExpansionPanel</strong> is used to show and hide content that may be less important or too
          large to display on screen all of the time. It can also be used to expand lists of items, e.g.
          <em>Show more</em>. <strong>NeonExpansionPanel</strong> consists of a button which, when clicked, toggles the
          open/closed state of the expansion panel and a slot for the content to display on expansion.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ExpansionPanel.ts"></script>
