<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A toggle component for selecting one value from a range of options. This is equivalent to a radio button
          group. It can be styled as a <em>Toggle</em> or as <em>Radio</em> buttons.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle sizes</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-toggle v-model="selected1" :model="model" name="toggle-1" size="s" />
            <neon-toggle v-model="selected2" :model="model" name="toggle-2" size="m" />
            <neon-toggle v-model="selected3" :model="model" name="toggle-3" size="l" />
          </div>
          <editor v-model="toggleSizes" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle colors</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-toggle v-model="selected4" :model="model" name="toggle-4" />
            <neon-toggle v-model="selected5" :model="model" color="info" name="toggle-5" />
            <neon-toggle v-model="selected6" :model="model" color="success" name="toggle-6" />
          </div>
          <editor v-model="toggleColors" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Toggle with icons</h2>
        <neon-stack>
          <neon-toggle v-model="selected7" :model="iconModel" name="toggle-7" />
          <editor v-model="toggleIcons" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Radio buttons</h2>
        <neon-stack>
          <div class="neon-vertically-spaced">
            <neon-toggle
              v-model="selected8"
              :model="model"
              color="success"
              name="toggle-8"
              orientation="horizontal"
              toggle-style="radio-buttons"
            />
            <neon-toggle v-model="selected9" :model="model" name="toggle-9" toggle-style="radio-buttons" />
          </div>
          <editor v-model="radioButtons" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Toggle.ts"></script>
