<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open,
          and the dropdown content which is displayed above the page when the user clicks the button.
        </p>
        <p>
          This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the
          page or the action is asynchronous allowing the user to perform the action and continue what they were doing.
          Examples are providing links to copy and letting the user send feedback.
        </p>
        <p>
          <strong>NeonDropdown</strong> is the basis for the <strong>NeonDropdownMenu</strong> component and the
          <strong>NeonSelect</strong> form component.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Dropdown.ts"></script>
