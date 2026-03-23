<template>
  <neon-stack :class="`neon-header--${level}`" class="neon-header">
    <neon-breadcrumbs
      v-if="level === NeonHeaderLevel.Page && (backButton || breadcrumbs.length !== 0)"
      :back-button="backButton"
      :back-label="backLabel"
      :breadcrumbs="breadcrumbs"
    />
    <neon-inline class="neon-header__content">
      <neon-stack class="neon-header__content-copy" gap="s">
        <neon-inline class="neon-header__title-wrapper" gap="m">
          <component :is="titleLevel" class="neon-header__title">{{ title }}</component>
          <neon-inline v-if="slots.labels" class="neon-header__labels" gap="m">
            <!-- @slot a slot for adding labels/info popovers next to the title. NOTE: these are rendered in reverse order on mobile -->
            <slot name="labels"></slot>
          </neon-inline>
        </neon-inline>
        <span v-if="subtitle || slots.subtitle" class="neon-header__subtitle">
          <!-- @slot a slot for overriding the default subtitle styling and proving richer content -->
          <slot name="subtitle">
            <span v-if="subtitle">{{ subtitle }}</span>
          </slot>
        </span>
      </neon-stack>
      <neon-inline v-if="slots.actions" class="neon-header__actions" gap="s">
        <!-- @slot a slot for adding contextual action buttons to the header. The wrapper is provided, just add the buttons here in order to apply the correct spacings -->
        <slot name="actions"></slot>
      </neon-inline>
    </neon-inline>
  </neon-stack>
</template>

<script lang="ts" src="./NeonHeader.ts" />
