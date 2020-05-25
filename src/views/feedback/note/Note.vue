<template>
    <neon-grid id="note" :layouts="layouts">
      <neon-grid-area id="note-content">
        <neon-card>
          <neon-card-header>
            <h1>Notes</h1>
          </neon-card-header>
          <neon-card-body class="notes">
            <blockquote>
              <span><strong>Note:</strong>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
            </blockquote>
            <neon-note v-for="color in noteColors" :key="`note-${color}`" :color="color" :closable="true" @close-note="closeNote(color)">
              <span><strong v-if="color !== 'error'">Note:</strong>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
            </neon-note>
          </neon-card-body>
        </neon-card>
      </neon-grid-area>
    </neon-grid>
</template>

<script lang="ts" src="./Note.ts"></script>
