<template>
  <div class="neon-skeleton-loader">
    <div v-for="i in count" :key="i" class="neon-skeleton-loader__item"></div>
  </div>
</template>

<script lang="ts" src="./NeonSkeletonLoader.ts" />
