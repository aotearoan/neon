<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonNote</strong> is designed to display notes, hints or quotes to the user. Notes are available in
          all colors and they can also be configured with a close button.
        </p>
        <p>By default, <strong>blockquote</strong> HTML elements are styled as notes in the <em>primary</em> color.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Blockquote</h2>
        <blockquote>
          <span
            ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
            bottle activated charcoal bicycle rights adaptogen.</span
          >
        </blockquote>
        <editor v-model="blockQuoteTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Default note</h2>
        <neon-note>
          <span
            ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
            bottle activated charcoal bicycle rights adaptogen.</span
          >
        </neon-note>
        <editor v-model="defaultNoteTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Note with close</h2>
        <neon-note v-if="noteOpen" :closable="true" @close-note="closeNote()">
          <span
            ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
            bottle activated charcoal bicycle rights adaptogen.</span
          >
        </neon-note>
        <editor v-model="blockQuoteTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Colored note</h2>
        <neon-note color="warn">
          <span
            ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
            bottle activated charcoal bicycle rights adaptogen.</span
          >
        </neon-note>
        <editor v-model="coloredTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Colored note without icon</h2>
        <neon-note :icon="false" color="error">
          <span
            ><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
            bottle activated charcoal bicycle rights adaptogen.</span
          >
        </neon-note>
        <editor v-model="coloredWithoutIconTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Note.ts"></script>
