<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>What is Neon?</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          Neon is a library of Vue components and SASS styles for helping you build web applications fast with a
          consistent design. Neon supports multiple themes as well as light and dark modes within each theme. Neon can
          be used, as is, out of the box or you may choose to modify the styling to suit your projects. For more
          information, see
          <neon-link href="/for-developers/getting-started">Getting Started</neon-link>.
        </p>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-header>
        <h1>Why Neon?</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          Why yet another design system/component library? There are several issues with other component libraries which
          Neon aims to solve, here are the highlights:
        </p>
        <ul>
          <li>
            <strong>Automatic color palette generation - </strong>most design systems either provide fixed color
            palettes or require developers to generate their own. This can be time consuming and difficult to get right.
            In Neon, these options are still available but there is also the ability to generate WCAG contrast compliant
            color palettes from single colors. Neon has the concept of <em>Functional Colors</em> where there are 8
            palettes:
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
                <strong>info - </strong>the color palette used to convey information in components (e.g. buttons,
                alerts, notes)
              </li>
              <li><strong>success - </strong>the color palette used to indicate successful or positive actions</li>
              <li><strong>warn - </strong>the color palette used to indicate warnings</li>
              <li><strong>error - </strong>the color palette used to indicate dangerous or failed actions</li>
            </ul>
            See <neon-link href="/design/color">Colors</neon-link> for more.
          </li>
          <li>
            <strong>Multiple themes - </strong>most design systems provide a single theme which is a concept from native
            mobile applications which is great for providing consistency across applications on devices. This idea is
            quite boring and doesn't help differentiate applications from one another on the web. So the plan with Neon
            is to provide multiple themes to suit a wider variety of tastes and styles. These will be added in future.
          </li>
          <li>
            <strong>Light and dark modes - </strong>with growing support for light and dark modes in browsers design
            systems also need to provide this option. Neon provides light and dark modes for all themes.
          </li>
          <li>
            <strong>Customization - </strong>Not quite happy with the themes provided? There are several options
            available for customization. One of the big issues with current Javascript frameworks is the way CSS is
            encapsulated, it's very difficult to customize and override in CSS. The focus have been on making it easy
            for Javascript developers to work with styles. Neon takes a different approach, where styles are not bundled
            with components but rather imported via SASS. This means themes are fully (and easily) customizable by
            overriding SASS defaults so you can override single variables or even create your own themes. Neon also uses
            <neon-link href="http://getbem.com/">BEM</neon-link> class naming so it is easy to target and modify styles
            if you want, this is encouraged in Neon (Neon uses <neon-link href="https://semver.org/">SEMVER</neon-link>
            so if we change a class name you'll know about it).
          </li>
          <li>
            <strong>Proper semantic HTML components - </strong>another thing a lot of component libraries do poorly is
            use semantic HTML. So many component libraries will create components removing the semantic meaning by using
            a bunch of nested divs and discarding the native HTML elements (especially creating form components). Neon
            aims to use semantic HTML where possible and also minimise the number of DOM nodes in components. This means
            better performance, easier debugging and improved accessibility.
          </li>
          <li>
            <strong>Icon libraries - </strong>icon libraries are tricky. Either you need to include a heavyweight icon
            font which doesnt allow you to select only the icons you need or you will have to write some code to
            integrate a font library in javascript which is not very flexible if you need to add a custom icon. Neon's
            approach is to provide an icon registry and a component for rendering icons. The icon registry allows
            developers to register each icon as an SVG text string. Instead of hard coding color information use
            <em>fill="currentColor"</em> and now your icons support all functions colors as well as light and dark
            modes, no extra work required. Although the focus of the icon registry is icons it supports any SVG so can
            be used for illustrations, animated icons or anything else you could imagine creating in SVG form.
          </li>
          <li>
            <strong>Responsive layout - </strong>the 12 column grid (and other variants) are outdated and inflexible.
            How many times have you had to add classes like <em>class="col-4"</em> to your HTML? That's not very
            semantic in a responsive website which changes the number of columns at different breakpoints. CSS Grid is
            here and great at providing flexible layouts but it can be difficult to understand. Neon abstracts this by
            using a single grid for layout of the main content. Developers can define the grid layouts in code at each
            responsive breakpoint allowing for greater flexibility that a 12 column grid and less hassle than
            configuring CSS Grid directly.
          </li>
        </ul>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
