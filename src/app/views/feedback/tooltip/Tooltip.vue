<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonTooltip</strong> to display tooltips or popovers. It is recommended that tooltip content
          should be kept to a single line. Use the popover style for larger content.
        </p>
        <p>To use <strong>NeonTooltip</strong> provide the <em>target</em> and <em>content</em> slots.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Tooltip.ts"></script>
