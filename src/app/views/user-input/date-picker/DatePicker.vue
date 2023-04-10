<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonDatePicker</strong> is the equivalent of the native
          <neon-link
            :external-indicator="true"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"
            target="_blank"
          >
            HTML Date Input
          </neon-link>
          . It accepts an
          <neon-link :external-indicator="true" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">
            ISO 8601
          </neon-link>
          date string as values & allows the user to select a date. Dates are formatted with the provided locale, if
          none is provided the browser locale is used as a default. On touch devices the native date picker is presented
          to the user.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Size example</h2>
        <div class="neon-vertically-spaced date-example">
          <neon-date-picker v-model="dateSmall" size="s" />
          <neon-date-picker v-model="dateMedium" size="m" />
          <neon-date-picker v-model="dateLarge" size="l" />
        </div>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Disabled examples</h2>
        <div class="neon-vertically-spaced date-example">
          <label>Disabled input</label>
          <neon-date-picker v-model="dateDisabled" :disabled="true" />
          <label>Disabled specific date selection</label>
          <neon-date-picker v-model="datesDisabled" :disabled-dates="disabledDates" />
          <label>Specified date range (min={{ minDate }}, max={{ maxDate }})</label>
          <neon-date-picker v-model="dateValidRange" :max="maxDate" :min="minDate" />
        </div>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./DatePicker.ts"></script>
