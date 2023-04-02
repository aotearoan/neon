import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFieldGroup, NeonInput, NeonInputIndicator } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'InputIndicator',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFieldGroup,
    NeonInput,
    NeonInputIndicator,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate read only information about an input');

    const data = ref({
      field1: '',
      field2: '',
      field3: '',
    });

    const inputIndicatorExamples = `<div class="neon-vertically-spaced">
  <neon-field-group>
    <neon-input type="text" size="s" v-model="field1" placeholder="Rate" />
    <neon-input-indicator size="s" label="%" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator icon="user" aria-label="Username" for="userField" />
    <neon-input id="userField" type="text" v-model="field2" placeholder="Username" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator size="l" icon="mail" />
    <neon-input type="text" size="l" v-model="field3" placeholder="Username" />
    <neon-input-indicator size="l" label="@aol.com" />
  </neon-field-group>
</div>`;

    const examples = ref([
      {
        title: 'Input Indicator Examples',
        template: inputIndicatorExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInputIndicator')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
