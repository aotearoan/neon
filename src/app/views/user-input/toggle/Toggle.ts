import { Component, Vue } from 'vue-property-decorator';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFunctionalColor,
  NeonSize,
  NeonToggle,
} from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonToggle,
    ComponentDocumentation,
  },
})
export default class Toggle extends Vue {
  private menuModel: MenuModel | null = null;

  private data = {
    model: [
      {
        key: 'key-1',
        label: 'Label 1',
      },
      {
        key: 'key-2',
        label: 'Label 2',
      },
      {
        key: 'key-3',
        label: 'Label 3',
        disabled: true,
      },
    ],
    iconModel: [
      {
        key: 'left',
        icon: 'align-left',
      },
      {
        key: 'centered',
        icon: 'align-center',
      },
      {
        key: 'right',
        icon: 'align-right',
        disabled: true,
      },
    ],
    selected: 'key-2',
    iconSelected: 'centered',
    colors: Object.values(NeonFunctionalColor),
    sizes: Object.values(NeonSize),
  };

  private toggleTemplate = `<div>
  <div class="example--horizontal neon-vertically-spaced">
    <div v-for="size in sizes" :key="\`toggle-\${size}\`" class="neon-vertically-spaced">
      <neon-toggle
        v-for="color in colors"
        :key="\`toggle-\${size}-\${color}\`"
        :name="\`toggle-\${size}-\${color}\`"
        :size="size"
        :color="color"
        :model="model"
        v-model="selected"
      />
      <neon-toggle
        :name="\`toggle-\${size}-disabled\`"
        :size="size"
        color="info"
        :disabled="true"
        :model="model"
        v-model="selected"
      />
    </div>
  </div>
  <pre>selected = {{ selected }}</pre>
</div>`;

  private iconTemplate = `<div>
  <div class="example--horizontal neon-vertically-spaced">
    <div v-for="size in sizes" :key="\`toggle-icon-\${size}\`" class="neon-vertically-spaced">
      <neon-toggle
        v-for="color in colors"
        :key="\`toggle-icon-\${size}-\${color}\`"
        :name="\`toggle-icon-\${size}-\${color}\`"
        :size="size"
        :color="color"
        :model="iconModel"
        v-model="iconSelected"
      />
      <neon-toggle
        :name="\`toggle-icon-\${size}-disabled\`"
        :size="size"
        color="info"
        :disabled="true"
        :model="iconModel"
        v-model="iconSelected"
      />
    </div>
  </div>
  <pre>selected = {{ iconSelected }}</pre>
</div>`;

  private radioButtonsTemplate = `<div>
  <div class="example--horizontal">
    <div v-for="size in sizes" :key="\`rb-\${size}\`" class="neon-vertically-spaced">
      <neon-toggle
        :name="\`rb-neutral-\${size}\`"
        :size="size"
        toggleStyle="radio-buttons"
        color="neutral"
        orientation="horizontal"
        :model="model"
        v-model="selected"
      />
      <neon-toggle
        :name="\`rb-\${size}\`"
        :size="size"
        toggleStyle="radio-buttons"
        color="primary"
        :model="model"
        v-model="selected"
      />
      <neon-toggle
        :name="\`rb-\${size}-disabled\`"
        :size="size"
        toggleStyle="radio-buttons"
        color="info"
        :disabled="true"
        :model="model"
        v-model="selected"
      />
    </div>
  </div>
  <pre>selected = {{ selected }}</pre>
</div>`;

  private examples = [
    {
      title: 'Toggle with labels',
      template: this.toggleTemplate,
      data: this.data,
    },
    {
      title: 'Toggle with icons',
      template: this.iconTemplate,
      data: this.data,
    },
    {
      title: 'Radio buttons',
      template: this.radioButtonsTemplate,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonToggle');
  }
}
