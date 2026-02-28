<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Automatically handle horizontally overflowing content by placing it in a NeonSwiper component allowing for
          smooth horizontal scrolling with all input devices. Resize your screen to test it out.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Horizontal example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-inline breakpoint="" gap="s">
          <span>Status:</span>
          <neon-swiper>
            <neon-inline breakpoint="" gap="s">
              <neon-toggle-chip
                v-model="filterAccepted"
                :show-check="false"
                color="high-contrast"
                label="Accepted"
                size="s"
              />
              <neon-toggle-chip
                v-model="filterPending"
                :show-check="false"
                color="high-contrast"
                label="Pending"
                size="s"
              />
              <neon-toggle-chip
                v-model="filterRejected"
                :show-check="false"
                color="high-contrast"
                label="Rejected"
                size="s"
              />
              <neon-toggle-chip v-model="filterPaid" :show-check="false" color="high-contrast" label="Paid" size="s" />
              <neon-toggle-chip
                v-model="filterCancelled"
                :show-check="false"
                color="high-contrast"
                label="Cancelled"
                size="s"
              />
            </neon-inline>
          </neon-swiper>
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Vertical example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-swiper class="vertical-swiper-example" orientation="vertical">
          <p>
            I'm baby lo-fi small batch mlkshk before they sold out ennui single-origin coffee pitchfork asymmetrical.
            Vice fingerstache put a bird on it keytar. Brunch pour-over umami edison bulb next level seitan scenester.
            Lo-fi vaporware subway tile locavore austin gatekeep, sustainable vape mustache selvage iPhone yuccie master
            cleanse everyday carry hashtag. Affogato hexagon enamel pin organic readymade.
          </p>
          <p>
            Tilde chartreuse direct trade, hella brunch etsy deep v. Letterpress meh ugh readymade single-origin coffee.
            Etsy wolf air plant swag yes plz man braid praxis skateboard narwhal salvia hot chicken bicycle rights
            messenger bag four loko. Hammock pinterest hot chicken, kombucha disrupt cold-pressed mlkshk try-hard.
            Kitsch pug pork belly hella Brooklyn, hot chicken shaman squid craft beer slow-carb health goth. Pug
            taxidermy lumbersexual man bun mustache jianbing single-origin coffee fanny pack glossier lomo marxism
            mixtape.
          </p>
          <p>
            Tumblr flexitarian listicle organic. Tbh echo park scenester, biodiesel tumeric activated charcoal blackbird
            spyplane af iPhone tonx ascot typewriter. Scenester subway tile prism chillwave cupping cred pinterest
            vibecession salvia next level vegan hell of shabby chic. Tattooed tilde semiotics roof party. Small batch
            ethical intelligentsia kombucha microdosing iPhone pinterest grailed butcher.
          </p>
        </neon-swiper>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="templateVertical" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Swiper.ts"></script>
