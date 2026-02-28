<template>
  <neon-stack>
    <neon-card>
      <neon-card-header>
        <h1>Layout</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="units-&-spacing" />
        <h2 class="neon-h4">Units & Spacing</h2>
        <neon-stack>
          <p>
            Neon uses <strong>rems</strong> as the units of measurement across the entire component library. By default,
            Neon will set the rems:px ratio to 1:1 in the document HTML element. This means 24px = 24rems which makes
            calculations easier to reason about.
          </p>
          <p>
            Spacing is all relative to the CSS variable <em>--neon-base-space</em> which has a default value of
            <em>4rem</em> (=4px). So adjusting all spacing is as simple as changing this variable.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="desktop-layout" />
        <h2 class="neon-h4">Desktop layout</h2>
        <neon-stack>
          <p>
            Neon provides a default page layout. Adhering to this structure ensures the provided responsive behaviour is
            preserved. Most of the layout is structured using component slots with the exception of the NeonPage
            #content slot. This is left open for any content, however if you choose to use NeonGrid and NeonFooter
            providing these directly in the NeonPage #content slot will preserve the responsiveness of the page.
          </p>
          <neon-stack gap="s">
            <p>The recommended desktop (i.e. larger-than-tablet size) component/slot layout is as follows:</p>
            <div class="layout-example">
              <neon-link class="layout-example__label" href="/layout/page">NeonPage</neon-link>
              <div class="layout-example">
                <span class="layout-example__label"
                  >#top-nav (<neon-link class="layout-example__link" href="/layout/top-nav">NeonTopNav</neon-link
                  >)</span
                >
              </div>
              <div class="layout-example__content">
                <div class="layout-example layout-example__side-nav">
                  <span class="layout-example__label"
                    >#side-nav (<neon-link class="layout-example__link" href="/layout/side-nav">NeonSideNav</neon-link
                    >)</span
                  >
                  <div class="layout-example layout-example__side-nav-section">
                    <span class="layout-example__label">#sticky</span>
                  </div>
                  <div class="layout-example layout-example__side-nav-section">
                    <span class="layout-example__label">#scrolling</span>
                  </div>
                </div>
                <div class="layout-example__with-footer">
                  <div class="layout-example layout-example__grid-wrapper">
                    <span class="layout-example__label">#content</span>
                    <div class="layout-example">
                      <neon-link class="layout-example__label" href="/layout/grid">NeonGrid</neon-link>
                      <div class="layout-example">
                        <span class="layout-example__label">
                          Grid section 1 (<neon-link class="layout-example__link" href="/layout/grid#api"
                            >NeonGridArea</neon-link
                          >)
                        </span>
                      </div>
                      <div class="layout-example__label">...</div>
                      <div class="layout-example">
                        <span class="layout-example__label">
                          Grid section n (<neon-link class="layout-example__link" href="/layout/grid#api"
                            >NeonGridArea</neon-link
                          >)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="layout-example layout-example__grid-wrapper">
                    <span class="layout-example__label">
                      #footer (<neon-link class="layout-example__label" href="/layout/footer">NeonFooter</neon-link>)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </neon-stack>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="responsive-layout" />
        <h2 class="neon-h4">Responsive layout</h2>
        <neon-stack>
          <p>
            The <em>responsive</em> layout is the same as the desktop layout with the exception of the Side Nav being
            removed due to the narrower width. Instead of displaying the Side Nav at smaller screen sizes it is
            recommended to provide the side navigation content in a
            <neon-link href="/layout/drawer">NeonDrawer</neon-link>
            component triggered by a
            <neon-link href="/user-input/button">NeonButton</neon-link>
            .
          </p>
          <div class="layout-example">
            <neon-link class="layout-example__label" href="/layout/page">NeonPage</neon-link>
            <div class="layout-example">
              <span class="layout-example__label"
                >#top-nav (<neon-link class="layout-example__link" href="/layout/top-nav">NeonTopNav</neon-link>)</span
              >
            </div>
            <div class="layout-example__content">
              <div class="layout-example layout-example__grid-wrapper">
                <span class="layout-example__label">#content</span>
                <div class="layout-example">
                  <neon-link class="layout-example__label" href="/layout/grid">NeonGrid</neon-link>
                  <div class="layout-example">
                    <span class="layout-example__label"
                      >Grid section 1 (<neon-link class="layout-example__link" href="/layout/grid#api"
                        >NeonGridArea</neon-link
                      >)</span
                    >
                  </div>
                  <div class="layout-example__label">...</div>
                  <div class="layout-example">
                    <span class="layout-example__label"
                      >Grid section n (<neon-link class="layout-example__link" href="/layout/grid#api"
                        >NeonGridArea</neon-link
                      >)</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="layout-example">
              <span class="layout-example__label">
                #footer (<neon-link class="layout-example__link" href="/layout/footer">NeonFooter</neon-link>)
              </span>
            </div>
          </div>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="page-content" />
        <h2 class="neon-h4">Page content</h2>
        <neon-stack>
          <p>
            Neon's approach to page <strong>content</strong> layout is to use CSS Grid to create the top level layout
            and use flexbox for the layout at lower levels. CSS Grid layout is achieved via the
            <neon-link href="/layout/grid">NeonGrid</neon-link>
            component.
            <neon-link href="/layout/grid">NeonGrid</neon-link>
            is a CSS Grid based container designed to help simplify page application layout and responsiveness by
            abstracting CSS Grid and allowing applications to define this programmatically in Typescript.
          </p>
          <p>
            This provides developers with the benefits of using CSS Grid without dealing with the steep learning curve
            and complexities of using it directly.
          </p>
          <p>
            For more information about responsiveness in Neon see the
            <neon-link href="/design/responsiveness">Responsiveness</neon-link>
            page.
          </p>
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./Layout.ts"></script>
