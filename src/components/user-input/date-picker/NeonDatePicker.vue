<template>
  <div
    :class="[
      `neon-date-picker--${size}`,
      `neon-date-picker--${color}`,
      {
        'neon-date-picker--disabled': disabled,
        'neon-date-picker--open': calendarOpen,
      },
    ]"
    class="neon-date-picker"
  >
    <neon-dropdown ref="dropdown" v-model="calendarOpen" :placement="placement" @update:modelValue="resetToCalendar()">
      <template #dropdown-button>
        <neon-input
          :color="color"
          :disabled="disabled"
          :icon-readonly="true"
          :model-value="formattedValue"
          :placeholder="placeholder"
          :size="size"
          :tabindex="-1"
          class="neon-date-picker__button"
          icon="calendar"
          type="text"
        />
        <div
          :aria-label="openCalendarLabel"
          :tabindex="disabled ? -1 : 0"
          class="neon-date-picker__button-click-capture"
          role="button"
          @click.stop.prevent.capture="!disabled && openCalendar()"
          @keydown.enter.stop.prevent.capture="openCalendar()"
          @keydown.space.stop.prevent.capture="openCalendar()"
        ></div>
      </template>
      <template #default>
        <div ref="calendarRef" class="neon-date-picker__calendar">
          <template v-if="yearSelectionOpen">
            <div class="neon-date-picker__calendar-header">
              <span class="neon-date-picker__calendar-title-readonly">
                {{ `${calendar.pageDecadeStart}–${calendar.pageDecadeStart + 9}` }}
              </span>
              <div class="neon-date-picker__calendar-header-actions">
                <neon-button
                  :aria-label="previousDecadeLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isPreviousDecadeDisabled"
                  button-style="text"
                  class="neon-date-picker__previous-button"
                  icon="chevron-left"
                  size="m"
                  @click.stop.prevent.capture="onPreviousDecade()"
                  @keydown.enter.stop.prevent.capture="onPreviousDecade()"
                />
                <neon-button
                  :aria-label="nextDecadeLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isNextDecadeDisabled"
                  button-style="text"
                  class="neon-date-picker__next-button"
                  icon="chevron-right"
                  size="m"
                  @click.stop.prevent.capture="onNextDecade()"
                  @keydown.enter.stop.prevent.capture="onNextDecade()"
                />
              </div>
            </div>
            <hr />
            <div class="neon-date-picker__calendar-options">
              <neon-button
                v-for="index in 10"
                :key="index"
                :class="{
                  'neon-date-picker__calendar-option--selected':
                    calendar.pageYear === calendar.pageDecadeStart + index - 1,
                  'neon-date-picker__calendar-option--today':
                    calendar.today.year === calendar.pageDecadeStart + index - 1,
                  'neon-date-picker__calendar-option--disabled': isYearDisabled(calendar.pageDecadeStart + index - 1),
                }"
                :color="color"
                :disabled="isYearDisabled(calendar.pageDecadeStart + index - 1)"
                :full-width="true"
                :label="`${calendar.pageDecadeStart + index - 1}`"
                button-style="text"
                class="neon-date-picker__calendar-option"
                size="s"
                @click.stop.prevent.capture="selectYear(calendar.pageDecadeStart + index - 1)"
                @keydown.enter.stop.prevent.capture="selectYear(calendar.pageDecadeStart + index - 1)"
              />
            </div>
          </template>
          <template v-else-if="monthSelectionOpen">
            <div class="neon-date-picker__calendar-header">
              <span v-if="isChangeYearDisabled" class="neon-date-picker__calendar-title-readonly">
                {{ calendar.pageYear }}
              </span>
              <neon-button
                v-else
                :aria-label="changeYearLabel"
                :label="`${calendar.pageYear}`"
                button-style="text"
                class="neon-date-picker__calendar-header-title"
                color="high-contrast"
                icon="switch"
                icon-position="right"
                size="m"
                @click.stop.prevent.capture="changeYear()"
                @keydown.enter.stop.prevent.capture="changeYear()"
              />
              <div class="neon-date-picker__calendar-header-actions">
                <neon-button
                  :aria-label="previousYearLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isPreviousYearDisabled"
                  button-style="text"
                  class="neon-date-picker__previous-button"
                  icon="chevron-left"
                  size="m"
                  @click.stop.prevent.capture="onPreviousYear()"
                  @keydown.enter.stop.prevent.capture="onPreviousYear()"
                />
                <neon-button
                  :aria-label="nextYearLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isNextYearDisabled"
                  button-style="text"
                  class="neon-date-picker__next-button"
                  icon="chevron-right"
                  size="m"
                  @click.stop.prevent.capture="onNextYear()"
                  @keydown.enter.stop.prevent.capture="onNextYear()"
                />
              </div>
            </div>
            <hr />
            <div class="neon-date-picker__calendar-options">
              <neon-button
                v-for="(month, index) in calendar.months"
                :key="index"
                :class="{
                  'neon-date-picker__calendar-option--selected': index + 1 === calendar.pageMonth,
                  'neon-date-picker__calendar-option--today':
                    index + 1 === calendar.today.month && calendar.today.year === calendar.pageYear,
                  'neon-date-picker__calendar-option--disabled': isMonthDisabled(calendar.pageYear, index + 1),
                }"
                :color="color"
                :disabled="isMonthDisabled(calendar.pageYear, index + 1)"
                :full-width="true"
                :label="month"
                button-style="text"
                class="neon-date-picker__calendar-option"
                size="s"
                @click.stop.prevent.capture="selectMonth(index + 1)"
                @keydown.enter.stop.prevent.capture="selectMonth(index + 1)"
              />
            </div>
          </template>
          <template v-else>
            <div class="neon-date-picker__calendar-header">
              <span v-if="isChangeDateDisabled" class="neon-date-picker__calendar-title-readonly">
                {{ `${calendar.pageMonthName} ${calendar.pageYear}` }}
              </span>
              <neon-button
                v-else
                :aria-label="changeMonthLabel"
                :label="`${calendar.pageMonthName} ${calendar.pageYear}`"
                button-style="text"
                class="neon-date-picker__calendar-header-title"
                color="high-contrast"
                icon="switch"
                icon-position="right"
                size="m"
                @click.stop.prevent.capture="changeMonth()"
                @keydown.enter.stop.prevent.capture="changeMonth()"
              />
              <div class="neon-date-picker__calendar-header-actions">
                <neon-button
                  :aria-label="previousMonthLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isPreviousDisabled"
                  button-style="text"
                  class="neon-date-picker__previous-button"
                  icon="chevron-left"
                  size="m"
                  @click.stop.prevent.capture="onPrevious()"
                  @keydown.enter.stop.prevent.capture="onPrevious()"
                />
                <neon-button
                  :aria-label="nextMonthLabel"
                  :circular="true"
                  :color="color"
                  :disabled="isNextDisabled"
                  button-style="text"
                  class="neon-date-picker__next-button"
                  icon="chevron-right"
                  size="m"
                  @click.stop.prevent.capture="onNext()"
                  @keydown.enter.stop.prevent.capture="onNext()"
                />
              </div>
            </div>
            <div class="neon-date-picker__calendar-dows">
              <div v-for="dow in calendar.dowNames" :key="dow" class="neon-date-picker__calendar-dow">{{ dow }}</div>
            </div>
            <hr />
            <div v-for="(dateRow, index) in calendar.dates" :key="index" class="neon-date-picker__calendar-dates">
              <template v-for="(dateCol, index) in dateRow">
                <neon-button
                  v-if="dateCol"
                  :key="index"
                  :circular="true"
                  :class="{
                    'neon-date-picker__calendar-date--selected':
                      modelValue === isoDate(dateCol, calendar.pageMonth, calendar.pageYear),
                    'neon-date-picker__calendar-date--today':
                      today === isoDate(dateCol, calendar.pageMonth, calendar.pageYear),
                    'neon-date-picker__calendar-date--disabled': isDisabled(
                      isoDate(dateCol, calendar.pageMonth, calendar.pageYear),
                    ),
                  }"
                  :color="color"
                  :disabled="isDisabled(isoDate(dateCol, calendar.pageMonth, calendar.pageYear))"
                  :label="`${dateCol}`"
                  :tabindex="isDisabled(isoDate(dateCol, calendar.pageMonth, calendar.pageYear)) ? -1 : 0"
                  :transparent="true"
                  button-style="text"
                  class="neon-date-picker__calendar-date"
                  size="m"
                  @click.stop.prevent.capture="emitDate(isoDate(dateCol, calendar.pageMonth, calendar.pageYear))"
                  @keydown.enter.stop.prevent.capture="
                    emitDate(isoDate(dateCol, calendar.pageMonth, calendar.pageYear))
                  "
                />
                <div
                  v-else
                  :key="`${index}-empty`"
                  class="neon-date-picker__calendar-date neon-date-picker__calendar-date--empty"
                />
              </template>
            </div>
          </template>
          <hr />
          <div class="neon-button-group">
            <neon-button
              v-if="optional"
              :label="clearLabel"
              button-style="text"
              class="neon-date-picker__calendar-clear-button"
              color="high-contrast"
              size="s"
              @click.stop.prevent.capture="clear()"
              @keydown.enter.stop.prevent.capture="clear()"
            />
            <neon-button
              :color="color"
              :label="doneLabel"
              button-style="text"
              class="neon-date-picker__calendar-done-button"
              size="s"
              @click.stop.prevent.capture="done()"
              @keydown.enter.stop.prevent.capture="done()"
            />
          </div>
        </div>
      </template>
    </neon-dropdown>
    <neon-input
      :disabled="disabled"
      :hide-icon="true"
      :max="max"
      :min="min"
      :model-value="modelValue"
      :size="size"
      :tabindex="-1"
      class="neon-date-picker__native-input"
      type="date"
      v-bind="attrs"
      @update:modelValue="emitDate"
    />
  </div>
</template>

<script lang="ts" src="./NeonDatePicker.ts"></script>
