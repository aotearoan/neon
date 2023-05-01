<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Typography</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="headings" />
        <h2 class="neon-h4">Headings</h2>
        <p>
          By default, Neon uses the system font stack. This is customizable by overriding the values in the
          <em>theme.scss</em> file. As well as the standard H1 - H6 sizes there is also an H0 text size defined for
          cases when a much larger size is required, e.g. landing page marketing text.
        </p>
        <neon-note color="info">
          <span><strong>Note:</strong> use the class <em>neon-h0</em> to display H0 text.</span>
        </neon-note>
        <h2 class="neon-h4 typography-scale">Typography scale</h2>
        <div class="no-style--font typography-sample">
          <span class="neon-h0">H0 heading</span>
          <h1 role="presentation">H1 heading</h1>
          <h2 role="presentation">H2 heading</h2>
          <h3 role="presentation">H3 heading</h3>
          <h4 role="presentation">H4 heading</h4>
          <h5 role="presentation">H5 heading</h5>
          <h6 role="presentation">H6 heading</h6>
        </div>
        <h2 class="neon-h4 typography-scale">SASS Mixins and classes</h2>
        <p>
          One of the issues with headings in HTML is handling a mismatch between the page structure and the styles. E.g.
          In a card component the title might semantically be an H1 but in the design it needs to look like an H3.
        </p>
        <p>
          Neon provides classes and mixins named <em>neon-h0</em> to <em>neon-h6</em> to allow developers to override
          the style of any element with the correct styles from the typography scale.
        </p>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-header>
        <h1>Body Text</h1>
      </neon-card-header>
      <neon-card-body>
        <neon-anchor id="body-text" />
        <h2 class="neon-h4">Paragraph text</h2>
        <neon-note color="info">
          <span
            ><strong>Note:</strong> For improved readability, paragraph text is limited to a maximum width. The default
            width is 70ch but this is customizable in SASS by overriding the variable
            <em>$neon-max-paragraph-width</em>.</span
          >
        </neon-note>
        <p>
          The default paragraph text. I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok.
          Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug
          master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof
          party pabst adaptogen plaid narwhal.
        </p>
        <h2 class="neon-h4">Emphasis text</h2>
        <p>
          <em
            >A paragraph with <strong>emphasis</strong>. I'm baby coloring book kogi raw denim letterpress, normcore
            artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk
            irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo
            santo four loko roof party pabst adaptogen plaid narwhal.</em
          >
        </p>
        <h2 class="neon-h4">Strong text</h2>
        <p>
          <strong
            >I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok. Cornhole vice lumbersexual
            affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug master cleanse hot
            chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof party pabst adaptogen
            plaid narwhal.</strong
          >
        </p>
        <h2 class="neon-h4">Colored text</h2>
        <p>
          To find out how to adjust text colors, see
          <neon-link href="/design/color#color-classes">Color classes</neon-link>
          .
        </p>
        <h2 class="neon-h4">Monospaced text</h2>
        <p class="neon-monospaced">Use the class <em>neon-monospaced</em> to display text in monospace.</p>
        <h2 class="neon-h4">Numbers</h2>
        <p>
          Use the <em>neon-number</em> class the represent numeric data as tabular nums so that the numbers align
          vertically without having to resort to a monospaced font.
        </p>
        <span class="neon-number">-9876.543210</span>
        <span class="neon-number">-1234.567890</span>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Typography.ts"></script>
