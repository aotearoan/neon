<template>
  <div class="neon-card-list">
    <neon-inline class="neon-card-list__header" breakpoint="">
      <!-- @slot slot for providing filters for the card list aligned next to the result count -->
      <slot name="filters"></slot>
      <span v-if="total" class="neon-card-list__total">{{ n(model.length) }} {{ ofLabel }} {{ n(total) }}</span>
    </neon-inline>
    <neon-stack class="neon-card-list__cards">
      <template v-for="(cardModel, index) in model">
        <neon-link
          v-if="cardModel.href && !cardModel.disabled"
          :key="`${cardModel.key || index}-link`"
          :href="cardModel.href"
          :target="cardModel.targetBlank ? '_blank' : null"
        >
          <neon-card-list-card :color="color" :disabled="cardModel.disabled">
            <!-- @slot slot for rendering card contents, two parameters are available: cardModel (the model item to be rendered) & index -->
            <!-- eslint-disable-next-line vue/no-unused-vars -->
            <slot name="card" v-bind="{ cardModel, index: index }"></slot>
          </neon-card-list-card>
        </neon-link>
        <neon-card-list-card
          v-else
          :key="`${cardModel.key || index}-card`"
          :clickable="clickable && !cardModel.disabled"
          :color="color"
          :disabled="cardModel.disabled"
          @click="!cardModel.disabled && emit('click', index)"
        >
          <!-- @slot slot for rendering card contents, two parameters are available: cardModel (the model item to be rendered) & index -->
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <slot name="card" v-bind="{ cardModel, index: index }"></slot>
        </neon-card-list-card>
      </template>
    </neon-stack>
    <span v-if="model.length === total" class="neon-card-list__results-end">{{ endOfResultsLabel }}</span>
    <neon-button
      v-else
      :button-style="NeonButtonStyle.Text"
      :color="NeonFunctionalColor.Neutral"
      :size="NeonSize.Small"
      :label="showMoreLabel"
      class="neon-card-list__show-more"
      @click="emit('show-more', $event)"
    />
  </div>
</template>

<script lang="ts" src="./NeonCardList.ts"></script>
