import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonDropdown } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
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
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display content in a popup over the page');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
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
      toggleOpen: (key: string) => {
        data.value[key] = !data.value[key];
        data.value = { ...data.value };
      },
    });

    const sizeExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="sOpen" size="s" label="Small" @update:modelValue="toggleOpen('sOpen')">
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
  </neon-dropdown>
</div>`);

    const buttonStyleExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="solidButtonOpen" dropdown-style="solid-button" label="Solid" @update:modelValue="toggleOpen('solidButtonOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown :model-value="textOpen" dropdown-style="text-button" label="Text" @update:modelValue="toggleOpen('textOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const badgeStyleExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="badgeSquareOpen" dropdown-style="square-badge" label="XD" @update:modelValue="toggleOpen('badgeSquareOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown :model-value="badgeCircularOpen" dropdown-style="circular-badge" label="XD" @update:modelValue="toggleOpen('badgeCircularOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const iconExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="withIconOpen" icon="plus" label="With icon" @update:modelValue="toggleOpen('withIconOpen')">
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
  </neon-dropdown>
</div>`);

    const colorExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="primaryOpen" color="primary" label="Primary" @update:modelValue="toggleOpen('primaryOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown :model-value="warnTextOpen" color="warn" dropdown-style="text-button" label="Warning" @update:modelValue="toggleOpen('warnTextOpen')">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const positionExamples = ref(`<div class="example--horizontal">
  <neon-dropdown :model-value="blOpen" label="Bottom left aligned" @update:modelValue="toggleOpen('blOpen')">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown :model-value="trOpen" placement="top-right" label="Top right aligned" @update:modelValue="toggleOpen('trOpen')">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const openOnHoverExample = ref(`<div class="example--horizontal">
  <neon-dropdown :open-on-hover="true" :model-value="hoverOpen" dropdown-style="text-button" label="Open on hover" @update:modelValue="toggleOpen('hoverOpen')">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`);

    const examples = ref([
      {
        title: 'Dropdown sizes',
        template: sizeExamples.value,
        data,
      },
      {
        title: 'Dropdown colors',
        template: colorExamples.value,
        data,
      },
      {
        title: 'Dropdown with icons',
        template: iconExamples.value,
        data,
      },
      {
        title: 'Dropdown button styles',
        template: buttonStyleExamples.value,
        data,
      },
      {
        title: 'Dropdown badge styles',
        template: badgeStyleExamples.value,
        data,
      },
      {
        title: 'Dropdown positions',
        template: positionExamples.value,
        data,
      },
      {
        title: 'Dropdown open on hover',
        template: openOnHoverExample.value,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDropdown')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
