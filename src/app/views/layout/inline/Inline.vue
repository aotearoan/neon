<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A horizontal layout component. NeonInline provides a way of laying out it's contents with standard gaps at
          each breakpoint. A breakpoint can be provided at which point the layout switches to vertical.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Inline examples</h2>
      </neon-card-header>
      <neon-card-body>
        <h3 class="neon-h4">Default example</h3>
        <neon-inline>
          <div>Spicy jalapeno bacon ipsum dolor</div>
          <div>Flank turkey cupim chuck pastrami</div>
          <div>Kielbasa salami flank cow, beef sausage biltong</div>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <h3 class="neon-h4">Breakpoint + gap example</h3>
        <neon-inline breakpoint="desktop" gap="s">
          <div>Spicy jalapeno bacon ipsum dolor</div>
          <div>Flank turkey cupim chuck pastrami</div>
          <div>Kielbasa salami flank cow, beef sausage biltong</div>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Inline.ts"></script>
