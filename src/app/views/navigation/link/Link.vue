<template>
  <neon-grid id="link" :layouts="layouts">
    <neon-grid-area id="link-content">
      <neon-card orientation="horizontal" horizontal-breakpoint="tablet">
        <neon-card-header>
          <h1>Links</h1>
        </neon-card-header>
        <neon-card-body class="links">
          <p>This is some text with a <a href=".">link</a> embedded in it.</p>
          <neon-link href=".">Router link</neon-link>
          <neon-link href="http://www.getskeleton.com">External link</neon-link>
          <neon-link title="Link title" @click="handleClick">Link with click handler</neon-link>
        </neon-card-body>
      </neon-card>
    </neon-grid-area>
  </neon-grid>
</template>

<script lang="ts" src="./Link.ts"></script>
