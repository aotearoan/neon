import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropdownMenu } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonDropdownMenu,
  },
})
export default class DropdownMenu extends Vue {
  private data = {
    model: [
      {
        key: 'k1',
        label: 'Label only',
      },
      {
        key: 'k2',
        label: 'With icon',
        icon: 'user',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Disabled option',
        icon: 'plus',
        disabled: true,
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'External link',
        href: 'http://getskeleton.com',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Internal link',
        href: '/presentation/dropdown',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Disabled link',
        icon: 'download',
        href: '/presentation/dropdown',
        separatorBefore: true,
        disabled: true,
      },
    ],
  };

  private examples = `<div class="neon-vertically-spaced">
  <neon-dropdown-menu size="s" color="primary" label="Small menu" :model="model" />
  <neon-dropdown-menu size="m" color="primary" label="Medium menu" :model="model" />
  <neon-dropdown-menu size="l" color="primary" label="Large menu" :model="model" />
</div>`;
}
