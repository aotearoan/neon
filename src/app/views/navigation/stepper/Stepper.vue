<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A stepper component for assisting users in navigating through complex flows. Use this component when you want
          to lead a user through a specific flow with know steps up front. This informs the user how much effort & the
          types of information required to complete the flow.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Default Stepper</h2>
        <neon-stack>
          <neon-stepper
            :completed-index="3"
            :model-value="2"
            :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5 with the long name']"
          />
          <editor v-model="defaultTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Color Example</h2>
        <neon-stack>
          <neon-stepper
            :completed-index="3"
            :model-value="3"
            :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5 with the long name']"
            color="success"
          />
          <editor v-model="colorTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Stepper.ts"></script>
