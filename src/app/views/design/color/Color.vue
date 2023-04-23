<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1 class="neon-h3">Colors</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="introduction" />
        <h2 class="neon-h4">Introduction</h2>
        <p>
          Neon uses the concept of <strong>Functional colors</strong> where colors have semantic meaning, e.g. a brand
          color or a warning color.
        </p>
        <p>
          Throughout Neon there are many components supporting colors. When this is the case, the component supports
          each of the functional colors which allows great flexibility for designers and developers to quickly create
          the look they want without any hassle.
        </p>
        <p>
          Each functional color palette is comprised of 10 color steps - l1-l5 are the light colors used for the dark
          mode & d1-d5 are the steps used for the light mode. It is also worth noting that the colors are defined as
          both RGB variables (e.g. '255, 128, 42') and the actual color variable. The RGB variables are necessary where
          opacity is applied to colors in order to work with CSS variables.
        </p>
        <p>
          Colors can be overridden using CSS variables, you will find all CSS base color variables in the
          src/sass/colors.scss file, e.g. to override the <em>brand</em> palette:
        </p>
        <editor v-model="colorPalette" language="scss" />
      </neon-card-body>
      <neon-card-body class="color-palettes">
        <neon-anchor id="brand-palettes" />
        <h2 class="neon-h4">Brand palettes</h2>
        <h3 class="neon-h5">brand</h3>
        <p>The palette for the main brand color.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`brandl${6 - i}`"
              :class="`neon-brand-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`brandd${i}`"
              :class="`neon-brand-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">primary</h3>
        <p>The palette for the primary color used in an application.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`primaryl${6 - i}`"
              :class="`neon-primary-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`primaryd${i}`"
              :class="`neon-primary-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
      </neon-card-body>
      <neon-card-body class="color-palettes">
        <neon-anchor id="functional-palettes" />
        <h2 class="neon-h4">Functional palettes</h2>
        <h3 class="neon-h5">info</h3>
        <p>The color palette used to convey information in components (e.g. buttons, alerts, notes).</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`infol${6 - i}`"
              :class="`neon-info-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`infod${i}`"
              :class="`neon-info-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">success</h3>
        <p>The color palette used to indicate successful or positive actions.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`successl${6 - i}`"
              :class="`neon-success-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`successd${i}`"
              :class="`neon-success-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">warn</h3>
        <p>The color palette used to indicate warnings.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`warnl${6 - i}`"
              :class="`neon-warn-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`warnd${i}`"
              :class="`neon-warn-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">error</h3>
        <p>The color palette used to indicate dangerous or failed actions.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`errorl${6 - i}`"
              :class="`neon-error-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`errord${i}`"
              :class="`neon-error-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
      </neon-card-body>
      <neon-card-body class="color-palettes">
        <neon-anchor id="neutral-palettes" />
        <h2 class="neon-h4">Neutral palettes</h2>
        <h3 class="neon-h5">neutral</h3>
        <p>Used the most often, this is the default grayscale palette used across all components.</p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`neutrall${6 - i}`"
              :class="`neon-neutral-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`neutrald${i}`"
              :class="`neon-neutral-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">high-contrast</h3>
        <p>
          A higher contrast grayscale palette which can be used for greater accessibility and higher impact without
          adding color.
        </p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`high-contrastl${6 - i}`"
              :class="`neon-high-contrast-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`high-contrastd${i}`"
              :class="`neon-high-contrast-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <h3 class="neon-h5">low-contrast</h3>
        <p>
          A lower contrast grayscale palette which can be used for more subtle components which shouldn't draw the
          user's attention.
        </p>
        <div class="color-list">
          <div class="color-list-section">
            <div
              v-for="i in 5"
              :key="`l${i}`"
              :ref="`low-contrastl${6 - i}`"
              :class="`neon-low-contrast-bg-color-l${6 - i}`"
              class="color-item neon-dark-text"
            >
              {{ `l${6 - i}` }}
            </div>
            <div
              v-for="i in 5"
              :key="`d${i}`"
              :ref="`low-contrastd${i}`"
              :class="`neon-low-contrast-bg-color-d${i}`"
              class="color-item neon-light-text"
            >
              {{ `d${i}` }}
            </div>
          </div>
        </div>
        <neon-note color="warn"
          ><span
            ><strong>Note: </strong> the <em>low-contrast</em> palette doesn't provide adequate contrast ratio support
            for accessibility at all color steps. Use with care.</span
          ></neon-note
        >
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="color-classes" />
        <h2 class="neon-h4">Color classes</h2>
        <p>
          Neon provides convenience classes for text colors as well as the full complement of background colors for each
          palette
        </p>
        <h3 class="neon-h5">Text colors</h3>
        <div>
          <div class="neon-color-text">This is the default text color</div>
          <div class="color-example-inverse-bg neon-color-inverse">This is the inverse text color</div>
          <div class="neon-color-text-brand">This is the brand text color</div>
          <div class="neon-color-text-primary">This is the primary text color</div>
          <div class="neon-color-text-info">This is the info text color</div>
          <div class="neon-color-text-success">This is the success text color</div>
          <div class="neon-color-text-warn">This is the warn text color</div>
          <div class="neon-color-text-error">This is the error text color</div>
          <div class="neon-color-text-neutral">This is the neutral text color</div>
          <div class="neon-color-text-high-contrast">This is the high-contrast text color</div>
          <div class="neon-color-text-low-contrast">This is the low-contrast text color</div>
        </div>
        <editor v-model="example" />
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Color.ts"></script>
