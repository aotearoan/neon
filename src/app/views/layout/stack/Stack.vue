<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A vertical layout component. NeonStack provides a way of laying out it's contents with standard gaps at each
          breakpoint. For cases where the gap needs to be different it is recommended to just use a <em>div</em> & apply
          a gap using CSS. Alternatively, NeonStack could be used by also applying a gap in CSS.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Stack example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-stack>
          <div>Spicy jalapeno bacon ipsum dolor</div>
          <div>Flank turkey cupim chuck pastrami</div>
          <div>Kielbasa salami flank cow, beef sausage biltong</div>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Stack.ts"></script>
