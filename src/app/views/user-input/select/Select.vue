<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :model="menuModel"
    :headline="headline"
    class="select-examples"
  >
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonSelect</strong> is the equivalent of an HTML &lt;select&gt; form control. On touch devices
          NeonSelect will use the native select for input. <strong>NeonSelect</strong> supports grouping, multiselect
          and filtering.
        </p>
        <p>
          For dropdown menus please use <strong>NeonDropdownMenu</strong>, for dropdowns with more complex content
          please use <strong>NeonDropdown</strong>
        </p>
        <p>
          <strong>Note:</strong> As well as the options described below, pass through attributes supported by
          <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Select.ts"></script>
