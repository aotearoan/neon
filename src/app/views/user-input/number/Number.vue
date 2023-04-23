<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonNumber</strong> component is the equivalent of an
          <strong>&lt;input type="number" /&gt;</strong>
          with -/+ spin buttons. In addition, it supports formatting as a percentage or with a provided custom template
          and also pasting of values in the user's locale, e.g. 6,543.12.
        </p>
        <p><strong>NeonNumber</strong> supports all the properties found on an HTML &lt;input&gt;.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Number sizes</h2>
        <div class="neon-vertically-spaced">
          <neon-number v-model="smallNumber" placeholder="Value" size="s" />
          <neon-number v-model="mediumNumber" placeholder="Value" size="m" />
          <neon-number v-model="largeNumber" placeholder="Value" size="l" />
        </div>
        <editor v-model="numberSizeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Various number options</h2>
        <div class="neon-vertically-spaced">
          <label>spinButtons = true</label>
          <neon-number v-model="noButtonsNumber" :spin-buttons="true" placeholder="Value" />
          <label>Editable = false</label>
          <neon-number v-model="notEditableNumber" :editable="false" placeholder="Value" />
          <neon-number v-model="notEditableNumber" :editable="false" :spin-buttons="true" placeholder="Value" />
          <label>With min, max, step</label>
          <neon-number v-model="minMaxNumber" :max="90" :min="20" :spin-buttons="true" :step="10" placeholder="Value" />
          <label>Decimal min, max, step</label>
          <neon-number
            v-model="decimalMinMaxNumber"
            :decimals="2"
            :max="10.0"
            :min="-10.0"
            :spin-buttons="true"
            :step="0.05"
            placeholder="Value"
          />
          <label>Percentage</label>
          <neon-number v-model="percentageNumber" :percentage="true" placeholder="Value" />
          <label>Custom template</label>
          <neon-number
            v-model="customNumber"
            :decimals="2"
            :step="0.05"
            placeholder="Value"
            value-template="${value}"
          />
          <label>Disabled</label>
          <neon-number v-model="disabledNumber" disabled="disabled" placeholder="Value" />
          <neon-number v-model="disabledNumber" :spin-buttons="true" disabled="disabled" placeholder="Value" />
        </div>
        <editor v-model="numberValueExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Number colors</h2>
        <div class="neon-vertically-spaced">
          <neon-number v-model="hcNumber" color="high-contrast" placeholder="Value" />
          <neon-number v-model="primaryNumber" color="primary" placeholder="Value" />
          <neon-number v-model="brandNumber" :spin-buttons="true" color="brand" placeholder="Value" />
          <neon-number v-model="infoNumber" :editable="false" :spin-buttons="true" color="info" placeholder="Value" />
        </div>
        <editor v-model="numberColorExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Number.ts"></script>
