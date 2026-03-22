<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="empty-state-page">
    <template #default>
      <neon-card>
        <neon-card-body>
          <p>
            NeonEmptyState is a component for displaying an empty state message with an image and optional
            call-to-action buttons. It can also be used to render error pages.
          </p>
        </neon-card-body>
        <neon-card-body>
          <h2 class="neon-h3">Empty state example</h2>
          <neon-empty-state :ctas="emptyCtas" title="You have no items">
            <template #description>
              <span>Manage your items.</span>
            </template>
          </neon-empty-state>
          <editor v-model="templateEmptyState" />
        </neon-card-body>
        <neon-card-body>
          <h2 class="neon-h3">Error page example</h2>
          <neon-empty-state :ctas="errorCtas" subtitle="Page not found" title="404" type="error">
            <template #description>
              <span>The page you're looking for does not exist, please check the url or click below.</span>
            </template>
          </neon-empty-state>
          <editor v-model="templateError" />
        </neon-card-body>
      </neon-card>
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./EmptyState.ts" />
