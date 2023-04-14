<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <template #default>
      <neon-card>
        <neon-card-header>
          <h2 class="neon-h3">Grid example</h2>
        </neon-card-header>
        <neon-card-body :full-width="true">
          <div class="example__output--fixed-content">
            <neon-grid id="content" :layouts="layouts">
              <neon-grid-area id="section-content">
                <span>Grid area (scroll me)</span>
              </neon-grid-area>
            </neon-grid>
          </div>
        </neon-card-body>
        <neon-card-body>
          <editor v-model="template" />
        </neon-card-body>
      </neon-card>
    </template>
    <template #description>
      <neon-card>
        <neon-card-body>
          <p>
            A CSS grid component for top level layout within a page. This component provides functionality to
            dynamically
            generate the grid CSS and inject it into the page as well as defining the grid for different responsive
            breakpoints. The defined grid can be updated programmatically which is useful for adding/removing items from
            the grid.
          </p>
          <p>
            NeonGrid provides a slot for a set of NeonGridArea components, defining the contents for the various grid
            areas on the page.
          </p>
          <p>
            Place
            <neon-link href="/layout/grid#api">NeonGridArea</neon-link>
            components inside the NeonGrid default slot, providing each with a unique id. Then create the
            <em>layouts</em> property of NeonGrid, using these ids, describing the desired layouts at different
            breakpoints. Use the <em>All</em> breakpoint to define a single global layout.
          </p>
          <p>
            Here is an example layout for a grid with 4 NeonGridAreas with ids <em>area1</em>, <em>area2</em>,
            <em>area3</em>, <em>area4</em>:
          </p>
          <editor v-model="layoutExample" language="typescript" />
          <p>
            This is a very simple example where the grid is a single row at larger sizes, wraps to a 2x3 grid on tablet
            (with area1 and area4 taking up two columns and area2 and area3 taking only one column), then a single
            column
            on mobile.
          </p>
          <p>
            This approach can be used to create very complex layouts that differ immensely at responsive breakpoints.
            For
            example, grid areas can be: added, removed, reordered or even change shape at specific breakpoints.
          </p>
        </neon-card-body>
      </neon-card>
    </template>
  </component-documentation>
</template>

<script lang="ts" src="./Grid.ts"></script>
