<template>
  <neon-stack v-if="ready" class="palette-creator">
    <neon-card>
      <neon-card-header>
        <div>
          <h1>Palette creator</h1>
          <p>Generate a custom palette for using with Neon</p>
        </div>
      </neon-card-header>
      <neon-card-body>
        <div>
          <p>
            To integrate your palette with Neon click the export button at the top right which will generate a file
            <em>palette.scss</em> which contains all color definitions for Neon. This can be directly imported into an
            application to override the Neon color system.
          </p>
        </div>
      </neon-card-body>
      <neon-card-footer>
        <div class="neon-button-group">
          <neon-button button-style="text" label="Reset palette" size="s" @click="openConfirmResetDialog = true" />
          <neon-button
            color="brand"
            icon="download"
            icon-position="right"
            label="Export colors"
            size="s"
            @click="exportColors()"
          />
          <neon-dialog
            :open="openConfirmResetDialog"
            cancel-label="Cancel"
            color="error"
            confirm-label="Reset"
            question="Are you sure you want to reset the palette?"
            title="Reset palette"
            @cancel="openConfirmResetDialog = false"
            @confirm="resetPalette()"
          >
          </neon-dialog>
        </div>
      </neon-card-footer>
    </neon-card>
    <neon-card>
      <neon-card-body class="palette-creator__text-vars">
        <h2 class="neon-h4">Text variables</h2>
        <neon-inline>
          <neon-field for="textDark" label="Text dark">
            <neon-color
              id="textDark"
              :model-value="palette['--neon-rgb-text-dark']"
              @update:modelValue="setStyle('--neon-rgb-text-dark', $event)"
            />
          </neon-field>
          <neon-field for="textDarkStrong" label="Text dark strong">
            <neon-color
              id="textDarkStrong"
              :model-value="palette['--neon-rgb-text-strong-dark']"
              @update:modelValue="setStyle('--neon-rgb-text-strong-dark', $event)"
            />
          </neon-field>
        </neon-inline>
        <neon-inline>
          <neon-field for="textLight" label="Text light">
            <neon-color
              id="textLight"
              :model-value="palette['--neon-rgb-text-light']"
              @update:modelValue="setStyle('--neon-rgb-text-light', $event)"
            />
          </neon-field>
          <neon-field for="textLightStrong" label="Text light strong">
            <neon-color
              id="textLightStrong"
              :model-value="palette['--neon-rgb-text-strong-light']"
              @update:modelValue="setStyle('--neon-rgb-text-strong-light', $event)"
            />
          </neon-field>
        </neon-inline>
      </neon-card-body>
      <neon-card-body class="palette-creator__text-vars">
        <h2 class="neon-h4">Disabled variables</h2>
        <neon-inline breakpoint="tablet">
          <neon-field for="disabledBackgroundDark" label="Disabled bg dark">
            <neon-color
              id="disabledBackgroundDark"
              :model-value="palette['--neon-rgb-disabled-background-dark']"
              @update:modelValue="setStyle('--neon-rgb-disabled-background-dark', $event)"
            />
          </neon-field>
          <neon-field for="disabledBorderDark" label="Disabled border dark">
            <neon-color
              id="disabledBorderDark"
              :model-value="palette['--neon-rgb-disabled-border-dark']"
              @update:modelValue="setStyle('--neon-rgb-disabled-border-dark', $event)"
            />
          </neon-field>
          <neon-field for="disabledTextDark" label="Disabled text dark">
            <neon-color
              id="disabledTextDark"
              :model-value="palette['--neon-rgb-disabled-text-dark']"
              @update:modelValue="setStyle('--neon-rgb-disabled-text-dark', $event)"
            />
          </neon-field>
        </neon-inline>
        <neon-inline breakpoint="tablet">
          <neon-field for="disabledBackgroundLight" label="Disabled bg light">
            <neon-color
              id="disabledBackgroundLight"
              :model-value="palette['--neon-rgb-disabled-background-light']"
              @update:modelValue="setStyle('--neon-rgb-disabled-background-light', $event)"
            />
          </neon-field>
          <neon-field for="disabledBorderLight" label="Disabled border light">
            <neon-color
              id="disabledBorderLight"
              :model-value="palette['--neon-rgb-disabled-border-light']"
              @update:modelValue="setStyle('--neon-rgb-disabled-border-light', $event)"
            />
          </neon-field>
          <neon-field for="disabledTextLight" label="Disabled text light">
            <neon-color
              id="disabledTextLight"
              :model-value="palette['--neon-rgb-disabled-text-light']"
              @update:modelValue="setStyle('--neon-rgb-disabled-text-light', $event)"
            />
          </neon-field>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <neon-inline>
          <h2 class="neon-h4">Neutral palettes</h2>
          <neon-tooltip>
            <template #target>
              <neon-switch v-model="toggleNeutral" label="Toggle details" />
            </template>
            <template #content>Display the WCAG contrast info for small & large text</template>
          </neon-tooltip>
        </neon-inline>
        <br />
        <neon-inline :class="{ 'palette-creator__palette-group--hide': !toggleNeutral }" breakpoint="desktop">
          <neon-stack
            v-for="neutralPalette in neutralPalettes"
            :key="neutralPalette"
            class="palette-creator__palette-group"
          >
            <h3 class="neon-h5">{{ neutralPalette }}</h3>
            <div class="palette-creator__light-palette">
              <div v-for="step in stepsLight" :key="`${neutralPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${neutralPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${neutralPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${neutralPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${neutralPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
            <div class="palette-creator__dark-palette">
              <div v-for="step in stepsDark" :key="`${neutralPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${neutralPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${neutralPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${neutralPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${neutralPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${neutralPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
          </neon-stack>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <neon-inline>
          <h2 class="neon-h4">Brand palettes</h2>
          <neon-tooltip>
            <template #target>
              <neon-switch v-model="toggleBrand" label="Toggle details" />
            </template>
            <template #content>Display the WCAG contrast info for small & large text</template>
          </neon-tooltip>
        </neon-inline>
        <br />
        <neon-inline :class="{ 'palette-creator__palette-group--hide': !toggleBrand }" breakpoint="desktop">
          <neon-stack v-for="brandPalette in brandPalettes" :key="brandPalette" class="palette-creator__palette-group">
            <h3 class="neon-h5">{{ brandPalette }}</h3>
            <neon-field label="Generate from">
              <neon-color
                :model-value="palette[`--neon-rgb-${brandPalette}-l1`]"
                class="palette-creator__select-reference"
                size="s"
                @update:modelValue="generatePalette(brandPalette, $event)"
              />
            </neon-field>
            <div class="palette-creator__light-palette">
              <div v-for="step in stepsLight" :key="`${brandPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${brandPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${brandPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${brandPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${brandPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
            <div class="palette-creator__dark-palette">
              <div v-for="step in stepsDark" :key="`${brandPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${brandPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${brandPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${brandPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${brandPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${brandPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
          </neon-stack>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <neon-inline>
          <h2 class="neon-h4">Functional palettes</h2>
          <neon-tooltip>
            <template #target>
              <neon-switch v-model="toggleFunctional" label="Toggle details" />
            </template>
            <template #content>Display the WCAG contrast info for small & large text</template>
          </neon-tooltip>
        </neon-inline>
        <br />
        <neon-inline :class="{ 'palette-creator__palette-group--hide': !toggleFunctional }" breakpoint="desktop">
          <neon-stack
            v-for="functionalPalette in functionalPalettes"
            :key="functionalPalette"
            class="palette-creator__palette-group"
          >
            <h3 class="neon-h5">{{ functionalPalette }}</h3>
            <neon-field label="Generate from">
              <neon-color
                :model-value="palette[`--neon-rgb-${functionalPalette}-l1`]"
                class="palette-creator__select-reference"
                size="s"
                @update:modelValue="generatePalette(functionalPalette, $event)"
              />
            </neon-field>
            <div class="palette-creator__light-palette">
              <div v-for="step in stepsLight" :key="`${functionalPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${functionalPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${functionalPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${functionalPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${functionalPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
            <div class="palette-creator__dark-palette">
              <div v-for="step in stepsDark" :key="`${functionalPalette}-${step}`">
                <neon-color
                  :model-value="palette[`--neon-rgb-${functionalPalette}-${step}`]"
                  @update:modelValue="setStyle(`--neon-rgb-${functionalPalette}-${step}`, $event)"
                />
                <span class="palette-creator__color-level">{{ step }}</span>
                <span
                  v-if="accessibility[`--neon-rgb-${functionalPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].large === 'AAA'
                      ? 'palette-creator__color--large-aaa'
                      : 'palette-creator__color--large-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].large ||
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].ratioLarge
                  }}
                </span>
                <span
                  v-if="accessibility[`--neon-rgb-${functionalPalette}-${step}`]"
                  :class="
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].normal === 'AAA'
                      ? 'palette-creator__color--normal-aaa'
                      : 'palette-creator__color--normal-aa'
                  "
                >
                  {{
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].normal ||
                    accessibility[`--neon-rgb-${functionalPalette}-${step}`].ratioNormal
                  }}
                </span>
              </div>
            </div>
          </neon-stack>
        </neon-inline>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./PaletteCreator.ts" />
