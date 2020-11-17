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
          The <strong>NeonRangeSlider</strong> is an input control for allowing users to select a discrete range of
          values. <strong>NeonRangeSlider</strong> supports the same color, formatting and display options available on
          <strong>NeonSlider</strong>.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./RangeSlider.ts"></script>
