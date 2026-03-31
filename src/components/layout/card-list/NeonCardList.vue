<template>
  <div :class="`neon-card-list--${listStyle}`" class="neon-card-list">
    <!-- @slot slot for providing a filter bar component -->
    <slot name="filters"></slot>
    <neon-inline v-if="slots.header" class="neon-card-list__header">
      <!-- @slot slot for providing titles for the card list -->
      <slot name="header"></slot>
    </neon-inline>
    <transition-group ref="cards" class="neon-card-list__cards" tag="div">
      <template v-for="(item, index) in items">
        <neon-link
          v-if="!item.disabled && (sortable || item.href)"
          :key="`${item.model.id ?? index}-link`"
          :class="color && `neon-card-list__link--${color}`"
          :href="item.href"
          class="neon-card-list__link"
          no-style
          outline-style="background"
        >
          <neon-draggable-card
            :color="color"
            :drag-index="dragIndex"
            :draggable="sortable && items.length > 1"
            :index="index"
            :item="item"
            @drop="onDrop"
            @on-drag="onDrag"
          >
            <div class="neon-card-list__card">
              <!-- @slot override the default loading state card -->
              <slot v-if="pagination && loading" name="loadingStateCard">
                <neon-loading-state-card />
              </slot>
              <template v-else>
                <transition mode="out-in" name="neon-fade-transition">
                  <!-- @slot slot for rendering card contents, two parameters are available:
      @binding {T} model - the model item to be rendered
      @binding {number} index - the index of the item in the list -->
                  <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
                </transition>
              </template>
            </div>
          </neon-draggable-card>
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
          <!-- @slot override the default loading state card -->
          <slot v-if="pagination && loading" name="loadingStateCard">
            <neon-loading-state-card />
          </slot>
          <template v-else>
            <transition mode="out-in" name="neon-fade-transition">
              <!-- @slot slot for rendering card contents, two parameters are available:
      @binding {T} model - the model item to be rendered
      @binding {number} index - the index of the item in the list -->
              <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
            </transition>
          </template>
        </neon-selectable-card>
        <div
          v-else
          :key="`${item.model.id ?? index}-card`"
          :class="{ 'neon-card-list__card--disabled': item.disabled }"
          class="neon-card-list__card"
        >
          <!-- @slot override the default loading state card -->
          <slot v-if="pagination && loading" name="loadingStateCard">
            <neon-loading-state-card />
          </slot>
          <template v-else>
            <transition mode="out-in" name="neon-fade-transition">
              <!-- @slot slot for rendering card contents, two parameters are available:
      @binding {T} model - the model item to be rendered
      @binding {number} index - the index of the item in the list -->
              <slot name="card" v-bind="{ model: item.model, index: index }"></slot>
            </transition>
          </template>
        </div>
      </template>
    </transition-group>
    <template v-if="loadOnDemand">
      <span v-if="resultCountLabel" class="neon-card-list__result-count-label">{{ resultCountLabel }}</span>
      <neon-button
        v-if="items.length < total"
        :label="showMoreLabel"
        :size="NeonSize.Large"
        :state="loading ? NeonState.Loading : NeonState.Ready"
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
      @page-change="onPageChange"
    />
  </div>
</template>

<script lang="ts" src="./NeonCardList.ts"></script>
