<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          A side navigation component. This is displayed at the <em>larger-than-tablet</em> breakpoint and hidden at
          <em>tablet</em> and below. Use this to display menus, navigation or other items related to the main page
          content. A side nave had two slots, one for <em>sticky</em> content which remains visible at all times. The
          other is for <em>scrolling content</em> which is allowed to overflow below the bottom of the page.
        </p>
        <p>
          At the <em>tablet</em> breakpoint and below it is recommended to use <strong>NeonDrawer</strong> to display
          the side navigation contents.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Side Nav example</h2>
      </neon-card-header>
      <neon-card-body :full-width="true">
        <div class="example__output--fixed-content">
          <neon-side-nav>
            <template #sticky>
              <h6>Sticky content</h6>
            </template>
            <template #scrolling>
              <h6>Scrolling content</h6>
              <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
                kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank
                turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork
                belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami
                flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl
                tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.</p>
            </template>
          </neon-side-nav>
        </div>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SideNav.ts"></script>
