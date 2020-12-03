<template>
  <div class="component-documentation" v-if="selected && tabs.length > 0">
    <div class="component-documentation__header">
      <div class="component-documentation__header-container">
        <h1 class="component-documentation__title neon-h2">{{ componentTitle }}</h1>
        <span v-if="headline" class="component-documentation__headline neon-color-text-neutral">{{ headline }}</span>
        <neon-tabs :tabs="tabs" v-model="selected" @input="onChangeTab" />
      </div>
    </div>
    <neon-tab
      v-if="examplesIndex >= 0"
      :tab="tabs[examplesIndex]"
      :selected="selected === tabs[examplesIndex].key"
      :toggleOnIf="true"
    >
      <h2 v-if="descriptionIndex === -1" class="neon-h3 component-documentation__description-heading">Description</h2>
      <slot v-if="descriptionIndex === -1"></slot>
      <examples :examples="examples" />
    </neon-tab>
    <neon-tab
      v-if="descriptionIndex >= 0"
      :tab="tabs[descriptionIndex]"
      :selected="selected === tabs[descriptionIndex].key"
      :toggleOnIf="true"
    >
      <h2 v-if="$slots.default" class="neon-h3">Description</h2>
      <slot></slot>
    </neon-tab>
    <neon-tab v-if="apiIndex >= 0" :tab="tabs[apiIndex]" :selected="selected === tabs[apiIndex].key" :toggleOnIf="true">
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
