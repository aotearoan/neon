<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            Use the <strong>NeonLink</strong> component to display links to the user. These links can be internal router
            links (relative href), external links (absolute href) or click handlers (not href and an @click event
            handler).
          </p>
          <p>NOTE: HTML &lt;a&gt; links are styled in the same way as <strong>NeonLink</strong> components.</p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Link examples</h2>
        <neon-stack>
          <div>
            <p>
              This is some text with a
              <neon-link href="/">link</neon-link>
              embedded in it.
            </p>
            <neon-link href="/">Router link</neon-link>
            <neon-link :external-indicator="true" href="http://www.getskeleton.com" target="_blank"
              >External link
            </neon-link>
            <neon-link aria-label="Link title" @click="toast()">Link with click handler</neon-link>
            <neon-link :no-style="true" aria-label="Link title" @click="toast()">Unstyled link</neon-link>
          </div>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Link.ts"></script>
