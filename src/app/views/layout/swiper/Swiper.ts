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

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSwiper')));

    return {
      menuModel,
      headline,
      template,
      filterAccepted,
      filterPending,
      filterRejected,
      filterPaid,
      filterCancelled,
    };
  },
});
