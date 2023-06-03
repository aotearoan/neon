<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonInput</strong> component covers the basic input types: <strong>email</strong>,
          <strong>number</strong> <strong>tel</strong>, <strong>text</strong> & <strong>url</strong> as well as
          <strong>textarea</strong>. There are custom components defined for the other input types.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Input sizes</h2>
        <neon-stack>
          <neon-stack>
            <neon-input v-model="small" placeholder="Type here" size="s" type="text" />
            <neon-input v-model="medium" placeholder="Type here" size="m" type="text" />
            <neon-input v-model="large" placeholder="Type here" size="l" type="text" />
          </neon-stack>
          <editor v-model="inputSizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Input colors</h2>
        <neon-stack>
          <neon-stack>
            <neon-input v-model="lowContrast" color="low-contrast" placeholder="Type here" type="text" />
            <neon-input v-model="highContrast" color="high-contrast" placeholder="Type here" type="text" />
            <neon-input v-model="brand" color="brand" placeholder="Type here" type="text" />
            <neon-input v-model="primary" color="primary" placeholder="Type here" type="text" />
            <neon-input v-model="info" color="info" placeholder="Type here" type="text" />
            <neon-input v-model="disabled" isabled="disabled" placeholder="Type here" type="text" />
          </neon-stack>
          <editor v-model="inputColorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Input states</h2>
        <neon-stack>
          <neon-stack>
            <neon-input v-model="ready" placeholder="Type here" size="l" state="ready" type="text" />
            <neon-input v-model="loading" placeholder="Type here" size="l" state="loading" type="text" />
            <neon-input v-model="success" placeholder="Type here" size="l" state="success" type="text" />
            <neon-input v-model="error" placeholder="Type here" size="l" state="error" type="text" />
          </neon-stack>
          <editor v-model="inputStateExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Textarea examples</h2>
        <neon-stack>
          <neon-stack>
            <neon-input v-model="textArea" :maxlength="100" :rows="5" placeholder="Type here" type="text" />
            <neon-input
              v-model="textAreaDisabled"
              :maxlength="100"
              :rows="5"
              disabled="disabled"
              placeholder="Type here"
              type="text"
            />
          </neon-stack>
          <editor v-model="textareaExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Input.ts"></script>
