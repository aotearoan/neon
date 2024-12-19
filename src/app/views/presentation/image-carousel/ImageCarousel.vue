<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="image-carousel">
    <template #default>
      <neon-card>
        <neon-card-body>
          <p>
            The <strong>NeonImageCarousel</strong> is used to display a carousel of images for the user to swipe
            through. NOTE: It is recommended to explicitly set the width & height of the carousel via CSS, this will
            ensure it will not be impacted by images with different aspect ratios. Images are automatically resized to
            fit the carousel dimensions.
          </p>
        </neon-card-body>
        <neon-card-body>
          <neon-stack size="s">
            <h2 class="neon-h3">Neon Image Carousel</h2>
            <neon-image-carousel :images="images" class="image-carousel__wrapper" />
            <editor v-model="template" />
          </neon-stack>
        </neon-card-body>
      </neon-card>
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./ImageCarousel.ts"></script>
