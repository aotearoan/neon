<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Use the <strong>NeonLink</strong> component to display links to the user. These links can be internal router
          links (relative href), external links (absolute href) or click handlers (not href and an @click event
          handler).
        </p>
        <p>NOTE: HTML &lt;a&gt; links are styled in the same way as <strong>NeonLink</strong> components.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Link.ts"></script>
