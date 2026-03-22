<template>
  <div class="neon-card-list">
    <!-- @slot slot for providing a filter bar component -->
    <slot name="filters"></slot>
    <neon-inline v-if="slots.header || loadOnDemand" class="neon-card-list__header">
      <!-- @slot slot for providing titles for the card list aligned next to the result count -->
      <slot name="header"></slot>
      <span v-if="loadOnDemand" class="neon-card-list__total">{{ n(items.length) }} {{ ofLabel }} {{ n(total) }}</span>
    </neon-inline>
    <neon-stack class="neon-card-list__cards" gap="z">
      <template v-for="(item, index) in items">
        <neon-link
          v-if="item.href && !item.disabled"
          :key="`${item.model.id ?? index}-link`"
          :class="color && `neon-card-list__link--${color}`"
          :href="item.href"
          class="neon-card-list__link"
          no-style
          outline-style="background"
        >
          <div class="neon-card-list__card">
            <!-- @slot slot for rendering card contents, two parameters are available:
    @binding {T} model - the model item to be rendered
    @binding {number} index - the index of the item in the list -->
            <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
          </div>
        </neon-link>
        <neon-selectable-card
          v-else-if="selectable"
          :key="`${item.model.id ?? index}-selectable`"
          :class="{
            'neon-card-list__card--disabled': item.disabled,
            'neon-card-list__card--selected': item.selected,
          }"
          :disabled="item.disabled"
          :model-value="!!item.selected"
          class="neon-card-list__card neon-card-list__card--selectable"
          @update:model-value="emit('toggle-selected', item.model.id, $event)"
        >
          <!-- @slot slot for rendering card contents, two parameters are available:
  @binding {T} model - the model item to be rendered
  @binding {number} index - the index of the item in the list -->
          <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
        </neon-selectable-card>
        <div
          v-else
          :key="`${item.model.id ?? index}-link`"
          :class="{ 'neon-card-list__card--disabled': item.disabled }"
          class="neon-card-list__card"
        >
          <!-- @slot slot for rendering card contents, two parameters are available:
  @binding {T} model - the model item to be rendered
  @binding {number} index - the index of the item in the list -->
          <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
        </div>
      </template>
      <neon-splash-loader v-if="loading" :color="color" />
    </neon-stack>
    <template v-if="loadOnDemand">
      <span v-if="items.length === total" class="neon-card-list__results-end">{{ endOfResultsLabel }}</span>
      <neon-button
        v-else
        :button-style="NeonButtonStyle.Text"
        :color="NeonFunctionalColor.Neutral"
        :label="showMoreLabel"
        :size="NeonSize.Small"
        class="neon-card-list__show-more"
        @click="emit('show-more', $event)"
      />
    </template>
    <neon-pagination
      v-else-if="pagination"
      :color="color"
      :display-first-and-last="pagination.displayFirstAndLast"
      :page="pagination.page"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      :url-template="pagination.urlTemplate"
      @page-change="(page: number) => emit('page-change', page)"
    />
  </div>
</template>

<script lang="ts" src="./NeonCardList.ts"></script>
