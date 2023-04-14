<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A modal dialog component. This will be rendered above the content of the main window and can either be
          dismissed by the user or configured to require user interaction before dismissal.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Modal example</h2>
        <div class="example--horizontal">
          <neon-button label="Open modal" @click="toggleOpen(true)"></neon-button>
          <neon-modal :open="open" @close="toggleOpen(false)">
            <neon-card size="m">
              <neon-card-header>
                <h3>Modal title</h3>
              </neon-card-header>
              <neon-card-body>
                <h6>Modal content goes here</h6>
                <p>
                  Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
                  Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
                  tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
                  Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
                </p>
              </neon-card-body>
              <neon-card-footer>
                <neon-button button-style="text" label="Cancel" @click="toggleOpen(false)" />
                <neon-button color="primary" label="Accept" @click="toggleOpen(false)" />
              </neon-card-footer>
            </neon-card>
          </neon-modal>
        </div>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Modal.ts"></script>
