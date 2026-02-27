<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open,
            and the dropdown content which is displayed above the page when the user clicks the button.
          </p>
          <p>
            This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the
            page or the action is asynchronous allowing the user to perform the action and continue what they were
            doing. Examples are providing links to copy and letting the user send feedback.
          </p>
          <p>
            <strong>NeonDropdown</strong> is the basis for the <strong>NeonDropdownMenu</strong> component and the
            <strong>NeonSelect</strong> form component.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown sizes</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="sOpen" label="Small" size="s">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="mOpen" label="Medium" size="m">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="lOpen" label="Large" size="l">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="sizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown colors</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="primaryOpen" color="primary" label="Primary">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="warnTextOpen" color="warn" dropdown-style="text" label="Warning">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="colorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown with icons</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="withIconOpen" icon="plus" label="With icon">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="iconOnlyOpen" icon="plus">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" icon="user">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="noIndicatorOpen" :indicator="false" label="No indicator">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="iconExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown button styles</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="solidButtonOpen" dropdown-style="solid" label="Solid">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="textOpen" dropdown-style="text" label="Text">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="buttonStyleExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown badge styles</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" label="XD">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="badgeCircularOpen" dropdown-style="circular-badge" label="XD">
              <neon-card-body>
                <p>Dropdown contents</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="badgeStyleExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown positions</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="blOpen" label="Bottom left aligned">
              <neon-card-body>
                <p>Bacon ipsum dolor amet t-bone ribeye</p>
              </neon-card-body>
            </neon-dropdown>
            <neon-dropdown v-model="trOpen" label="Top right aligned" placement="top-right">
              <neon-card-body>
                <p>Bacon ipsum dolor amet t-bone ribeye</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="positionExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown open on hover</h2>
        <neon-stack>
          <neon-inline>
            <neon-dropdown v-model="hoverOpen" :open-on-hover="true" dropdown-style="text" label="Open on hover">
              <neon-card-body>
                <p>Bacon ipsum dolor amet t-bone ribeye</p>
              </neon-card-body>
            </neon-dropdown>
          </neon-inline>
          <editor v-model="openOnHoverExample" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Dropdown.ts"></script>
