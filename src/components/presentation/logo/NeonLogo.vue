<template>
  <div class="neon-logo" role="img" :class="{ 'neon-logo--inverse': inverse }">
    <slot>
      <neon-icon name="logo" :inverse="inverse" />
    </slot>
  </div>
</template>

<script lang="ts" src="./NeonLogo.ts"></script>
