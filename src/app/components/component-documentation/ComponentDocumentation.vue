<template>
  <div v-if="selected && tabs.length > 0" class="component-documentation">
    <div class="component-documentation__header">
      <div class="component-documentation__header-container">
        <h1 class="component-documentation__title">{{ componentTitle }}</h1>
        <span v-if="headline" class="component-documentation__headline neon-color-neutral">{{ headline }}</span>
        <neon-tabs v-model="selected" :tabs="tabs" :underline="false" />
      </div>
    </div>
    <neon-tab
      v-if="examplesIndex >= 0"
      :selected="selected === tabs[examplesIndex].key"
      :tab="tabs[examplesIndex]"
      :toggleOnIf="true"
    >
      <h2 v-if="descriptionIndex === -1" class="neon-h3 component-documentation__description-heading">Description</h2>
      <slot name="default"></slot>
    </neon-tab>
    <neon-tab
      v-if="descriptionIndex >= 0"
      :selected="selected === tabs[descriptionIndex].key"
      :tab="tabs[descriptionIndex]"
      :toggleOnIf="true"
    >
      <h2 v-if="slots.default" class="neon-h3">Description</h2>
      <slot name="description"></slot>
    </neon-tab>
    <neon-tab v-if="apiIndex >= 0" :selected="selected === tabs[apiIndex].key" :tab="tabs[apiIndex]" :toggleOnIf="true">
      <h3 class="component-documentation__tab-title">API</h3>
      <api-docs v-if="apiModel" :api-model="apiModel" :component-name="componentName" />
      <api-docs
        v-for="subApiModel in subApiModels"
        :key="subApiModel.name"
        :api-model="subApiModel.api"
        :component-name="subApiModel.name"
      />
    </neon-tab>
  </div>
</template>

<script lang="ts" src="./ComponentDocumentation.ts"></script>
