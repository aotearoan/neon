<template>
  <div class="component-documentation">
    <div class="component-documentation__header">
      <div class="component-documentation__header-container">
        <h1 class="component-documentation__title neon-h2">{{ componentTitle }}</h1>
        <span v-if="headline" class="component-documentation__headline neon-color-text-neutral">{{ headline }}</span>
        <neon-tabs :tabs="tabs" v-model="selected" />
      </div>
    </div>
    <neon-tab :tab="tabs[0]" :selected="selected === tabs[0].key" :toggleOnIf="true">
      <slot></slot>
    </neon-tab>
    <neon-tab :tab="tabs[1]" :selected="selected === tabs[1].key" :toggleOnIf="true">
      <h3 class="component-documentation__tab-title">API</h3>
      <api-docs v-if="apiModel" :api-model="apiModel" :component-name="componentName" />
      <api-docs
        v-for="subApiModel in subApiModels"
        :key="subApiModel.name"
        :api-model="subApiModel.api"
        :component-name="subApiModel.name"
      />
    </neon-tab>
    <neon-tab :tab="tabs[2]" :selected="selected === tabs[2].key" :toggleOnIf="true">
      <examples :examples="examples" />
    </neon-tab>
  </div>
</template>

<script lang="ts" src="./ComponentDocumentation.ts"></script>
