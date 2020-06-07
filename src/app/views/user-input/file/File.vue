<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>File</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonFile</span> component is an alternative to
          <span class="neon-monospaced">&lt;input type="file" /&gt;</span>. It displayed a button which opens the file
          dialog and allows the users to select files using the native interface. The selected file(s) are then
          displayed in a list where the user has the ability to remove these individually or all at once.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="File example" :data="data" :template="fileExamples"></example>
  </div>
</template>

<script lang="ts" src="./File.ts"></script>
