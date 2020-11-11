<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :model="menuModel"
    :headline="headline"
    class="search-examples"
  >
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonSearch</strong> component is equivalent to an HTML &lt;input type="search"&gt; element. It is
          useful as an alternative to <em>NeonSelect</em> to provide filtered results when the universe of results is
          very large and/or the results need to be requested from a server side API.
        </p>
        <p><strong>NeonSearch</strong> provides input chips in the case the search allows multiple selection.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Search.ts"></script>
