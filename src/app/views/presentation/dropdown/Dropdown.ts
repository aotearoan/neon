import type { Ref } from 'vue';
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

    const data: Record<string, Ref<boolean>> = {
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

    const toggleOpen = (key: string) => {
      if (data[key]) {
        data[key].value = !data[key].value;
      }
    };

    const sizeExamples = `<neon-dropdown :model-value="sOpen" size="s" label="Small" @update:modelValue="toggleOpen('sOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="mOpen" size="m" label="Medium" @update:modelValue="toggleOpen('mOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="lOpen" size="l" label="Large" @update:modelValue="toggleOpen('lOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const buttonStyleExamples = `<neon-dropdown :model-value="solidButtonOpen" dropdown-style="solid-button" label="Solid" @update:modelValue="toggleOpen('solidButtonOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="textOpen" dropdown-style="text-button" label="Text" @update:modelValue="toggleOpen('textOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const badgeStyleExamples = `<neon-dropdown :model-value="badgeSquareOpen" dropdown-style="square-badge" label="XD" @update:modelValue="toggleOpen('badgeSquareOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="badgeCircularOpen" dropdown-style="circular-badge" label="XD" @update:modelValue="toggleOpen('badgeCircularOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const iconExamples = `<neon-dropdown :model-value="withIconOpen" icon="plus" label="With icon" @update:modelValue="toggleOpen('withIconOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="iconOnlyOpen" icon="plus" @update:modelValue="toggleOpen('iconOnlyOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="badgeSquareOpen" dropdown-style="square-badge" icon="user" @update:modelValue="toggleOpen('badgeSquareOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="noIndicatorOpen" label="No indicator" :indicator="false" @update:modelValue="toggleOpen('noIndicatorOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const colorExamples = `<neon-dropdown :model-value="primaryOpen" color="primary" label="Primary" @update:modelValue="toggleOpen('primaryOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="warnTextOpen" color="warn" dropdown-style="text-button" label="Warning" @update:modelValue="toggleOpen('warnTextOpen')">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`;

    const positionExamples = `<neon-dropdown :model-value="blOpen" label="Bottom left aligned" @update:modelValue="toggleOpen('blOpen')">
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown :model-value="trOpen" placement="top-right" label="Top right aligned" @update:modelValue="toggleOpen('trOpen')">
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>`;

    const openOnHoverExample = `<neon-dropdown :open-on-hover="true" :model-value="hoverOpen" dropdown-style="text-button" label="Open on hover" @update:modelValue="toggleOpen('hoverOpen')">
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
      toggleOpen,
    };
  },
});
