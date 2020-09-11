<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A component for rendering SVG images. These images are generally, but not limited to, <em>icons</em>. This
          component can render any SVG of any size. Size is not restricted in the NeonIcon component but rather in the
          components using the icons. Generally, when talking about icons, this component is only used to build other
          components. But you may also find it useful for rendering SVG images, e.g. illustrations.
        </p>
        <p>
          There is an icon registry where strings containing SVGs can be registered with a name and that name can be
          used with the NeonIcon component to render the image. Use the classes <em>neon-svg-fill</em> and
          <em>neon-svg--stroke</em> in the SVG elements to automatically apply the functional colors.
        </p>
        <p>
          This provides the advantage of only registering the icons you actually need, dynamically switching colors in
          Typescript/CSS without using a large icon font and not having to duplicate icon images to support multiple
          color variations (including light and dark modes).
        </p>
        <neon-note color="warn">
          <span><strong>Important:</strong> Set the width and height of SVGs to 100% so they scale correctly.</span>
        </neon-note>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-header>
        <h2 class="neon-h3">Icon registration</h2>
      </neon-card-header>
      <neon-card-body>
        <p>
          Use the utility class <a href="/utils/NeonIconRegistry">NeonIconRegistry</a> to register new icons or
          overwrite the provided icons. For examples of usage (including adding the neon-svg--* classes) please see
          <a href="/utils/RegisterIcons">RegisterIcons</a>.
        </p>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-header>
        <h2 class="neon-h3">Provided Icons</h2>
      </neon-card-header>
      <neon-card-body>
        <p>
          The set of provided icons is the set of icons required for components or used in the showcase examples. This
          set is intentionally kept small so that it is easier to replace this set with custom icons. Plus the
          additional benefit is that only those icons which are necessary are included in the final application payload.
        </p>
      </neon-card-body>
      <neon-card-body class="icons-wrapper">
        <div v-for="icon in icons" :key="`icon-${icon}`" class="icon-container">
          <neon-icon :name="icon"></neon-icon>
          <label>{{ icon }}</label>
        </div>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Icon.ts"></script>
