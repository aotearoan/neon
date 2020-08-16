<template>
  <neon-card>
    <neon-card-header>
      <h1>Colors</h1>
    </neon-card-header>
    <neon-card-body>
      <h2>Introduction</h2>
      <p>
        Neon uses the concept of <strong>Functional colors</strong> where colors are not just colors but they have some
        semantic meaning. E.g. a brand color or a warning color. Each Functional color palette is generated from a
        reference color. From this the light and dark color steps are generated (l1-l5 & d1-d5).
      </p>
      <ul>
        <li><strong>brand - </strong>the palette for the main brand color.</li>
        <li><strong>primary - </strong>the palette for the primary color used in an application.</li>
        <li><strong>neutral - </strong>the grayscale palette used across all components.</li>
        <li>
          <strong>high-contrast - </strong>a higher contrast grayscale palette which can be used for higher impact
          components without adding color.
        </li>
        <li>
          <strong>low-contrast - </strong>a lower contrast grayscale palette which can be used for more subtle
          components which don't draw too much attention.
        </li>
        <li>
          <strong>info - </strong>the color palette used to convey information in components (e.g. buttons, alerts,
          notes)
        </li>
        <li><strong>success - </strong>the color palette used to indicate successful or positive actions</li>
        <li><strong>warn - </strong>the color palette used to indicate warnings</li>
        <li><strong>error - </strong>the color palette used to indicate dangerous or failed actions</li>
      </ul>
      <p>
        Another important feature of the palette generator is ensuring accessible contrast ratios of the colors when
        used in combination with white or black text in light and dark modes.
      </p>
      <p>
        It is possible to override the reference colors that any palette is generated from by overriding the color
        variables in the theme's variable file. E.g. to override the primary color set the variable
        <strong>$color-primary</strong> in your SASS overrides file.
      </p>
      <p>
        Alternatively, if you would like to change an entire palette you can do so by overriding the palette map, e.g.
        to override the info palette in your overrides SASS file set:
      </p>
      <app-pre language="scss">{{
        `
$info-palette: (\n
          l5: #f6e9ff,\n
          l4: #ebd4ff,\n
          l3: #ddbcfe,\n
          l2: #cba1fa,\n
          l1: #b683f3,\n
          d1: #7f50ba,\n
          d2: #644190,\n
          d3: #4d346b,\n
          d4: #39294c,\n
          d5: #292033,\n
        );\n
`
      }}</app-pre>
    </neon-card-body>
    <neon-card-body>
      <h2>Color palettes</h2>
      <h3>Neutral colors</h3>
      <div class="colors neutral-colors">
        <div v-for="color in neutralColors" :key="color" class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              class="color-item neon-dark-text"
              :ref="`${color}l${6 - i}`"
              :class="`neon-${color}-bg-color-l${6 - i}`"
            >
              {{ `${color}: l${6 - i}` }}
            </div>
          </div>
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`d${i}`"
              class="color-item neon-light-text"
              :ref="`${color}d${i}`"
              :class="`neon-${color}-bg-color-d${i}`"
            >
              {{ `${color}: d${i}` }}
            </div>
          </div>
        </div>
      </div>
      <h3>Brand color palettes</h3>
      <div class="colors">
        <div v-for="color in brandColors" :key="color" class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              class="color-item neon-dark-text"
              :ref="`${color}l${6 - i}`"
              :class="`neon-${color}-bg-color-l${6 - i}`"
            >
              {{ `${color}: l${6 - i}` }}
            </div>
          </div>
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`d${i}`"
              class="color-item neon-light-text"
              :ref="`${color}d${i}`"
              :class="`neon-${color}-bg-color-d${i}`"
            >
              {{ `${color}: d${i}` }}
            </div>
          </div>
        </div>
      </div>
      <h3>Functional color palettes</h3>
      <div class="colors">
        <div v-for="color in functionalColors" :key="color" class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              class="color-item neon-dark-text"
              :ref="`${color}l${6 - i}`"
              :class="`neon-${color}-bg-color-l${6 - i}`"
            >
              {{ `${color}: l${6 - i}` }}
            </div>
          </div>
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`d${i}`"
              class="color-item neon-light-text"
              :ref="`${color}d${i}`"
              :class="`neon-${color}-bg-color-d${i}`"
            >
              {{ `${color}: d${i}` }}
            </div>
          </div>
        </div>
      </div>
    </neon-card-body>
    <neon-card-body>
      <h2>Text colors</h2>
      <div class="neon-color-text-low-contrast">This is the low contrast color</div>
      <div class="neon-color-text-neutral">This is the neutral color</div>
      <div class="neon-color-text-high-contrast">This is the high-contrast color</div>
      <div class="neon-color-text-brand">This is the brand color</div>
      <div class="neon-color-text-primary">This is the primary color</div>
      <div class="neon-color-text-info">This is the info color</div>
      <div class="neon-color-text-success">This is the success color</div>
      <div class="neon-color-text-warn">This is the warn color</div>
      <div class="neon-color-text-error">This is the error color</div>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Color.ts"></script>
