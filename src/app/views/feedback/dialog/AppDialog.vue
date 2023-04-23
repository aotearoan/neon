<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A dialog component for confirming simple actions. This will be rendered above the content of the main window
          and present just two options to the user, one to proceed with the action and the other to cancel it.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dialog example</h2>
        <div class="neon--horizontal">
          <neon-button label="Open dialog" @click="toggleOpen(true)"></neon-button>
          <neon-dialog
            :open="open"
            cancel-label="Reject"
            color="success"
            confirm-label="Accept"
            question="Are you sure you want to accept incoming requests?"
            title="Incoming requests"
            @cancel="toggleOpen(false)"
            @confirm="toggleOpen(false)"
          >
          </neon-dialog>
        </div>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./AppDialog.ts"></script>
