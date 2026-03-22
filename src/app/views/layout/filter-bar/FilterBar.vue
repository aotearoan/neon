<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="footer-examples">
    <neon-card>
      <neon-card-body>
        <p>A filter bar to be placed above a list of items providing search, filter and sort options.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter bar example</h2>
        <neon-stack>
          <neon-filter-bar>
            <template #filters>
              <neon-search-filter v-model="searchValue" :search-count="count" />
              <neon-filter v-model="items" :label="label" />
            </template>
            <template #sort>
              <neon-select v-model="sortValue" :options="sortModel" color="high-contrast" placeholder="Sort" />
            </template>
          </neon-filter-bar>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FilterBar.ts"></script>
