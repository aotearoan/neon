<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonField</strong> is an input wrapper which provides a<em>label</em> supporting an optional indicator
          as well as messages below the field
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Examples</h2>
        <neon-field label="Default label" label-for="input1">
          <neon-input id="input1" v-model="inputValue" />
        </neon-field>
        <neon-field :optional="true" label="Optional label" label-for="input2">
          <neon-input id="input2" v-model="inputValue" />
        </neon-field>
        <neon-field :disabled="true" label="Disabled label" label-for="input3">
          <neon-input id="input3" v-model="inputValue" :disabled="true" />
        </neon-field>
        <editor v-model="example" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Message Examples</h2>
        <neon-field label="Default label" label-for="input1" message="Pig doner tri-tip tongue pork">
          <neon-input id="input1" v-model="inputValue" />
        </neon-field>
        <neon-field
          :optional="true"
          label="Optional label"
          label-for="input2"
          message="Pig doner tri-tip tongue pork"
          message-color="error"
        >
          <neon-input id="input2" v-model="inputValue" />
        </neon-field>
        <editor v-model="messagesExample" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Field.ts" />
