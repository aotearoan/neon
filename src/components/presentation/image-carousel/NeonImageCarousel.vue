<template>
  <div
    :class="{ 'neon-image-carousel--initialised': initialised }"
    class="neon-image-carousel"
    tabindex="0"
    @keydown.stop.prevent.left="previous"
    @keydown.stop.prevent.right="next"
  >
    <div class="neon-image-carousel__container" tabindex="-1">
      <neon-button
        :circular="true"
        :disabled="currentImage === 0"
        :title="previousLabel"
        :transparent="true"
        button-style="text"
        class="neon-image-carousel__previous"
        color="neutral"
        icon="chevron-left"
        size="l"
        @click="previous"
      />
      <ul ref="carouselItems" class="no-style neon-image-carousel__items">
        <li
          v-for="(image, index) in images"
          :key="image.src"
          ref="carouselItem"
          :class="{ 'neon-image-carousel__item--active': index === currentImage }"
          class="neon-image-carousel__item"
        >
          <img :alt="image.alt" :src="image.src" class="neon-image-carousel__image" />
        </li>
      </ul>
      <neon-button
        :circular="true"
        :disabled="currentImage === images.length - 1"
        :title="nextLabel"
        :transparent="true"
        button-style="text"
        class="neon-image-carousel__next"
        color="neutral"
        icon="chevron-right"
        size="l"
        @click="next"
      />
    </div>
    <div class="neon-image-carousel__nav" tabindex="-1">
      <neon-link
        v-for="(_image, index) in images"
        :key="index"
        :aria-label="`Display image ${index + 1}`"
        class="neon-image-carousel__nav-item-link"
        outline-style="none"
        role="button"
        tabindex="0"
        @keydown.stop.prevent.enter="scrollTo(index)"
        @keydown.stop.prevent.space="scrollTo(index)"
      >
        <div
          :class="{ 'neon-image-carousel__nav-item--active': index === currentImage }"
          class="neon-image-carousel__nav-item"
          tabindex="-1"
          @click="scrollTo(index)"
        >
          <div class="neon-image-carousel__nav-item-indicator"></div>
        </div>
      </neon-link>
    </div>
    <span class="neon-image-carousel__label" tabindex="-1">
      {{ imageCountLabel || `${images.length} ${images.length === 1 ? 'image' : 'images'}` }}
    </span>
  </div>
</template>

<script lang="ts" src="./NeonImageCarousel.ts" />
