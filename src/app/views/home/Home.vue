<template>
  <div class="homepage">
    <div class="homepage__content">
      <neon-icon name="neon-logo" />
      <h1>What is Neon?</h1>
      <p>Neon is a super lightweight library of Vue 3 components for building performant Vue applications.</p>
      <neon-button
        button-style="solid"
        color="primary"
        href="/for-developers/getting-started"
        label="Get started"
        size="xl"
      />
      <h1>Why Neon?</h1>
      <p>
        Why yet another design system/component library?<br />There are several issues with other component libraries
        which Neon aims to solve.
      </p>
      <div class="highlights">
        <div class="highlight">
          <neon-icon class="highlight-icon" name="html-logo" />
          <h2>Semantic HTML components</h2>
          <p>
            One thing a lot of component libraries do poorly is opt for non-standard div based components rather than
            use semantic HTML. Neon aims to use semantic HTML everywhere this is possible. This leads to fewer issues,
            better performance, easier debugging and improved accessibility.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/for-developers/getting-started"
            label="Start using Components"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon class="highlight-icon" name="feather" />
          <h2>Lightweight</h2>
          <p>
            Neon has just 2 dependencies - Vue 3 & vue-router. This makes applications developed with Neon fast & easy
            to maintain. ES6 modules are used to ensure tree shaking and SASS imports can be reduced to only the code
            used, further reducing the package size.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/for-developers/getting-started"
            label="Get started now"
            size="l"
          />
        </div>
      </div>
      <div class="highlights">
        <div class="highlight">
          <neon-icon class="highlight-icon" name="hammer" />
          <h2>Customization</h2>
          <p>
            Neon uses CSS variables extensively to allow for customisation of component styles. It also uses
            <neon-link href="http://getbem.com/" target="_blank">BEM</neon-link>
            for CSS class definitions which makes for easy to read production source with better support for recording
            E2E tests. Further to this, targeting Neon's CSS classes is possible as Neon uses
            <neon-link href="https://semver.org/" target="_blank">SEMVER</neon-link>
            , so if a class changes you'll know about it.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/for-developers/getting-started#sass"
            label="Find out about Customization"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon class="highlight-icon" name="contrast" />
          <h2>Light and dark modes</h2>
          <p>
            With growing support for light and dark modes in browsers design systems also need to provide this option.
            Neon provides light and dark modes with support for overrides using CSS variables.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/design/theming#dark-mode"
            label="Find out more about dark mode"
            size="l"
          />
        </div>
      </div>
      <div class="highlights">
        <div class="highlight">
          <neon-icon class="highlight-icon" name="images" />
          <h2>Icon libraries</h2>
          <p>
            Icon libraries are tricky. Either you need to include a heavyweight icon font which doesnt allow you to
            select only the icons you need or you will have to write some code to integrate a font library in javascript
            which is not very flexible if you need to add a custom icon. Neon's approach is to provide an icon registry
            and a component for rendering icons. Add your own SVGs as icons and they will be available in all the
            functional colors in both light and dark modes.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/presentation/icon#description"
            label="Learn more about Icons"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon class="highlight-icon" name="desktop" />
          <h2>Responsive layout</h2>
          <p>
            The 12 column grid (and other variants) are outdated and inflexible. How many times have you had to add
            classes like <em>class="col-4"</em> to your HTML? That's not very semantic at different breakpoints. CSS
            Grid is here and great at providing flexible layouts but it can be difficult to understand. Neon abstracts
            this by using a single grid for layout of the main content letting you simply define the grid in code at
            each responsive breakpoint.
          </p>
          <neon-button
            button-style="outline"
            color="brand"
            href="/layout/grid#description"
            label="Show me how to use Grid"
            size="l"
          />
        </div>
      </div>
      <span class="powered-by neon-color-neutral">
        This site was developed using
        <neon-link href="https://vuejs.org/" target="_blank">Vue</neon-link> and Neon o‿o
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
