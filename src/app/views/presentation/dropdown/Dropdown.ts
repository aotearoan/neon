import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonDropdown } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dropdown',
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdown,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display content in a popup over the page');
    const data = ref({
      sOpen: false,
      mOpen: false,
      lOpen: false,
      disabledOpen: false,
      withIconOpen: false,
      iconOnlyOpen: false,
      noIndicatorOpen: false,
      textOpen: false,
      solidButtonOpen: false,
      primaryOpen: false,
      warnTextOpen: false,
      badgeSquareOpen: false,
      badgeCircularOpen: false,
      trOpen: false,
      blOpen: false,
      hoverOpen: false,
    });

    const sizeExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="sOpen" size="s" label="Small">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="mOpen" size="m" label="Medium">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="lOpen" size="l" label="Large">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const buttonStyleExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="solidButtonOpen" dropdown-style="solid-button" label="Solid">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="textOpen" dropdown-style="text-button" label="Text">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const badgeStyleExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" label="XD">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeCircularOpen" dropdown-style="circular-badge" label="XD">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const iconExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="withIconOpen" icon="plus" label="With icon">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="iconOnlyOpen" icon="plus">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" icon="user">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="noIndicatorOpen" label="No indicator" :indicator="false">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const colorExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="primaryOpen" color="primary" label="Primary">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="warnTextOpen" color="warn" dropdown-style="text-button" label="Warning">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const positionExamples = ref(`<div class="example--horizontal">
  <neon-dropdown v-model="blOpen" label="Bottom left aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="trOpen" placement="top-right" label="Top right aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const openOnHoverExample = ref(`<div class="example--horizontal">
  <neon-dropdown :open-on-hover="true" v-model="hoverOpen" dropdown-style="text-button" label="Open on hover">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const examples = ref([
      {
        title: 'Dropdown sizes',
        template: sizeExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown colors',
        template: colorExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown with icons',
        template: iconExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown button styles',
        template: buttonStyleExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown badge styles',
        template: badgeStyleExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown positions',
        template: positionExamples.value,
        data: data.value,
      },
      {
        title: 'Dropdown open on hover',
        template: openOnHoverExample.value,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonDropdown'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
