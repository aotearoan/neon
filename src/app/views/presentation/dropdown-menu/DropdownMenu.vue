<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Dropdown Menu</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonDropdownMenu</span> is designed to display a list of clickable options
          which can either trigger a callback or open a URL.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Examples" :data="data" :template="examples"></example>
  </div>
</template>

<script lang="ts" src="./DropdownMenu.ts"></script>
