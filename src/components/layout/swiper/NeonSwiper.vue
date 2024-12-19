<template>
  <div
    :class="{
      'neon-swiper--fade': fade,
      'neon-swiper--overflowing': isOverflowing,
      'neon-swiper--start': isScrollStart,
      'neon-swiper--end': isScrollEnd,
    }"
    class="neon-swiper"
  >
    <div ref="scrollable" class="neon-swiper__container">
      <!-- @slot contents of swiper with which to apply overflow scrolling. -->
      <slot></slot>
    </div>
    <div class="neon-swiper__fade-out"></div>
  </div>
</template>

<script lang="ts" src="./NeonSwiper.ts"></script>
