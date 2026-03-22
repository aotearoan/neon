<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonLoadingStateCard</strong> is used as a placeholder for content that is loading in NeonCardList.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <neon-stack>
          <neon-stack>
            <neon-loading-state-card />
          </neon-stack>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./LoadingStateCard.ts"></script>
