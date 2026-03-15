<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This
          component will display a list of items as responsive cards. The implementation supports either pagination OR
          display of a count (x of y) and a <em>Show more</em> button to load more results. There is also a header slot
          for adding filtering or other content above the list. A slot is provided with card <em>model</em> &
          <em>index</em> parameters for customising how to display the model for each card.
        </p>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">Pagination example</h2>
          <neon-card-list :items="paginationFilteredModel" :pagination="paginationConfig" color="brand">
            <template #header>
              <neon-input v-model="paginationFilter" placeholder="Filter results…" size="s" />
            </template>
            <template #card="{ model, index }">
              <div class="card-contents">
                <span class="card-title">{{ model.title }}</span>
                <span class="card-description">{{ model.description }}</span>
              </div>
            </template>
          </neon-card-list>
          <editor v-model="paginationTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">On demand loading example</h2>
          <neon-card-list
            :items="onDemandFilteredModel"
            :load-on-demand="onDemandConfig"
            color="brand"
            @show-more="onDemandShowMore"
          >
            <template #header>
              <neon-input v-model="onDemandFilter" placeholder="Filter results…" size="s" />
            </template>
            <template #card="{ model, index }">
              <div class="card-contents">
                <span class="card-title">{{ model.title }}</span>
                <span class="card-description">{{ model.description }}</span>
              </div>
            </template>
          </neon-card-list>
          <editor v-model="onDemandTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">Selectable card list example</h2>
          <neon-card-list
            :items="selectableFilteredModel"
            :load-on-demand="selectableConfig"
            :selectable="true"
            color="brand"
            @toggle-selected="toggleSelected"
          >
            <template #header>
              <neon-input v-model="selectableFilter" placeholder="Filter results…" size="s" />
            </template>
            <template #card="{ model, index }">
              <div class="card-contents">
                <span class="card-title">{{ model.title }}</span>
                <span class="card-description">{{ model.description }}</span>
              </div>
            </template>
          </neon-card-list>
          <editor v-model="selectableTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./CardList.ts"></script>
