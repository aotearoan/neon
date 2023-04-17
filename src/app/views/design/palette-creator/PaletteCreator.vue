<template>
  <div v-if="ready">
    <neon-card>
      <neon-card-header class="palette-creator__header">
        <div>
          <h1 class="neon-h3">Palette creator</h1>
          <p>Generate a custom palette for using with Neon</p>
        </div>
      </neon-card-header>
      <neon-card-body class="palette-creator__header">
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
      <neon-card-body>
        <h2 class="neon-h4">Text variables</h2>
        <div class="neon--horizontal">
          <div class="neon--vertical">
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
          </div>
          <div class="neon--vertical">
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
          </div>
        </div>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h4">Neutral palettes</h2>
        <div class="neon--horizontal">
          <div v-for="neutralPalette in neutralPalettes" :key="neutralPalette" class="neon--vertical">
            <h3 class="neon-h5">{{ neutralPalette }}</h3>
            <neon-color
              v-for="step in steps"
              :key="`${neutralPalette}-${step}`"
              :class="`--neon-rgb-${neutralPalette}-${step}`"
              :model-value="palette[`--neon-rgb-${neutralPalette}-${step}`]"
              @update:modelValue="setStyle(`--neon-rgb-${neutralPalette}-${step}`, $event)"
            />
          </div>
        </div>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h4">Brand palettes</h2>
        <div class="neon--horizontal">
          <div v-for="brandPalette in brandPalettes" :key="brandPalette" class="neon--vertical">
            <h3 class="neon-h5">{{ brandPalette }}</h3>
            <neon-color
              v-for="step in steps"
              :key="`${brandPalette}-${step}`"
              :class="`--neon-rgb-${brandPalette}-${step}`"
              :model-value="palette[`--neon-rgb-${brandPalette}-${step}`]"
              @update:modelValue="setStyle(`--neon-rgb-${brandPalette}-${step}`, $event)"
            />
          </div>
        </div>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h4">Functional palettes</h2>
        <div class="neon--horizontal">
          <div v-for="functionalPalette in functionalPalettes" :key="functionalPalette" class="neon--vertical">
            <h3 class="neon-h5">{{ functionalPalette }}</h3>
            <neon-color
              v-for="step in steps"
              :key="`${functionalPalette}-${step}`"
              :class="`--neon-rgb-${functionalPalette}-${step}`"
              :model-value="palette[`--neon-rgb-${functionalPalette}-${step}`]"
              @update:modelValue="setStyle(`--neon-rgb-${functionalPalette}-${step}`, $event)"
            />
          </div>
        </div>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./PaletteCreator.ts" />
