<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            <strong>NeonChip</strong> is a clickable or removable chip which can be used as a tag or to indicate
            selected values in filters and other more complex inputs (e.g. search / multiselect). Clicking the chip
            results in a callback and in the case it is removable, also removal of the chip. Chips are designed to fit
            inside inputs for creating more complex input components.
          </p>
          <p>
            Chips are navigable via tab (tabindex). When focussed, use space, return or enter to click on clickable tabs
            and, in the case of removable tabs, use backspace and delete to remove a tab. Escape will blur a focussed
            tab.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Chip sizes</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-chip label="Small" size="s" />
            <neon-chip label="Medium" size="m" />
            <neon-chip label="Large" size="l" />
          </div>
          <editor v-model="chipSizes" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Chip colors</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-chip label="Neutral" />
            <neon-chip color="low-contrast" label="Low Contrast" />
            <neon-chip color="high-contrast" label="High Contrast" />
            <neon-chip color="brand" label="Brand" />
            <neon-chip color="info" label="Info" />
            <neon-chip color="success" label="Success" />
            <neon-chip color="warn" label="Warning" />
            <neon-chip color="error" label="Error" />
          </div>
          <editor v-model="chipColors" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Chip actions</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-chip color="info" label="Clickable" @click="click" />
            <neon-chip action="remove" color="info" label="Removable" @close="remove" />
            <neon-chip :disabled="true" action="remove" color="info" label="Disabled" />
          </div>
          <editor v-model="chipActions" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Chip with icon</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-chip icon="moon" label="With icon" />
          </div>
          <editor v-model="chipIcons" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Chip.ts"></script>
