<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            The <strong>NeonDropdownMenu</strong> is designed to display a list of clickable options which can either
            trigger a callback or open a URL.
          </p>
          <p>
            Use <strong>NeonDropdownMenu</strong> to display options to the user behind a dropdown button. This is
            useful when there is limited space, or the actions are secondary.
          </p>
          <p>
            <strong>Note:</strong> As well as the options described below, pass through attributes supported by
            <neon-link href="/presentation/dropdown">NeonDropdown</neon-link>
            to change the style of the dropdown button.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown sizes</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-dropdown-menu :model="model" label="Small menu" size="s" />
            <neon-dropdown-menu :model="model" label="Medium menu" size="m" />
            <neon-dropdown-menu :model="model" label="Large menu" size="l" />
          </div>
          <editor v-model="sizeTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdowns with colors and icons</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-dropdown-menu :model="modelWithIcons" color="brand" label="Brand" />
            <neon-dropdown-menu :model="modelWithIcons" color="primary" label="Primary" />
            <neon-dropdown-menu :model="modelWithIcons" color="info" label="Info" />
            <neon-dropdown-menu :model="modelWithIcons" color="success" label="Success" />
            <neon-dropdown-menu :model="modelWithIcons" color="warn" label="Warning" />
            <neon-dropdown-menu :model="modelWithIcons" color="error" label="Error" />
          </div>
          <editor v-model="colorTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./DropdownMenu.ts"></script>
