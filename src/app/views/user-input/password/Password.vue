<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonPassword</strong> is the equivalent of an &lt;input type="password" /&gt;. It supports the same
          properties as NeonInput with the exception of the icon which is used to toggle the display of the password.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <div class="neon-vertically-spaced">
          <neon-password v-model="value" />
        </div>
        <editor v-model="passwordExample" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Password.ts"></script>
