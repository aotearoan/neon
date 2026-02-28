<template>
  <neon-card v-if="classDocs" class="source-page">
    <neon-card-header>
      <neon-inline gap="m">
        <h1 class="neon-h3">{{ classDocs.name.split('/').pop() }}</h1>
        <neon-button
          :circular="true"
          :href="ghLink"
          :transparent="true"
          button-style="text"
          color="high-contrast"
          icon="developer-community-github-1"
          title="View on GitHub"
        />
        <neon-label :label="classType" color="info" size="xs" />
      </neon-inline>
    </neon-card-header>
    <neon-card-body v-if="classDocs.children?.[0]?.comment">
      <p
        v-for="(summary, index) in classDocs.children?.[0]?.comment?.summary || []"
        :key="index"
        class="source-page__summary"
        v-html="summary.text"
      ></p>
    </neon-card-body>

    <neon-card-body v-if="isEnum">
      <h2 class="neon-h4">Values</h2>
      <neon-stack
        v-for="enumValue in classDocs.children?.[0]?.children || []"
        :key="enumValue.name"
        class="source-page__property"
        gap="m"
      >
        <div>
          <span class="source-page__property-value" v-html="enumSignature(enumValue)"></span>
          <template v-if="enumValue.comment && enumValue.comment.summary">
            <p
              v-for="(summary, index) in enumValue.comment.summary"
              :key="index"
              class="source-page__property-description"
              v-html="summary.text"
            ></p>
            <hr class="source-page__separator" />
          </template>
        </div>
      </neon-stack>
    </neon-card-body>

    <neon-card-body v-if="isModel">
      <h2 class="neon-h4">Fields</h2>
      <neon-stack
        v-for="modelValue in classDocs.children?.[0]?.children || []"
        :key="modelValue.name"
        class="source-page__property"
        gap="m"
      >
        <neon-stack v-if="modelValue.name !== 'constructor'" gap="s">
          <neon-inline gap="m">
            <span class="source-page__property-value" v-html="modelSignature(modelValue)"> </span>
            <neon-label v-if="modelValue.flags.isOptional" label="Optional" size="xs" />
          </neon-inline>
          <p
            v-for="(summary, index) in modelSummaries(modelValue)"
            :key="index"
            class="source-page__property-description"
            v-html="summary.text"
          ></p>
          <hr class="source-page__separator" />
        </neon-stack>
      </neon-stack>
    </neon-card-body>

    <neon-card-body v-if="isUtility">
      <h2 class="neon-h4">{{ apiType === 'class' ? 'Class Member API' : 'Exported Functions API' }}</h2>
      <template v-for="member in classMembers">
        <neon-stack
          v-if="apiType === 'functions' || displayMember(member)"
          :key="member.name"
          class="source-page__property"
          gap="m"
        >
          <neon-stack gap="s">
            <neon-inline v-if="member.flags" gap="s">
              <neon-label v-if="member.flags.isStatic" label="static" size="xs" />
              <neon-label v-if="member.flags.isReadonly" color="error" label="Read only" size="xs" />
            </neon-inline>
            <span class="source-page__property-value" v-html="utilSignature(member)"></span>
            <p
              v-for="(summary, index) in memberComments(member)"
              :key="index"
              class="source-page__property-description"
              v-html="summary.text"
            ></p>
            <template v-if="returnTypeSummary(member)">
              <span class="source-page__returns-title">Returns</span>
              <p
                v-for="(summary, index) in returnTypeSummary(member)"
                :key="index"
                class="source-page__property-description"
                v-html="summary.text"
              ></p>
            </template>
            <template v-if="memberParameters(member)">
              <span class="source-page__params-title">Parameters</span>
              <ul class="source-page__parameters">
                <li v-for="param in memberParameters(member)" :key="param.name">
                  <span class="source-page__param-name">{{ param.name }}</span>
                  <span class="source-page__param-separator">—</span>
                  <template v-if="param.comment && param.comment.summary">
                    <p
                      v-for="(summary, index) in param.comment.summary"
                      :key="index"
                      class="source-page__property-description"
                      v-html="summary.text"
                    ></p>
                  </template>
                </li>
              </ul>
            </template>
          </neon-stack>
          <hr class="source-page__separator" />
        </neon-stack>
      </template>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Source.ts"></script>
