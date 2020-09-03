<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      <strong>NeonCard</strong> is a key component for the layout of content within pages. Card consist of any number of
      <strong>NeonCardHeader</strong>, <strong>NeonCardBody</strong> and <strong>NeonCardFooter</strong> components.
    </p>
    <p>
      By default cards have a column layout, use the <em>orientation</em> property to define horizontal cards (row
      layout). Horizontal cards will revert to a column layout at a configurable responsive breakpoint.
    </p>
    <p>
      The <strong>NeonCardHeader</strong> component is designed to be a container for titles as well as secondary
      actions related to the content displayed in the card.
    </p>
    <p>
      The <strong>NeonCardBody</strong> component is used for displaying the main content of the card. By default, body
      sections have padding defined. Use the <em>full-width</em> attribute for displaying body content without any
      padding. This can be useful for display edge-to-edge images, etc.. in cards.
    </p>
    <p>
      The <strong>NeonCardFooter</strong> is designed to be placed at the bottom of a card and contains the key actions
      related to the card content.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./Card.ts"></script>
