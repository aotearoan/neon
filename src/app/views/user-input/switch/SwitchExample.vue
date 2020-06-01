<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Switch</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          A switch can be used for enabling/disabling an option, this is equivalent to a checkbox. The switch supports
          both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Switch style" :data="data" :template="switchTemplate"></example>
    <example title="Checkbox style" :data="data" :template="checkboxTemplate"></example>
  </div>
</template>

<script lang="ts" src="./SwitchExample.ts"></script>
