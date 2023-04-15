<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open,
          and the dropdown content which is displayed above the page when the user clicks the button.
        </p>
        <p>
          This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the
          page or the action is asynchronous allowing the user to perform the action and continue what they were doing.
          Examples are providing links to copy and letting the user send feedback.
        </p>
        <p>
          <strong>NeonDropdown</strong> is the basis for the <strong>NeonDropdownMenu</strong> component and the
          <strong>NeonSelect</strong> form component.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown sizes</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="sOpen" label="Small" size="s" @update:modelValue="toggleOpen('sOpen')">
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="mOpen" label="Medium" size="m" @update:modelValue="toggleOpen('mOpen')">
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="lOpen" label="Large" size="l" @update:modelValue="toggleOpen('lOpen')">
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="sizeExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown colors</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="primaryOpen"
                         color="primary"
                         label="Primary"
                         @update:modelValue="toggleOpen('primaryOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="warnTextOpen"
                         color="warn"
                         dropdown-style="text-button"
                         label="Warning"
                         @update:modelValue="toggleOpen('warnTextOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="colorExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown with icons</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="withIconOpen"
                         icon="plus"
                         label="With icon"
                         @update:modelValue="toggleOpen('withIconOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="iconOnlyOpen" icon="plus" @update:modelValue="toggleOpen('iconOnlyOpen')">
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="badgeSquareOpen"
                         dropdown-style="square-badge"
                         icon="user"
                         @update:modelValue="toggleOpen('badgeSquareOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :indicator="false"
                         :model-value="noIndicatorOpen"
                         label="No indicator"
                         @update:modelValue="toggleOpen('noIndicatorOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="iconExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown button styles</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="solidButtonOpen"
                         dropdown-style="solid-button"
                         label="Solid"
                         @update:modelValue="toggleOpen('solidButtonOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="textOpen"
                         dropdown-style="text-button"
                         label="Text"
                         @update:modelValue="toggleOpen('textOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="buttonStyleExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown badge styles</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="badgeSquareOpen"
                         dropdown-style="square-badge"
                         label="XD"
                         @update:modelValue="toggleOpen('badgeSquareOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="badgeCircularOpen"
                         dropdown-style="circular-badge"
                         label="XD"
                         @update:modelValue="toggleOpen('badgeCircularOpen')"
          >
            <neon-card-body>
              <p>Dropdown contents</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="badgeStyleExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown positions</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="blOpen" label="Bottom left aligned" @update:modelValue="toggleOpen('blOpen')">
            <neon-card-body>
              <p>Bacon ipsum dolor amet t-bone ribeye</p>
            </neon-card-body>
          </neon-dropdown>
          <neon-dropdown :model-value="trOpen"
                         label="Top right aligned"
                         placement="top-right"
                         @update:modelValue="toggleOpen('trOpen')"
          >
            <neon-card-body>
              <p>Bacon ipsum dolor amet t-bone ribeye</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="positionExamples" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Dropdown open on hover</h2>
        <div class="example--horizontal">
          <neon-dropdown :model-value="hoverOpen"
                         :open-on-hover="true"
                         dropdown-style="text-button"
                         label="Open on hover"
                         @update:modelValue="toggleOpen('hoverOpen')"
          >
            <neon-card-body>
              <p>Bacon ipsum dolor amet t-bone ribeye</p>
            </neon-card-body>
          </neon-dropdown>
        </div>
        <editor v-model="openOnHoverExample" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Dropdown.ts"></script>
