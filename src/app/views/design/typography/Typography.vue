<template>
  <neon-card>
    <neon-card-header>
      <h1>Typography</h1>
    </neon-card-header>
    <neon-card-body>
      <neon-anchor id="headings" />
      <h2>Headings</h2>
      <p>
        By default, Neon uses the system font stack. This is customizable by overriding the values in the
        <em>theme.scss</em> file. As well as the standard H1 - H6 sizes there is also an H0 text size defined for cases
        when a much larger size is required, e.g. landing page marketing text.
      </p>
      <neon-note color="info">
        <span
          ><strong>Note:</strong> use the class <em class="neon-color-text-info">neon-text-h0</em> to display H0
          text.</span
        >
      </neon-note>
      <h6 class="neon-color-text-info typography-scale">Here is the typography scale:</h6>
      <span class="neon-text-h0">H0 heading</span>
      <h1>H1 heading</h1>
      <h2>H2 heading</h2>
      <h3>H3 heading</h3>
      <h4>H4 heading</h4>
      <h5>H5 heading</h5>
      <h6>H6 heading</h6>
    </neon-card-body>
    <neon-card-body>
      <neon-anchor id="body-text" />
      <h2>Body Text</h2>
      <h3>Paragraphs</h3>
      <neon-note color="info">
        <span
          ><strong>Note:</strong> For improved readability, paragraph text is limited to a maximum width. The default
          width is 70ch but this is customizable in SASS.</span
        >
      </neon-note>
      <p>
        The default paragraph text. I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok.
        Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug
        master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof party
        pabst adaptogen plaid narwhal.
      </p>
      <p>
        <em
          >A paragraph with <span class="neon-color-text-info">emphasis</span>. I'm baby coloring book kogi raw denim
          letterpress, normcore artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid
          semiotics mlkshk irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica
          scenester, palo santo four loko roof party pabst adaptogen plaid narwhal.</em
        >
      </p>
      <p>
        <strong
          >A <span class="neon-color-text-info">strong</span> paragraph. I'm baby coloring book kogi raw denim
          letterpress, normcore artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid
          semiotics mlkshk irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica
          scenester, palo santo four loko roof party pabst adaptogen plaid narwhal.</strong
        >
      </p>
      <h3>Coloring text</h3>
      <p>
        To find out how to adjust text colors, see
        <neon-link href="/design/color#color-classes">Color classes</neon-link>.
      </p>
      <h3>Numeric text</h3>
      <p>
        Use the <em class="neon-color-text-info">neon-number</em> class the represent numeric data as tabular nums so
        that the numbers align vertically without having to resort to a monospaced font.
      </p>
      <span class="neon-number">-9876.543210</span>
      <span class="neon-number">-1234.567890</span>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Typography.ts"></script>
