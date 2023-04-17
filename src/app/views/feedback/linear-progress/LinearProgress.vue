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
        <div class="neon--vertical">
          <h4 class="neon-h5">Percentage</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :value="progressPercentage" />
            <neon-button label="Complete" size="s" @click="progressPercentage = 1.0" />
          </div>
          <h4 class="neon-h5">Counter</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressCounter" />
            <neon-button label="Complete" size="s" @click="progressCounter = 55" />
          </div>
          <h4 class="neon-h5">No output</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :output="false" :total="55" :value="progressNoOutput" />
            <neon-button label="Complete" size="s" @click="progressNoOutput = 55" />
          </div>
          <h4 class="neon-h5">With label</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressLabel" label="Label goes here" />
          </div>
          <h4 class="neon-h5">With completion icon</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressCompletedIcon" color="success" completed-icon="check" />
          </div>
          <h4 class="neon-h5">With completed icon</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressLabel" label="Label goes here" />
          </div>
        </div>
        <editor v-model="styleExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Linear progress sizes</h2>
        <div class="neon--vertical">
          <h4 class="neon-h5">Small</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :value="progressPercentage" size="s" />
          </div>
          <h4 class="neon-h5">Medium (default)</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressCounter" />
          </div>
          <h4 class="neon-h5">Large</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :output="false" :total="55" :value="progressNoOutput" size="l" />
          </div>
        </div>
        <editor v-model="sizeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Linear progress colors</h2>
        <div class="neon--vertical">
          <h4 class="neon-h5">Default (primary)</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :value="progressPercentage" />
          </div>
          <h4 class="neon-h5">Color override</h4>
          <div class="neon--horizontal">
            <neon-linear-progress :total="55" :value="progressCounter" color="info" />
          </div>
          <h4 class="neon-h5">Gradient</h4>
          <div class="neon--horizontal">
            <neon-linear-progress
              :output="false"
              :total="55"
              :value="progressNoOutput"
              alternate-color="success"
              color="success"
            />
          </div>
        </div>
        <editor v-model="colorExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./LinearProgress.ts"></script>
