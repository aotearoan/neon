<template>
  <component-documentation v-if="menuModel" :examples="examples" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A stepper component for assisting users in navigating through complex flows. Use this component when you want
          to lead a user through a specific flow with know steps up front. This informs the user how much effort & the
          types of information required to complete the flow.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Stepper.ts"></script>
