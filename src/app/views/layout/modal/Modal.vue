<template>
  <neon-card>
    <neon-card-header>
      <h1>Modal</h1>
    </neon-card-header>
    <neon-card-body>
      <div class="neon-horizontal neon-space-evenly">
        <neon-button label="Open modal" @click="open = true"></neon-button>
        <neon-modal :open="open" @close="open = false">
          <neon-card>
            <neon-card-header>
              <h1>Modal title</h1>
            </neon-card-header>
            <neon-card-body>
              <h6>Modal content goes here</h6>
              <p>
                Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
                Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
                tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
                Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
              </p>
              <p>
                Ribeye chicken t-bone burgdoggen kevin shank shankle. Turkey venison pastrami short loin shankle sausage
                prosciutto. Hamburger pancetta ribeye, ham ground round capicola shank beef. Flank shoulder strip steak
                rump venison short loin corned beef. Ground round turkey bresaola meatball pork loin, buffalo chuck pork
                ribeye kielbasa.
              </p>
            </neon-card-body>
            <neon-card-footer>
              <neon-button label="Cancel" @click="open = false" />
              <neon-button label="Accept" color="primary" @click="open = false" />
            </neon-card-footer>
          </neon-card>
        </neon-modal>
      </div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Modal.ts"></script>
