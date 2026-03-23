<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            NeonAvatar is a component for displaying user avatars that can show either an image or automatically
            generated initials. When displaying initials, it generates a background color based on the user's name.
          </p>
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Basic Usage</h2>
        <neon-stack>
          <neon-inline gap="m">
            <neon-avatar name="John Doe" />
            <neon-avatar :image-url="baseUrl + 'images/doge.jpg'" />
          </neon-inline>
          <editor v-model="baseExample" />
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Avatar Sizes</h2>
        <neon-stack>
          <neon-inline gap="m">
            <neon-avatar :size="NeonBadgeSize.Small" name="John Doe" />
            <neon-avatar :size="NeonBadgeSize.Medium" name="John Doe" />
            <neon-avatar :size="NeonBadgeSize.Large" name="John Doe" />
            <neon-avatar :size="NeonBadgeSize.ExtraLarge" name="John Doe" />
            <neon-avatar :size="NeonBadgeSize.ExtraExtraLarge" name="John Doe" />
            <neon-avatar :size="NeonBadgeSize.ExtraExtraExtraLarge" name="John Doe" />
          </neon-inline>
          <editor v-model="sizesExample" />
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Avatar Shapes</h2>
        <neon-stack>
          <neon-inline gap="m">
            <neon-avatar name="John Doe" />
            <neon-avatar :circular="false" name="John Doe" />
          </neon-inline>
          <editor v-model="shapesExample" />
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Profile Initials</h2>
        <neon-stack>
          <neon-inline gap="m">
            <neon-avatar name="John Doe" />
            <neon-avatar name="John" />
            <neon-avatar name="Johann Sebastian Bach" />
          </neon-inline>
          <editor v-model="initialsExample" />
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Profile Color</h2>
        <neon-stack>
          <neon-inline gap="m">
            <div class="color-example">
              <neon-avatar name="Alice Smith" />
              <span class="color-example__name">Alice Smith</span>
            </div>
            <div class="color-example">
              <neon-avatar name="Bob Johnson" />
              <span class="color-example__name">Bob Johnson</span>
            </div>
            <div class="color-example">
              <neon-avatar name="Carol White" />
              <span class="color-example__name">Carol White</span>
            </div>
          </neon-inline>
        </neon-stack>
      </neon-card-body>

      <neon-card-body>
        <h2 class="neon-h3">Custom Color</h2>
        <neon-stack>
          <neon-inline gap="m">
            <neon-avatar :color="NeonFunctionalColor.Brand" name="John Doe" />
            <neon-avatar :color="NeonFunctionalColor.Accent" name="John Doe" />
            <neon-avatar :color="NeonFunctionalColor.Primary" name="John Doe" />
          </neon-inline>
          <editor v-model="colorExample" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Avatar.ts"></script>

<style lang="scss" scoped>
.color-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--neon-base-space);

  &__name {
    font-size: 14rem;
  }
}
</style>
