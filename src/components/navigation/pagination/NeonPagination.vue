<template>
  <div
    :class="[
      {
        'neon-pagination--empty': hidePagination,
      },
      `neon-pagination--${color}`,
    ]"
    class="neon-pagination"
  >
    <neon-button
      v-if="displayFirstAndLast"
      :disabled="disabledPrevious"
      :href="!disabledPrevious ? url(1) : undefined"
      button-style="outline"
      class="neon-pagination__nav-link neon-pagination__first"
      color="high-contrast"
      icon="first-page"
    />
    <neon-button
      :disabled="disabledPrevious"
      :href="!disabledPrevious ? url(previousPage) : undefined"
      button-style="outline"
      class="neon-pagination__nav-link neon-pagination__previous"
      color="high-contrast"
      icon="arrow-left-1"
    />
    <div class="neon-pagination__page-links">
      <neon-button
        v-if="showFirstPageWithEllipsis"
        :href="url(1)"
        button-style="text"
        class="neon-pagination__link"
        color="high-contrast"
        label="1"
        transparent
      />
      <neon-icon v-if="showFirstPageWithEllipsis" class="neon-pagination__less" color="low-contrast" name="ellipsis" />
      <!-- eslint-disable-next-line -->
      <template v-for="pageInRange in pageRange" :key="pageInRange">
        <span v-if="page === pageInRange" class="neon-pagination__link--selected">
          {{ pageInRange }}
        </span>
        <neon-button
          v-else
          :href="url(pageInRange)"
          :label="`${pageInRange}`"
          button-style="text"
          class="neon-pagination__link"
          color="high-contrast"
          transparent
        />
      </template>
      <neon-icon v-if="showLastPageWithEllipsis" class="neon-pagination__more" color="low-contrast" name="ellipsis" />
      <neon-button
        v-if="showLastPageWithEllipsis"
        :href="url(pageCount)"
        :label="`${pageCount}`"
        button-style="text"
        class="neon-pagination__link"
        color="high-contrast"
        transparent
      />
    </div>
    <neon-button
      :disabled="disabledNext"
      :href="!disabledNext ? url(nextPage) : undefined"
      button-style="outline"
      class="neon-pagination__nav-link neon-pagination__next"
      color="high-contrast"
      icon="arrow-right-1"
    />
    <neon-button
      v-if="displayFirstAndLast"
      :disabled="disabledNext"
      :href="!disabledNext ? url(pageCount) : undefined"
      button-style="outline"
      class="neon-pagination__nav-link neon-pagination__last"
      color="high-contrast"
      icon="last-page"
    />
  </div>
</template>

<script lang="ts" src="./NeonPagination.ts"></script>
