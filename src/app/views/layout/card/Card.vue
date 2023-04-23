<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonCard</strong> is a key component for the layout of content within pages. Card consist of any
          number of <strong>NeonCardHeader</strong>, <strong>NeonCardBody</strong> and
          <strong>NeonCardFooter</strong> components.
        </p>
        <p>
          By default cards have a column layout, use the <em>orientation</em> property to define horizontal cards (row
          layout). Horizontal cards will revert to a column layout at a configurable responsive breakpoint.
        </p>
        <p>
          The <strong>NeonCardHeader</strong> component is designed to be a container for titles as well as secondary
          actions related to the content displayed in the card.
        </p>
        <p>
          The <strong>NeonCardBody</strong> component is used for displaying the main content of the card. By default,
          body sections have padding defined. Use the <em>full-width</em> attribute for displaying body content without
          any padding. This can be useful for display edge-to-edge images, etc.. in cards.
        </p>
        <p>
          The <strong>NeonCardFooter</strong> is designed to be placed at the bottom of a card and contains the key
          actions related to the card content.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Vertical card</h2>
        <neon-card>
          <neon-card-header>
            <h4>Card header</h4>
          </neon-card-header>
          <neon-card-body>
            <p>Card body</p>
          </neon-card-body>
          <neon-card-body>
            <p>
              Another card body. Cards can also have full width sections without an padding (this is useful for adding
              images, charts, etc). The following section is full width:
            </p>
          </neon-card-body>
          <neon-card-body :full-width="true">
            <img :src="baseUrl + 'images/taranaki.jpg'" />
          </neon-card-body>
          <neon-card-body>
            <p>Place card actions inside the <strong>NeonCardFooter</strong> below:</p>
          </neon-card-body>
          <neon-card-footer>
            <neon-button label="Cancel" />
            <neon-button color="primary" label="Accept" />
          </neon-card-footer>
        </neon-card>
        <editor v-model="verticalExample" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Horizontal card</h2>
        <neon-card orientation="horizontal">
          <neon-card-header>
            <h4>Header</h4>
          </neon-card-header>
          <neon-card-body>
            <p>
              Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket.
            </p>
          </neon-card-body>
          <neon-card-footer>
            <neon-button label="Cancel" size="s" />
            <neon-button color="primary" label="Accept" size="s" />
          </neon-card-footer>
        </neon-card>
        <editor v-model="horizontalExample" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Card.ts"></script>
