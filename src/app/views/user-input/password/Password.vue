<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Password</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonPassword</span> component is the equivalent of an
          <span class="neon-monospaced">&lt;input type="password" /&gt;</span>. It supports the same properties as
          <span class="neon-monospaced">NeonInput</span> with the exception of the icon which is used to toggle the
          display of the password.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Password" :data="data" :template="passwordExample"></example>
  </div>
</template>

<script lang="ts" src="./Password.ts"></script>
