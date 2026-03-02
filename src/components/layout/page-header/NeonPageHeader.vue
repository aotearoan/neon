<template>
  <div class="neon-page-header">
    <div class="neon-page-header__content">
      <div>
        <h1 class="neon-h2 neon-page-header__title">{{ title }}</h1>
        <neon-inline class="neon-page-header__subtitle">
          <!-- @slot slot for defining content to be displayed as a subtitle below the page title -->
          <slot name="subtitle"></slot>
        </neon-inline>
      </div>
      <div class="neon-page-header__actions">
        <!-- @slot slot for defining actions to be displayed in the page header -->
        <slot name="actions"></slot>
      </div>
    </div>
    <neon-note v-if="note" :color="note.color" :icon="false" :title="note.title" class="neon-page-header__note">
      <span v-if="note?.description">{{ note.description }}</span>
    </neon-note>
  </div>
</template>

<script lang="ts" src="./NeonPageHeader.ts"></script>
