<template>
  <div :class="{ 'neon-basic-layout--with-sticky-buttons': stickyButtons }" class="neon-basic-layout">
    <!-- @slot display a fixed banner above the page content (NOTE: this is not a parallax scrolling 'Hero' banner, for
    this use the neon-hero-layout component) -->
    <slot name="banner" />
    <div class="neon-basic-layout__container">
      <!-- @slot override default header for richer content -->
      <slot v-if="hasHeader" name="header">
        <neon-header
          :back-button="backButton"
          :back-label="backLabel"
          :breadcrumbs="breadcrumbs"
          :level="NeonHeaderLevel.Page"
          :subtitle="subtitle"
          :title="title"
        >
          <template #actions>
            <!-- @slot provide a list of action buttons to be placed in the header -->
            <slot name="actions"></slot>
          </template>
          <template #subtitle>
            <!-- @slot override the subtitle for richer content - for simple usage just provide the subtitle property -->
            <slot name="subtitle"></slot>
          </template>
          <template #labels>
            <!-- @slot provide one or more labels to be places beside the title -->
            <slot name="labels"></slot>
          </template>
        </neon-header>
      </slot>
      <!-- @slot the page contents -->
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonBasicLayout.ts" />
