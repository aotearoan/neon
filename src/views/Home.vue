<template>
  <div>
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
    <span class="neon-color-primary">This is the primary color</span>
    <span class="neon-color-info">This is the info color</span>
    <span class="neon-color-success">This is the success color</span>
    <span class="neon-color-warn">This is the warn color</span>
    <span class="neon-color-error">This is the error color</span>
    <hr>
    <h1>Color Palettes</h1>
    <div class="colors">
      <div v-for="color in colors" :key="color" class="color-list">
        <div v-for="i in 10" :key="i" class="color-item"
             :class="
               [
                 `neon-bg-color-${color}-${i * 10}`,
                 i <= 5 ? 'neon-color-neutral-100' : 'neon-color-neutral-10'
               ]
             ">{{ `${color}-${i * 10}` }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
