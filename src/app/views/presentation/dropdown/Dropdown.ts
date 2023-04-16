import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonDropdown } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dropdown',
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdown,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display content in a popup over the page');

    const sOpen = ref(false);
    const mOpen = ref(false);
    const lOpen = ref(false);
    const disabledOpen = ref(false);
    const withIconOpen = ref(false);
    const iconOnlyOpen = ref(false);
    const noIndicatorOpen = ref(false);
    const textOpen = ref(false);
    const solidButtonOpen = ref(false);
    const primaryOpen = ref(false);
    const warnTextOpen = ref(false);
    const badgeSquareOpen = ref(false);
    const badgeCircularOpen = ref(false);
    const trOpen = ref(false);
    const blOpen = ref(false);
    const hoverOpen = ref(false);

    const sizeExamples = `<neon-dropdown v-model="sOpen" label="Small" size="s">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="mOpen" label="Medium" size="m">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="lOpen" label="Large" size="l">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const buttonStyleExamples = `<neon-dropdown v-model="solidButtonOpen"
               dropdown-style="solid-button"
               label="Solid"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="textOpen"
               dropdown-style="text-button"
               label="Text"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const badgeStyleExamples = `<neon-dropdown v-model="badgeSquareOpen"
               dropdown-style="square-badge"
               label="XD"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="badgeCircularOpen"
               dropdown-style="circular-badge"
               label="XD"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const iconExamples = `<neon-dropdown v-model="withIconOpen"
               icon="plus"
               label="With icon"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="iconOnlyOpen" icon="plus">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="badgeSquareOpen"
               dropdown-style="square-badge"
               icon="user"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="noIndicatorOpen"
               :indicator="false"
               label="No indicator"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const colorExamples = `<neon-dropdown v-model="primaryOpen"
               color="primary"
               label="Primary"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="warnTextOpen"
               color="warn"
               dropdown-style="text-button"
               label="Warning"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const positionExamples = `<neon-dropdown v-model="blOpen" label="Bottom left aligned">
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="trOpen"
               label="Top right aligned"
               placement="top-right"
>
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>`;

    const openOnHoverExample = `<neon-dropdown v-model="hoverOpen"
               :open-on-hover="true"
               dropdown-style="text-button"
               label="Open on hover"
>
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDropdown')));

    return {
      menuModel,
      headline,
      sizeExamples,
      colorExamples,
      iconExamples,
      buttonStyleExamples,
      badgeStyleExamples,
      positionExamples,
      openOnHoverExample,
      sOpen,
      mOpen,
      lOpen,
      disabledOpen,
      withIconOpen,
      iconOnlyOpen,
      noIndicatorOpen,
      textOpen,
      solidButtonOpen,
      primaryOpen,
      warnTextOpen,
      badgeSquareOpen,
      badgeCircularOpen,
      trOpen,
      blOpen,
      hoverOpen,
    };
  },
});
