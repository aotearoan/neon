<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonFilterList</strong> is an alternative component to a select where the values are displayed in a
          visible list to the user. This component is particularly useful for presenting filters to the user and also
          provides the option of displaying the item counts with each list item.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter list sizes</h2>
        <div class="neon-vertically-spaced">
          <h4>Small</h4>
          <neon-filter-list v-model="smallModel" :items="items" size="s" />
          <h4>Medium</h4>
          <neon-filter-list v-model="mediumModel" :items="items" />
          <h4>Large</h4>
          <neon-filter-list v-model="largeModel" :items="items" size="l" />
        </div>
        <editor v-model="sizeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter list colors</h2>
        <div class="neon-vertically-spaced">
          <h4>High contrast</h4>
          <neon-filter-list v-model="hcModel" :items="items" color="high-contrast" />
          <h4>Brand</h4>
          <neon-filter-list v-model="brandModel" :items="items" color="brand" />
          <h4>Primary</h4>
          <neon-filter-list v-model="primaryModel" :items="items" color="primary" />
        </div>
        <editor v-model="colorExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Filter list selection type</h2>
        <div class="neon-vertically-spaced">
          <h4>Single select</h4>
          <neon-filter-list v-model="singleModel" :items="items" :multiple="false" />
          <h4>Multi select</h4>
          <neon-filter-list v-model="multipleModel" :items="items" />
        </div>
        <editor v-model="typeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Limit items displayed</h2>
        <div class="neon-vertically-spaced">
          <h4>Unlimited (default)</h4>
          <neon-filter-list v-model="unlimitedModel" :display-count="0" :items="longItemList" />
          <h4>Limited</h4>
          <neon-filter-list v-model="customLimitModel" :display-count="5" :items="longItemList" color="brand" />
        </div>
        <editor v-model="limitExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FilterList.ts"></script>
