<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="select-examples">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            The <strong>NeonSelect</strong> is the equivalent of an HTML &lt;select&gt; form control. On touch devices
            NeonSelect will use the native select for input. <strong>NeonSelect</strong> supports grouping, multiselect
            and filtering.
          </p>
          <p>
            For dropdown menus please use <strong>NeonDropdownMenu</strong>, for dropdowns with more complex content
            please use <strong>NeonDropdown</strong>
          </p>
          <p>
            <strong>Note:</strong> As well as the options described below, pass through attributes supported by
            <neon-link href="/presentation/dropdown">NeonDropdown</neon-link>
            to change the style of the dropdown button.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Select sizes</h2>
        <neon-stack>
          <neon-stack>
            <neon-select v-model="selectSmall" :options="model" placeholder="Select item" size="s" />
            <neon-select v-model="selectMedium" :options="model" placeholder="Select item" size="m" />
            <neon-select v-model="selectLarge" :options="model" placeholder="Select item" size="l" />
          </neon-stack>
          <editor v-model="sizesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Selects with colors and icons</h2>
        <neon-stack>
          <neon-stack>
            <neon-select v-model="selectBrand" :options="modelWithIcons" color="brand" placeholder="Select item(s)" />
            <neon-select v-model="selectInfo" :options="modelWithIcons" color="info" placeholder="Select item(s)" />
            <neon-select
              v-model="selectSuccess"
              :options="modelWithIcons"
              color="success"
              placeholder="Select item(s)"
            />
            <neon-select v-model="selectWarning" :options="modelWithIcons" color="warn" placeholder="Select item(s)" />
            <neon-select
              id="select1"
              v-model="selectError"
              :options="modelWithIcons"
              color="error"
              placeholder="Select item(s)"
            />
          </neon-stack>
          <editor v-model="colorsTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Select solid style</h2>
        <neon-stack>
          <neon-stack gap="m">
            <neon-select
              v-model="selectSolid"
              :options="modelWithIcons"
              button-style="solid"
              placeholder="Select item"
            />
            <neon-select
              v-model="selectSolidBrand"
              :options="modelWithIcons"
              button-style="solid"
              color="brand"
              placeholder="Select item"
            />
          </neon-stack>
          <editor v-model="solidTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Multiple selection</h2>
        <neon-stack>
          <neon-stack>
            <neon-select
              v-model="selectMulti"
              :multiple="true"
              :options="modelWithIcons"
              placeholder="Select item(s)"
            />
          </neon-stack>
          <editor v-model="multiSelectTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Grouped options</h2>
        <neon-stack>
          <neon-stack>
            <neon-select v-model="selectGrouped" :grouped-options="groupedModel" placeholder="Select item" />
            <neon-select
              v-model="selectGroupedMulti"
              :grouped-options="groupedModel"
              :multiple="true"
              placeholder="Select item(s)"
            />
          </neon-stack>
          <editor v-model="groupedTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Select.ts"></script>
