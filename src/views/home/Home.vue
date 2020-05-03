<template>
    <neon-grid id="home" :layouts="layouts">
      <neon-grid-area id="sidenav">
      </neon-grid-area>
      <neon-grid-area id="typography">
        <neon-card>
          <neon-card-header>
            <h1>Typography</h1>
          </neon-card-header>
          <neon-card-body>
            <h1>H1 heading</h1>
            <h2>H2 heading</h2>
            <h3>H3 heading</h3>
            <h4>H4 heading</h4>
            <h5>H5 heading</h5>
            <h6>H6 heading</h6>
            <p>I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof party pabst adaptogen plaid narwhal.</p>
            <p><em>I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof party pabst adaptogen plaid narwhal.</em></p>
            <p><strong>I'm baby coloring book kogi raw denim letterpress, normcore artisan pok pok. Cornhole vice lumbersexual affogato tumblr knausgaard. Raw denim squid semiotics mlkshk irony thundercats. Pug master cleanse hot chicken meggings succulents. Church-key helvetica scenester, palo santo four loko roof party pabst adaptogen plaid narwhal.</strong></p>
            <span class="neon-number">-9876.543210</span>
            <span class="neon-number">-1234.567890</span>
            <span class="neon-color-text-primary">This is the primary color</span>
            <span class="neon-color-text-info">This is the info color</span>
            <span class="neon-color-text-success">This is the success color</span>
            <span class="neon-color-text-warn">This is the warn color</span>
            <span class="neon-color-text-error">This is the error color</span>
          </neon-card-body>
        </neon-card>
      </neon-grid-area>
      <neon-grid-area id="colorPalette">
        <neon-card>
          <neon-card-header>
            <h1>Color palettes</h1>
          </neon-card-header>
          <neon-card-body>
            <div class="colors">
              <div v-for="color in colors" :key="color" class="color-list">
                <div v-for="i in 5" :key="i" class="color-item dark-text" :ref="`${color}l${6 - i}`"
                     :class="`neon-${color}-bg-color-l${6 - i}`">{{ `${color}-l${6 - i}` }}</div>
                <div class="color-item" :class="`neon-${color}-bg-color-default`"></div>
                <div v-for="i in 5" :key="i" class="color-item light-text" :ref="`${color}d${i}`"
                     :class="`neon-${color}-bg-color-d${i}`">{{ `${color}-d${i}` }}</div>
              </div>
            </div>
          </neon-card-body>
        </neon-card>
      </neon-grid-area>
    </neon-grid>
</template>

<script lang="ts" src="./Home.ts"></script>
