<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This
          component will display a list of items as cards with a count (x of y) and a <em>Show more</em> button to load
          more results. There is also a slot for adding filtering or other content above the list. A slot is provided
          with card model & index parameters for customising how to display the model for each card.
        </p>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">Basic example</h2>
          <neon-card-list :clickable="true" :model="filteredModel" :total="total" color="brand" @show-more="onShowMore">
            <template #header>
              <neon-input v-model="filter" placeholder="Filter results…" size="s" />
            </template>
            <template #card="{ cardModel, index }">
              <div class="card-contents">
                <span class="card-title">{{ cardModel.title }}</span>
                <span class="card-description">{{ cardModel.description }}</span>
              </div>
            </template>
          </neon-card-list>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">Links example</h2>
          <neon-card-list
            :clickable="true"
            :model="linkFilteredModel"
            :total="linkTotal"
            color="brand"
            @show-more="onLinkShowMore"
          >
            <template #header>
              <neon-input v-model="linkFilter" placeholder="Filter results…" size="s" />
            </template>
            <template #card="{ cardModel, index }">
              <div class="card-contents">
                <span class="card-title">{{ cardModel.title }}</span>
                <span class="card-description">{{ cardModel.description }}</span>
              </div>
            </template>
          </neon-card-list>
          <editor v-model="linkTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./CardList.ts"></script>
