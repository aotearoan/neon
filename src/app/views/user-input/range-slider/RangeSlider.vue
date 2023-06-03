<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="slider-examples">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonRangeSlider</strong> is an input control for allowing users to select a discrete range of
          values. <strong>NeonRangeSlider</strong> supports the same color, formatting and display options available on
          <strong>NeonSlider</strong>.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Basic usage</h2>
        <neon-stack>
          <neon-stack gap="s">
            <label>Basic range slider</label>
            <neon-range-slider id="basicSliderId" v-model="basicSlider" />
          </neon-stack>
          <neon-stack gap="s">
            <label>With Min, max and step</label>
            <neon-range-slider v-model="minMaxSlider" :max="100" :min="-100" :step="10" />
          </neon-stack>
          <neon-stack gap="s">
            <label>Disabled</label>
            <neon-range-slider v-model="disabledSlider" :disabled="true" />
          </neon-stack>
          <editor v-model="coreExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Formatting options</h2>
        <neon-stack>
          <neon-stack gap="s">
            <label>Percentage</label>
            <neon-range-slider v-model="percentageSlider" :percentage="true" />
          </neon-stack>
          <neon-stack gap="s">
            <label>Decimal values</label>
            <neon-range-slider v-model="decimalSlider" :decimals="2" />
          </neon-stack>
          <neon-stack gap="s">
            <label>Formatting disabled (e.g. year)</label>
            <neon-range-slider v-model="noFormattingSlider" :disable-formatting="true" :max="2050" :min="2000" />
          </neon-stack>
          <neon-stack gap="s">
            <label>With template (e.g. currency)</label>
            <neon-range-slider
              v-model="templateSlider"
              :decimals="2"
              :max="200.0"
              :step="0.5"
              value-template="${value}"
            />
          </neon-stack>
          <editor v-model="formattingExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Range slider colors</h2>
        <neon-stack>
          <neon-stack>
            <neon-range-slider v-model="primarySlider" color="primary" />
            <neon-range-slider v-model="brandSlider" color="brand" />
            <neon-range-slider v-model="warnSlider" color="warn" />
          </neon-stack>
          <editor v-model="colorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Display options</h2>
        <neon-stack>
          <neon-stack gap="s">
            <label>Output hidden</label>
            <neon-range-slider v-model="outputSlider" :output="false" />
          </neon-stack>
          <neon-stack gap="s">
            <label>Legend hidden</label>
            <neon-range-slider v-model="legendSlider" :legend="false" />
          </neon-stack>
          <neon-stack gap="s">
            <label>Tooltip hidden</label>
            <neon-range-slider v-model="tooltipSlider" :tooltip="false" />
          </neon-stack>
          <editor v-model="displayExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./RangeSlider.ts"></script>
