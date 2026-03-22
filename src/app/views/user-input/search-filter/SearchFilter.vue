<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A search filter component consisting of a button and a dropdown with a search input. The button either
          displays the search label or the current search text.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Search filter sizes</h2>
        <neon-stack>
          <neon-stack gap="m">
            <h4>Small</h4>
            <neon-search-filter v-model="searchValue" :search-count="count" size="s" @on-search="updateSearchCount" />
            <h4>Medium</h4>
            <neon-search-filter v-model="searchValue" :search-count="count" @on-search="updateSearchCount" />
            <h4>Large</h4>
            <neon-search-filter v-model="searchValue" :search-count="count" size="l" @on-search="updateSearchCount" />
          </neon-stack>
          <editor v-model="sizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Search filter colors</h2>
        <neon-stack>
          <neon-stack gap="m">
            <h4>Default (High contrast)</h4>
            <neon-search-filter v-model="searchValue" :search-count="count" @on-search="updateSearchCount" />
            <h4>Brand</h4>
            <neon-search-filter
              v-model="searchValue"
              :search-count="count"
              color="brand"
              @on-search="updateSearchCount"
            />
            <h4>Primary</h4>
            <neon-search-filter
              v-model="searchValue"
              :search-count="count"
              color="primary"
              @on-search="updateSearchCount"
            />
          </neon-stack>
          <editor v-model="colorExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SearchFilter.ts"></script>
