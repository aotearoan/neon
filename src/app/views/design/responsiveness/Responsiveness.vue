<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Responsiveness</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="breakpoints" />
        <h2 class="neon-h4">Breakpoints</h2>
        <p>
          Neon comes with a predefined set of breakpoints both in SASS and Typescript. Breakpoints are defined in both
          directions e.g. <em>tablet</em> and <em>larger-than-tablet</em>.
        </p>
        <p>Here are the defined breakpoints:</p>
        <ul>
          <li>mobile (max-width: 414px)</li>
          <li>larger-than-mobile (min-width: 415px)</li>
          <li>mobile-large (max-width: 599px)</li>
          <li>larger-than-mobile-large (min-width: 600px)</li>
          <li>tablet (max-width: 1024px)</li>
          <li>larger-than-tablet (min-width: 1025px)</li>
          <li>desktop (max-width: 1439px)</li>
          <li>desktop-large (min-width: 1440px)</li>
        </ul>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="sass-mixins" />
        <h2 class="neon-h4">SASS Mixins</h2>
        <p>A SASS mixin <strong>responsive(breakpoint)</strong> is provided for convenience, e.g.</p>
        <editor v-model="sassExample" language="scss" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="typescript" />
        <h2 class="neon-h4">Typescript</h2>
        <p>
          <neon-link href="/utils/NeonResponsiveUtils">NeonResponsiveUtils</neon-link>
          also defines the same breakpoints for use in Typescript/Javascript.
        </p>
        <p>
          Using SASS breakpoints should be preferred, however sometimes this is not enough. Use
          NeonResponsiveUtils.breakpoints in combination with a window resize listener to manage changes in the
          responsive breakpoints, e.g.
        </p>
        <editor v-model="typescriptExample" language="typescript" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="page-content" />
        <h2 class="neon-h4">Page content</h2>
        <p>
          Neon's approach to page content layout is to use CSS Grid via the
          <neon-link href="/layout/grid">NeonGrid</neon-link>
          component.
          <neon-link href="/layout/grid">NeonGrid</neon-link>
          is a CSS Grid based container designed to help simplify page application layout and responsiveness by
          abstracting CSS Grid and allowing applications to define this programmatically in Typescript.
        </p>
        <p>
          This provides developers with the benefits of using CSS Grid without dealing with the steep learning curve and
          complexities of using it directly.
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Responsiveness.ts"></script>
