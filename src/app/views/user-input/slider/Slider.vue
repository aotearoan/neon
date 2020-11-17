<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :model="menuModel"
    :headline="headline"
    class="slider-examples"
  >
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonSlider</strong> component is the equivalent of an
          <strong>&lt;input type="range" /&gt;</strong>. In addition to this, there is support for automatic formatting
          the min, max and selected value plus options for percentage formatting and providing custom templates, e.g.
          currency formatting.
        </p>
        <p><strong>NeonSlider</strong> also supports all relevant properties found on an HTML &lt;input&gt;.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Slider.ts"></script>
