<template>
  <neon-stack>
    <neon-card>
      <neon-card-header>
        <h1>Adding a new component</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="installation" />
        <h2 class="neon-h4">Checklists</h2>
        <neon-stack>
          <p>
            It is recommended to refer to existing similar components when creating new components for Neon. This will
            help with understanding what is required in terms of documentation, examples & testing. Below are checklists
            covering all necessary steps in creating a new component.
          </p>
          <div>
            <h3 class="neon-h5">Vue Component + Typescript</h3>
            <ol>
              <li>Increment minor version in package.json & set patch version to 0.</li>
              <li>Decide on a component name & in which of the sections the component belongs.</li>
              <li>Create component vue/ts files in the relevant directory.</li>
              <li>Add component vue file export to <em>src/neon.ts</em>.</li>
              <li>Question: should this component define a 2 way bound modelValue?</li>
              <li>Write unit tests for the component (aim for 100% coverage!).</li>
              <li>
                Use JSDoc comments to document the component & it's properties. These will be extracted & used for API
                documentation later. Document the <em>emits</em>, i.e. the events emitted by the component. This will
                also be extracted & used in generating the API documentation.
              </li>
            </ol>
          </div>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h3 class="neon-h5">Styles</h3>
        <ol>
          <li>
            Create scss file under <em>src/sass/components</em>. The SASS for the new component should be wrapped in a
            mixin so that it can be conditionally imported.
          </li>
          <li>Add this file to the bottom of the <em>components.scss</em> file in the same directory.</li>
          <li>
            In the file <em>src/sass/includes/_dependencies.scss</em> add a list entry for the named component and all
            of it's dependencies (including transitive dependencies). This is used to conditionally import SASS to only
            import SASS that is necessary for a project & to prevent importing duplicate SASS.
          </li>
          <li>
            Based on the list entry name in the previous step, add conditional SASS import to the bottom of
            <em>src/sass/theme.scss</em>
            to conditionally apply the component mixin.
          </li>
          <li>
            Add any new CSS variables to <em>src/sass/variables.scss</em>. Color based variables will need to be added
            under both the light & dark mode scopes (<em>.neon-mode--light</em> & <em>.neon-mode--dark</em>) and set
            accordingly. All other variables should be added to the top level <em>.neon</em> scope.
          </li>
          <li>Make sure to use rems instead of pixels. 1rem=1px in Neon.</li>
        </ol>
      </neon-card-body>
      <neon-card-body>
        <h3 class="neon-h5">Examples + Documentation</h3>
        <ol>
          <li>
            Once the component has been created run <em>doc-gen.js</em> to generate the new documentation JSON files for
            the app. This is run before serving so restarting the app will automatically generate the docs.
          </li>
          <li>
            Create the example/documentation for the component under <em>src/app/views</em>. The directory structure
            here should match that of the components. Here it is recommended to look at similar components to see how to
            correctly document a component.
          </li>
          <li>
            In the file <em>src/app/Menu.ts</em> add an entry for the new component documentation page in the relevant
            directory structure.
          </li>
        </ol>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./AddingAComponent.ts"></script>
