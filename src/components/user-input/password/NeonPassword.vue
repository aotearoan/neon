<template>
  <neon-input
    :type="show ? 'text' : 'password'"
    class="neon-password"
    :icon="show ? 'visibility-on' : 'visibility-off'"
    v-bind="sanitizedAttributes"
    @icon-click="iconClicked"
  />
</template>

<script lang="ts" src="./NeonPassword.ts" />
