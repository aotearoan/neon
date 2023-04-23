<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonInputIndicator</strong> component can be used to display non selectable information with input
          fields. This may be text or an icon denoting what the input is for, i.e. acting as a label. Or it may indicate
          the accepted units e.g. a unit of measure, currency code, % or $.
        </p>
        <p>
          Use <strong>NeonInputIndicator</strong> in combination with <strong>NeonFieldGroup</strong> to combine inputs,
          buttons and input indicators in any order.
        </p>
        <p>An input indicator is an HTML <em>label</em> so attributes like, e.g. <em>for</em> are accepted.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Input Indicator Examples</h2>
        <div class="neon-vertically-spaced">
          <neon-field-group>
            <neon-input v-model="field1" placeholder="Rate" size="s" type="text" />
            <neon-input-indicator label="%" size="s" />
          </neon-field-group>
          <neon-field-group>
            <neon-input-indicator aria-label="Username" for="userField" icon="user" />
            <neon-input id="userField" v-model="field2" placeholder="Username" type="text" />
          </neon-field-group>
          <neon-field-group>
            <neon-input-indicator icon="mail" size="l" />
            <neon-input v-model="field3" placeholder="Username" size="l" type="text" />
            <neon-input-indicator label="@aol.com" size="l" />
          </neon-field-group>
        </div>
        <editor v-model="inputIndicatorExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./InputIndicator.ts"></script>
