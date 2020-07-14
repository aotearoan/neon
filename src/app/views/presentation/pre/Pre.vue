<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel">
    <p>
      <span class="neon-monospaced">NeonPre</span> is a wrapper around a &lt;pre&gt; block which provides styling as
      well as copying of the contents of the pre. This also requires <a href="../../feedback/alert">NeonAlert</a> to be
      setup for copy notifications.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./Pre.ts"></script>
