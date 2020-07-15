<template>
  <neon-card orientation="horizontal" horizontal-breakpoint="tablet">
    <neon-card-header>
      <h1>Links</h1>
    </neon-card-header>
    <neon-card-body class="links">
      <p>This is some text with a <a href=".">link</a> embedded in it.</p>
      <neon-link href=".">Router link</neon-link>
      <neon-link href="http://www.getskeleton.com" :external-indicator="true" target="_blank">External link</neon-link>
      <neon-link title="Link title" @click="handleClick">Link with click handler</neon-link>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Link.ts"></script>
