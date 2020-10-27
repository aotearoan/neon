<template>
  <div class="homepage">
    <div class="homepage__content">
      <h1>What is Neon?</h1>
      <p>
        Neon is an incredibly lightweight library of Vue components and SASS styles for helping you build performant Vue
        applications. Neon supports multiple themes as well light and dark modes within each theme. Use Neon out of the
        box or modify it to suit your needs.
      </p>
      <neon-button
        href="/for-developers/getting-started"
        color="brand"
        size="xl"
        button-style="solid"
        label="Get started"
      />
      <h1>Why Neon?</h1>
      <p>
        Why yet another design system/component library?<br />There are several issues with other component libraries
        which Neon aims to solve.
      </p>
      <div class="highlights">
        <div class="highlight">
          <neon-icon name="color-filter" class="highlight-icon" />
          <h2>Color palette generation</h2>
          <p>
            Most design systems either provide fixed color palettes or require developers to generate their own. This
            can be time consuming and difficult to get right. In Neon, these options are still available but there is
            also the ability to generate WCAG contrast compliant color palettes from single colors.
          </p>
          <neon-button
            href="/design/color"
            color="brand"
            button-style="outline"
            label="Learn more about Colors"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon name="html-logo" class="highlight-icon" />
          <h2>Semantic HTML components</h2>
          <p>
            Another thing a lot of component libraries do poorly is use nested divs instead of semantic HTML. Neon aims
            to use semantic HTML, where possible, which means better performance, easier debugging and improved
            accessibility.
          </p>
          <neon-button
            href="/for-developers/getting-started"
            color="brand"
            button-style="outline"
            label="Start using Components"
            size="l"
          />
        </div>
      </div>
      <div class="highlights">
        <div class="highlight">
          <neon-icon name="palette" class="highlight-icon" />
          <h2>Multiple themes</h2>
          <p>
            Most design systems provide a single theme which is a concept from native mobile applications which is great
            for providing consistency across applications on devices. But this idea is quite boring and doesn't help
            differentiate applications from one another on the web. Neon provides multiple themes to suit a wider
            variety of tastes and styles.
          </p>
          <neon-button href="/design/theming" color="brand" button-style="outline" label="More about Themes" size="l" />
        </div>
        <div class="highlight">
          <neon-icon name="contrast" class="highlight-icon" />
          <h2>Light and dark modes</h2>
          <p>
            With growing support for light and dark modes in browsers design systems also need to provide this option.
            Neon provides light and dark modes for all themes.
          </p>
          <neon-button
            href="/design/theming#dark-mode"
            color="brand"
            button-style="outline"
            label="Find out more about dark mode"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon name="hammer" class="highlight-icon" />
          <h2>Customization</h2>
          <p>
            Not quite happy with the themes provided?<br />Then customize it! Current Javascript frameworks encapsulate
            CSS making it difficult to override anything. Neon takes a different approach, where SASS styles are open to
            be overridden. Neon uses <neon-link href="http://getbem.com/">BEM</neon-link> and
            <neon-link href="https://semver.org/">SEMVER</neon-link> so if a class changes you'll know about it.
          </p>
          <neon-button
            href="/for-developers/getting-started#sass"
            color="brand"
            button-style="outline"
            label="Find out about Customization"
            size="l"
          />
        </div>
      </div>
      <div class="highlights">
        <div class="highlight">
          <neon-icon name="images" class="highlight-icon" />
          <h2>Icon libraries</h2>
          <p>
            Icon libraries are tricky. Either you need to include a heavyweight icon font which doesnt allow you to
            select only the icons you need or you will have to write some code to integrate a font library in javascript
            which is not very flexible if you need to add a custom icon. Neon's approach is to provide an icon registry
            and a component for rendering icons. Add your own SVGs as icons and they will be available in all of the
            functional colors in both light and dark themes.
          </p>
          <neon-button
            href="/presentation/icon"
            color="brand"
            button-style="outline"
            label="Learn more about Icons"
            size="l"
          />
        </div>
        <div class="highlight">
          <neon-icon name="desktop" class="highlight-icon" />
          <h2>Responsive layout</h2>
          <p>
            The 12 column grid (and other variants) are outdated and inflexible. How many times have you had to add
            classes like <em>class="col-4"</em> to your HTML? That's not very semantic at different breakpoints. CSS
            Grid is here and great at providing flexible layouts but it can be difficult to understand. Neon abstracts
            this by using a single grid for layout of the main content letting you define the grid in code at each
            responsive breakpoint.
          </p>
          <neon-button
            href="/layout/grid"
            color="brand"
            button-style="outline"
            label="Show me how to use Grid"
            size="l"
          />
        </div>
      </div>
      <span class="powered-by neon-color-text-neutral">
        No {{ developers }} developers were harmed making Neon.<br />This site was developed using
        <neon-link href="https://vuejs.org/">VueJS</neon-link> and Neon o‿o
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
