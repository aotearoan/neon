<template>
  <component-documentation
    v-if="menuModel"
    :headline="headline"
    :model="menuModel"
    class="action-menu-examples"
  >
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonActionMenu</strong> is designed for use in <strong>NeonSideNav</strong>. It provides a list of
          menu items which effectively act as tabs, allowing the interface to switch without necessarily updating the
          URL.
        </p>
        <p>
          Use these in the same way you would use tabs - to break up the presentation of information to the user when
          there is too much information to display at once.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Basic example</h2>
        <neon-action-menu :model="model" :model-value="selected" color="primary" @update:modelValue="toggleSelected" />
        <editor v-model="basicTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">With counts</h2>
        <neon-action-menu :model="modelWithCounts"
                          :model-value="selected2"
                          color="primary"
                          @update:modelValue="toggleSelected2"
        />
        <editor v-model="withCountsTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ActionMenu.ts"></script>
