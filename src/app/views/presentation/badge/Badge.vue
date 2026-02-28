<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            Badges are used to display two initials, an icon or an image. It can be useful as a user's avatar on the
            button of dropdown menus and next to user comments but there are a multitude of uses for badges on a site.
          </p>
          <p>Badges are available in a range of sizes, shapes and colors.</p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Badge sizes</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge label="SM" size="s" />
            <neon-badge label="MD" size="m" />
            <neon-badge label="LG" size="l" />
            <neon-badge label="XL" size="xl" />
            <neon-badge label="XX" size="xxl" />
          </neon-inline>
          <editor v-model="sizesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Badge shapes</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge label="SQ" />
            <neon-badge :circular="true" label="CI" />
          </neon-inline>
          <editor v-model="shapesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Badge styles</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge label="LB" />
            <neon-badge icon="user" />
            <neon-badge :image="baseUrl + 'images/doge.jpg'" />
            <neon-badge :circular="true" jazzicon-id="Test user" />
          </neon-inline>
          <editor v-model="stylesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Editable badge</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge
              :circular="true"
              :editable="true"
              :image="editedImage"
              color="high-contrast"
              size="xxl"
              @change-image="updateImage"
            />
          </neon-inline>
          <editor v-model="editableTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Badge colors</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge color="brand" label="LB" />
            <neon-badge color="success" icon="user" />
          </neon-inline>
          <editor v-model="colorsTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Gradient badges</h2>
        <neon-stack>
          <neon-inline>
            <neon-badge alternate-color="warn" color="brand" icon="user" />
            <neon-badge alternate-color="brand" color="info" label="LB" />
          </neon-inline>
          <editor v-model="gradientsTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Badge.ts"></script>
