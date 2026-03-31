<template>
  <div class="neon-list-layout">
    <neon-splash-loader v-if="initializing" color="brand" />
    <div v-else-if="!initializing && items.length > 0">
      <neon-header
        :back-button="backButton"
        :back-label="backLabel"
        :breadcrumbs="breadcrumbs"
        :subtitle="subtitle"
        :title="title"
      >
        <template #labels>
          <!-- @slot a slot for adding labels/info popovers next to the title -->
          <slot name="labels"></slot>
        </template>
        <template v-if="items.length > 0" #actions>
          <!-- @slot a slot for adding contextual action buttons to the header. The wrapper is provided, just add the
          buttons here in order to apply the correct spacings -->
          <slot name="actions"></slot>
        </template>
      </neon-header>
      <!-- @slot the insert a note into the page -->
      <slot name="note"></slot>
      <neon-card-list
        :color="color"
        :items="items"
        :list-style="listStyle"
        :load-on-demand="loadOnDemand"
        :loading="loading"
        :pagination="pagination"
        :selectable="selectable"
        @page-change="(page: number) => emit('page-change', page)"
        @show-more="showMore"
        @toggle-selected="toggleSelected"
      >
        <template #filters>
          <!-- @slot the insert a filter bar above the list -->
          <slot name="filters"></slot>
        </template>
        <template #header>
          <!-- @slot the list header -->
          <slot name="header"></slot>
        </template>
        <template #card="{ model, index }">
          <!-- @slot slot for rendering card contents, two parameters are available:
    @binding {T} model - the model item to be rendered
    @binding {number} index - the index of the item in the list -->
          <slot name="card" v-bind="{ model, index }"></slot>
        </template>
      </neon-card-list>
    </div>
    <template v-else-if="!initializing && !loading && slots.emptyState && items.length === 0">
      <!-- @slot page empty state rendered when there are no list items -->
      <slot name="emptyState"></slot>
    </template>
  </div>
</template>

<script lang="ts" src="./NeonListLayout.ts" />
