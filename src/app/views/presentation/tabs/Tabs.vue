<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            <strong>NeonTabs</strong> can be used to present tabbed content inside or outside cards. Each tab is defined
            as a <strong>NeonTab</strong> component and can be included in the <strong>NeonTabs</strong> default slot
            (It is also possible to include them elsewhere on the page). <strong>NeonTabs</strong> renders the buttons
            for switching tabs and communicates that back to the parent component to control which tab is visible.
          </p>
          <p>
            Once the screen width is reduced to the <em>mobile-large</em> breakpoint the tabs are exploded and displayed
            in a single full-width column, with the tab buttons hidden.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Tabbed content</h2>
        <neon-stack>
          <neon-tabs v-model="selected" :tabs="tabs">
            <neon-tab v-for="(tab, index) in tabs" :key="tab.key" :selected="selected === tab.key" :tab="tab">
              <h6>Tab {{ index + 1 }}</h6>
              <span>{{ tabContent }}</span>
            </neon-tab>
          </neon-tabs>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Tabs.ts"></script>
