<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            <strong>NeonNote</strong> is designed to display notes, hints or quotes to the user. Notes are available in
            all colors and they can also be configured with a close button.
          </p>
          <p>
            By default, <strong>blockquote</strong> HTML elements are styled as notes in the <em>primary</em> color.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Blockquote</h2>
        <neon-stack>
          <blockquote>
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </blockquote>
          <editor v-model="blockQuoteTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Default note</h2>
        <neon-stack>
          <neon-note title="Note title">
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </neon-note>
          <editor v-model="defaultNoteTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Note with close</h2>
        <neon-stack>
          <neon-note v-if="noteOpen" :closable="true" @close-note="closeNote()">
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </neon-note>
          <editor v-model="withCloseTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Colored notes</h2>
        <neon-stack>
          <neon-note :icon="false" color="info" title="Note title">
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </neon-note>
          <neon-note :icon="false" color="success" title="Note title">
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </neon-note>
          <neon-note color="warn" title="Note with icon">
            <p>
              Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal
              bicycle rights adaptogen.
            </p>
          </neon-note>
          <neon-note color="error" title="Note title and icon"></neon-note>
          <neon-note :icon="false" color="brand" title="Note title only"></neon-note>
          <editor v-model="coloredTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Note.ts"></script>
