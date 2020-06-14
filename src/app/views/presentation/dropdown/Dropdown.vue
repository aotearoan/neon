<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Dropdown</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonDropdown</span> is a generic pop-open container triggered by clicking
          the dropdown button. This component is for smaller/faster actions that require more space than is available
          but do not require the full attention of the user by opening a modal.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Dropdown sizes" :data="data" :template="sizeExamples"></example>
    <example title="Dropdown styles" :data="data" :template="styleExamples"></example>
    <example title="Dropdown colors" :data="data" :template="colorExamples"></example>
    <example title="Dropdown positions" :data="data" :template="positionExamples"></example>
  </div>
</template>

<script lang="ts" src="./Dropdown.ts"></script>
