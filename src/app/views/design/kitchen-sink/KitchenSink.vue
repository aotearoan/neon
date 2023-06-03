<template>
  <neon-stack class="kitchen-sink-page">
    <neon-card>
      <neon-card-header>
        <h2 class="neon-h3">Kitchen Sink</h2>
      </neon-card-header>
      <neon-card-body>
        <p>
          Here is a showcase of all form components on one page for better visibility of palettes, disabled styles & the
          general design.
        </p>
      </neon-card-body>
      <neon-card-body>
        <div class="kitchen-sink-page__controls">
          <neon-select
            v-model="selectedPalette"
            :options="paletteOptions"
            placeholder="Select palette"
            size="m"
            @update:modelValue="onPalette"
          />
          <neon-switch v-model="disabled" label="Disabled" />
        </div>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <neon-link :external-indicator="true" href="https://getskeleton.com">Test link</neon-link>
          <neon-label :color="selectedPalette" label="Test label" />
          <br />
          <neon-badge :color="selectedPalette" :disabled="disabled" label="TL" />
          <neon-chip :color="selectedPalette" :disabled="disabled" label="Test chip" />
          <neon-switch v-model="testSwitch" :color="selectedPalette" :disabled="disabled" label="Test switch" />
          <neon-switch
            v-model="testCheckbox"
            :color="selectedPalette"
            :disabled="disabled"
            label="Test switch"
            switch-style="checkbox"
          />
          <neon-toggle
            v-model="testToggle"
            :color="selectedPalette"
            :disabled="disabled"
            :model="toggleModel"
            label="Test toggle"
            name="testToggle"
          />
          <neon-toggle
            v-model="testRadioButtons"
            :color="selectedPalette"
            :disabled="disabled"
            :model="radioButtonModel"
            label="Test radio buttons"
            name="testRadioButtons"
            toggle-style="radio-buttons"
          />
          <neon-field
            :disabled="disabled"
            :message-color="selectedPalette"
            :optional="true"
            label="Test input"
            message="Test field message"
          >
            <neon-input
              v-model="testInput"
              :color="selectedPalette"
              :disabled="disabled"
              placeholder="Placeholder..."
            />
          </neon-field>
          <neon-field-group>
            <neon-input-indicator :disabled="disabled" aria-label="Username" for="userField" icon="user" />
            <neon-input
              id="userField"
              v-model="testIndicators"
              :color="selectedPalette"
              :disabled="disabled"
              placeholder="Placeholder..."
              type="text"
            />
          </neon-field-group>

          <neon-number v-model="testNumber" :color="selectedPalette" :disabled="disabled" :spin-buttons="true" />
          <neon-slider id="basicSliderId" v-model="testSlider" :color="selectedPalette" :disabled="disabled" />
          <neon-range-slider
            id="basicRangeSliderId"
            v-model="testRangeSlider"
            :color="selectedPalette"
            :disabled="disabled"
          />
          <neon-search
            v-model="testSearch"
            :color="selectedPalette"
            :disabled="disabled"
            :multiple="true"
            :options="filteredSearchOptions"
            placeholder="Search"
            @filter-changed="searchFilter = $event"
          />
          <neon-select
            v-model="testSelect"
            :color="selectedPalette"
            :disabled="disabled"
            :options="selectOptions"
            placeholder="Select item(s)"
          />

          <neon-field :disabled="disabled" :message-color="selectedPalette" label="Test date picker">
            <neon-date-picker v-model="testDatePicker" :color="selectedPalette" :disabled="disabled" />
          </neon-field>
          <neon-field
            :disabled="disabled"
            :message-color="selectedPalette"
            :optional="true"
            label="Test textarea"
            message="Test field message"
          >
            <neon-input
              v-model="testTextarea"
              :color="selectedPalette"
              :disabled="disabled"
              :rows="3"
              placeholder="Placeholder..."
            />
          </neon-field>
          <neon-toggle-chip v-model="testToggleChip" :color="selectedPalette" :disabled="disabled" label="Medium" />
          <neon-button :color="selectedPalette" :disabled="disabled" icon="plus" label="Solid button" size="l" />
          <neon-button
            :color="selectedPalette"
            :disabled="disabled"
            button-style="outline"
            icon="plus"
            label="Outline button"
          />
          <neon-button
            :color="selectedPalette"
            :disabled="disabled"
            button-style="text"
            icon="plus"
            label="Text button"
          />
          <neon-button
            :color="selectedPalette"
            :disabled="disabled"
            :transparent="true"
            button-style="text"
            icon="menu"
          />
          <neon-field :disabled="disabled" label="Test color picker">
            <neon-color v-model="testColor" :color="selectedPalette" :disabled="disabled" />
          </neon-field>
          <neon-file :color="selectedPalette" :disabled="disabled" :multiple="true" icon="plus" label="Add files" />
          <neon-drop-zone :disabled="disabled">
            <span>Drop files here to upload</span>
          </neon-drop-zone>
          <neon-filter-list
            v-model="filterListModel"
            :color="selectedPalette"
            :display-count="5"
            :items="filterListItems"
          />
          <neon-note :color="selectedPalette">
            <span
              ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
              bottle activated charcoal bicycle rights adaptogen.</span
            >
          </neon-note>
          <span class="positioned-element">
            Test Counter
            <neon-notification-counter :active="true" :color="selectedPalette" :count="9" />
          </span>
          <neon-stepper
            :color="selectedPalette"
            :completed-index="3"
            :model-value="2"
            :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5 with the long name']"
          />
          <neon-linear-progress :color="selectedPalette" :model-value="testProgress" />
          <neon-tabs v-model="selectedTab" :color="selectedPalette" :tabs="tabs"></neon-tabs>
          <neon-action-menu v-model="selectedActionMenu" :color="selectedPalette" :model="actionMenuModel" />
          <neon-menu :color="selectedPalette" :menu="testMenu" />
          <neon-tree-menu :model="testTreeMenu" />
          <neon-selectable-card v-model="testSelectableCard" :color="selectedPalette" :disabled="disabled">
            <neon-card-body>
              <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
            </neon-card-body>
          </neon-selectable-card>
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./KitchenSink.ts"></script>
