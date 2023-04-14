<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides
          the correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Page example</h2>
      </neon-card-header>
      <neon-card-body :full-width="true">
        <div class="example__output--fixed-content">
          <neon-page>
            <template #top-nav>
              <neon-top-nav>
                <span>Top Nav content</span>
              </neon-top-nav>
            </template>
            <template #content>
              <neon-side-nav>
                <template #sticky>
                  <span>Side nav content</span>
                </template>
              </neon-side-nav>
              <neon-grid id="content" :layouts="layouts">
                <neon-grid-area id="section-content">
                  <span>Grid area</span>
                </neon-grid-area>
              </neon-grid>
            </template>
          </neon-page>
        </div>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Page.ts"></script>
