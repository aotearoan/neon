<template>
  <div class="neon-image-carousel-wrapper">
    <div
      :class="{
        'neon-image-carousel--initialised': initialised,
        'neon-image-carousel--expanded': isExpanded,
      }"
      class="neon-image-carousel"
      tabindex="0"
      @keydown.stop.prevent.left="previous"
      @keydown.stop.prevent.right="next"
      @keydown.esc="isExpanded && toggleExpanded()"
    >
      <div class="neon-image-carousel__container" tabindex="-1">
        <neon-button
          v-if="isExpanded"
          :title="closeLabel"
          button-style="text"
          class="neon-image-carousel__close"
          color="low-contrast"
          icon="close"
          size="l"
          transparent
          @click="isExpanded && toggleExpanded()"
        />
        <neon-button
          :disabled="currentImage === 0"
          :title="previousLabel"
          :transparent="true"
          button-style="text"
          class="neon-image-carousel__previous"
          color="neutral"
          icon="arrow-left-1"
          size="l"
          @click.capture.stop="previous"
        />
        <ul ref="carouselItems" class="no-style neon-image-carousel__items">
          <li
            v-for="(image, index) in images"
            :key="image.src"
            ref="carouselItem"
            :class="{ 'neon-image-carousel__item--active': index === currentImage }"
            class="neon-image-carousel__item"
          >
            <img
              :alt="image.alt"
              :src="image.src"
              class="neon-image-carousel__image"
              @click.stop="!isExpanded && toggleExpanded()"
            />
            <p v-if="isExpanded" class="neon-image-carousel__item-title">{{ image.alt }}</p>
          </li>
        </ul>
        <neon-button
          :disabled="currentImage === images.length - 1"
          :title="nextLabel"
          :transparent="true"
          button-style="text"
          class="neon-image-carousel__next"
          color="neutral"
          icon="arrow-right-1"
          size="l"
          @click.capture.stop="next"
        />
      </div>
      <neon-stack class="neon-image-carousel__nav-container" gap="s">
        <div class="neon-image-carousel__nav" tabindex="-1">
          <neon-link
            v-for="(_image, index) in images"
            :key="index"
            :aria-label="`Display image ${index + 1}`"
            class="neon-image-carousel__nav-item-link"
            no-style
            outline-style="none"
            role="button"
            tabindex="0"
            @keydown.stop.prevent.capture.enter="scrollTo(index)"
            @keydown.stop.prevent.capture.space="scrollTo(index)"
          >
            <div
              :class="{ 'neon-image-carousel__nav-item--active': index === currentImage }"
              class="neon-image-carousel__nav-item"
              tabindex="-1"
              @click.capture.stop="scrollTo(index)"
            >
              <div class="neon-image-carousel__nav-item-indicator"></div>
            </div>
          </neon-link>
        </div>
        <span v-if="!hideLabel" class="neon-image-carousel__label" tabindex="-1">
          {{ imageCountLabel || `${images.length} ${images.length === 1 ? 'image' : 'images'}` }}
        </span>
      </neon-stack>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonImageCarousel.ts" />
