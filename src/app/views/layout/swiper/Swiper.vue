<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Automatically handle horizontally overflowing content by placing it in a NeonSwiper component allowing for
          smooth horizontal scrolling with all input devices. Resize your screen to test it out.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-inline breakpoint="" gap="s">
          <span>Status:</span>
          <neon-swiper>
            <neon-inline breakpoint="" gap="s">
              <neon-toggle-chip
                v-model="filterAccepted"
                :show-check="false"
                color="high-contrast"
                label="Accepted"
                size="s"
              />
              <neon-toggle-chip
                v-model="filterPending"
                :show-check="false"
                color="high-contrast"
                label="Pending"
                size="s"
              />
              <neon-toggle-chip
                v-model="filterRejected"
                :show-check="false"
                color="high-contrast"
                label="Rejected"
                size="s"
              />
              <neon-toggle-chip v-model="filterPaid" :show-check="false" color="high-contrast" label="Paid" size="s" />
              <neon-toggle-chip
                v-model="filterCancelled"
                :show-check="false"
                color="high-contrast"
                label="Cancelled"
                size="s"
              />
            </neon-inline>
          </neon-swiper>
        </neon-inline>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Swiper.ts"></script>
