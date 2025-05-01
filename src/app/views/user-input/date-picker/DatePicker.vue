<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonDatePicker</strong> is the equivalent of the native
          <neon-link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date" target="_blank">
            HTML Date Input
          </neon-link>
          . It accepts an
          <neon-link href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank"> ISO 8601</neon-link>
          date string as values & allows the user to select a date. Dates are formatted with the provided locale, if
          none is provided the browser locale is used as a default. On touch devices the native date picker is presented
          to the user.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Size examples</h2>
        <neon-stack>
          <neon-stack class="date-example">
            <neon-date-picker v-model="dateSmall" size="s" />
            <neon-date-picker v-model="dateMedium" size="m" />
            <neon-date-picker v-model="dateLarge" size="l" />
          </neon-stack>
          <editor v-model="dateSizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Color examples</h2>
        <neon-stack>
          <neon-stack class="date-example">
            <neon-date-picker v-model="dateSmall" color="brand" />
            <neon-date-picker v-model="dateLarge" color="info" />
          </neon-stack>
          <editor v-model="dateColorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Disabled examples</h2>
        <neon-stack>
          <neon-stack class="date-example">
            <h3 class="neon-h6">Disabled input</h3>
            <neon-date-picker v-model="dateDisabled" :disabled="true" />
            <h3 class="neon-h6">Disabled specific date selection</h3>
            <neon-date-picker v-model="datesDisabled" :disabled-dates="disabledDates" />
            <h3 class="neon-h6">Specified date range<br />(min={{ minDate }}, max={{ maxDate }})</h3>
            <neon-date-picker v-model="dateValidRange" :max="maxDate" :min="minDate" />
          </neon-stack>
          <editor v-model="dateDisabledExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Locale example</h2>
        <neon-stack>
          <neon-date-picker v-model="dateLocale" locale="ja-JP" />
          <editor v-model="dateLocaleExample" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Placement example</h2>
        <neon-stack>
          <neon-date-picker v-model="datePlacement" placement="top-left" />
          <editor v-model="datePlacementExample" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./DatePicker.ts"></script>
