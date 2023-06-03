<template>
  <neon-stack>
    <neon-card>
      <neon-card-header>
        <h1>Accessibility</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            As much as possible Neon tries to use semantic HTML for creating components. This means most interactive
            components are implicitly accessible. Where semantic HTML is either not possible or unavailable Neon
            supports ARIA keyboard accessibility as well as the relevant ARIA roles and attributes on each component.
          </p>
          <p>
            Please see individual component examples and APIs to see how they behave. Also the source code in GitHub can
            provide more about specific implementation details.
          </p>
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./Accessibility.ts"></script>
