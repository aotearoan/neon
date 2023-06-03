<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonSelectableCard</strong> is a horizontal card that is selectable by clicking on it. It can be used
          in lists to easily allow users to select multiple items, providing richer content & a larger footprint for
          clicking on.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Default example</h2>
        <neon-stack>
          <neon-stack class="card-list">
            <neon-selectable-card v-for="(_item, index) in selected" :key="index" v-model="selected[index]">
              <neon-card-body>
                <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
              </neon-card-body>
            </neon-selectable-card>
          </neon-stack>
          <editor v-model="example" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Color example</h2>
        <neon-stack>
          <neon-selectable-card v-model="selectedColor" color="info">
            <neon-card-body>
              <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
            </neon-card-body>
          </neon-selectable-card>
          <editor v-model="exampleColor" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Size example</h2>
        <neon-stack>
          <neon-selectable-card v-model="selectedSize" size="m">
            <neon-card-body>
              <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
            </neon-card-body>
          </neon-selectable-card>
          <editor v-model="exampleSize" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Disabled example</h2>
        <neon-stack>
          <neon-selectable-card v-model="selectedDisabled" :disabled="true">
            <neon-card-body>
              <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
            </neon-card-body>
          </neon-selectable-card>
          <editor v-model="exampleDisabled" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SelectableCard.ts" />
