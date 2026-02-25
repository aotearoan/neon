<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A component for displaying linear progress. The progress can be displayed as a percentage by default or as a
          counter (x / y).
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Linear progress styles</h2>
        <neon-stack>
          <neon-stack>
            <h4 class="neon-h5">Percentage</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressPercentage" />
              <neon-button color="low-contrast" label="Complete" size="s" @click="progressPercentage = 1.0" />
            </neon-inline>
            <h4 class="neon-h5">Counter</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressCounter" :total="55" />
              <neon-button color="low-contrast" label="Complete" size="s" @click="progressCounter = 55" />
            </neon-inline>
            <h4 class="neon-h5">No output</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressNoOutput" :output="false" :total="55" />
              <neon-button color="low-contrast" label="Complete" size="s" @click="progressNoOutput = 55" />
            </neon-inline>
            <h4 class="neon-h5">With label</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressLabel" :total="55" label="Label goes here" />
            </neon-inline>
            <h4 class="neon-h5">With completion icon</h4>
            <neon-inline>
              <neon-linear-progress
                :model-value="progressCompletedIcon"
                :total="55"
                color="success"
                completed-icon="check"
              />
            </neon-inline>
            <h4 class="neon-h5">With completed icon</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressLabel" :total="55" label="Label goes here" />
            </neon-inline>
          </neon-stack>
          <editor v-model="styleExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Linear progress sizes</h2>
        <neon-stack>
          <neon-stack>
            <h4 class="neon-h5">Small</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressPercentage" size="s" />
            </neon-inline>
            <h4 class="neon-h5">Medium (default)</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressCounter" :total="55" />
            </neon-inline>
            <h4 class="neon-h5">Large</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressNoOutput" :output="false" :total="55" size="l" />
            </neon-inline>
          </neon-stack>
          <editor v-model="sizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Linear progress colors</h2>
        <neon-stack>
          <neon-stack>
            <h4 class="neon-h5">Default (primary)</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressPercentage" />
            </neon-inline>
            <h4 class="neon-h5">Color override</h4>
            <neon-inline>
              <neon-linear-progress :model-value="progressCounter" :total="55" color="info" />
            </neon-inline>
            <h4 class="neon-h5">Gradient</h4>
            <neon-inline>
              <neon-linear-progress
                :model-value="progressNoOutput"
                :output="false"
                :total="55"
                alternate-color="success"
                color="success"
              />
            </neon-inline>
          </neon-stack>
          <editor v-model="colorExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./LinearProgress.ts"></script>
