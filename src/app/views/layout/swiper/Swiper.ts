import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInline, NeonSwiper, NeonToggleChip } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Swiper',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    NeonSwiper,
    NeonToggleChip,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Handle horizontally overflowing content');

    const filterAccepted = ref<boolean>(false);
    const filterPending = ref<boolean>(false);
    const filterRejected = ref<boolean>(false);
    const filterPaid = ref<boolean>(false);
    const filterCancelled = ref<boolean>(false);

    const template = `<neon-inline gap="s" breakpoint="">
  <span>Status:</span>
  <neon-swiper>
    <neon-inline gap="s" breakpoint="">
      <neon-toggle-chip v-model="filterAccepted"
                        color="high-contrast"
                        label="Accepted"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterPending"
                        color="high-contrast"
                        label="Pending"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterRejected"
                        color="high-contrast"
                        label="Rejected"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterPaid"
                        color="high-contrast"
                        label="Paid"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterCancelled"
                        color="high-contrast"
                        label="Cancelled"
                        size="s"
                        :show-check="false"
      />
    </neon-inline>
  </neon-swiper>
</neon-inline>`;

    const templateVertical = `<neon-swiper orientation="vertical">
  <p>I'm baby lo-fi small batch mlkshk before they sold out ennui single-origin coffee pitchfork asymmetrical.
    Vice fingerstache put a bird on it keytar. Brunch pour-over umami edison bulb next level seitan scenester.
    Lo-fi vaporware subway tile locavore austin gatekeep, sustainable vape mustache selvage iPhone yuccie master
    cleanse everyday carry hashtag. Affogato hexagon enamel pin organic readymade.</p>
  <p>Tilde chartreuse direct trade, hella brunch etsy deep v. Letterpress meh ugh readymade single-origin
    coffee. Etsy wolf air plant swag yes plz man braid praxis skateboard narwhal salvia hot chicken bicycle
    rights messenger bag four loko. Hammock pinterest hot chicken, kombucha disrupt cold-pressed mlkshk
    try-hard. Kitsch pug pork belly hella Brooklyn, hot chicken shaman squid craft beer slow-carb health goth.
    Pug taxidermy lumbersexual man bun mustache jianbing single-origin coffee fanny pack glossier lomo marxism
    mixtape.</p>
  <p>Tumblr flexitarian listicle organic. Tbh echo park scenester, biodiesel tumeric activated charcoal
    blackbird spyplane af iPhone tonx ascot typewriter. Scenester subway tile prism chillwave cupping cred
    pinterest vibecession salvia next level vegan hell of shabby chic. Tattooed tilde semiotics roof party.
    Small batch ethical intelligentsia kombucha microdosing iPhone pinterest grailed butcher.</p>
</neon-swiper>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSwiper')));

    return {
      menuModel,
      headline,
      template,
      templateVertical,
      filterAccepted,
      filterPending,
      filterRejected,
      filterPaid,
      filterCancelled,
    };
  },
});
