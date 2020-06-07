<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Input</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonInput</span> component covers the basic input types:
          <span class="neon-monospaced">email, tel, text & url</span> as well as
          <span class="neon-monospaced">textarea</span>. There are custom components defined for the other input types.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Input sizes" :data="data" :template="inputSizeExamples"></example>
    <example title="Input colors" :data="data" :template="inputColorExamples"></example>
    <example title="Input states" :data="data" :template="inputStateExamples"></example>
    <example title="Textarea examples" :data="data" :template="textareaExamples"></example>
  </div>
</template>

<script lang="ts" src="./Input.ts"></script>
