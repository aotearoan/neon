import { NeonButton, NeonCard, NeonCardBody, NeonHeader, NeonIcon, NeonLabel, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { defineComponent, onMounted, ref } from 'vue';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AppHeader',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonHeader,
    NeonIcon,
    NeonLabel,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = 'Multi-level header for use in layout components';

    const examplePage = `<neon-header
  title="Page title"
  subtitle="This is a subtitle"
  :back-button="true"
  :breadcrumbs="breadcrumbs"
>
  <template #labels>
    <neon-label color="success" label="Published" size="xs" />
    <neon-icon color="info" name="information-circle" />
  </template>
  <template #actions>
    <neon-button button-style="outline" color="high-contrast" label="Decline" size="m" />
    <neon-button button-style="outline" color="high-contrast" label="Action" size="m" />
    <neon-button label="Save" size="m" />
  </template>
</neon-header>`;

    const exampleSection = `<neon-header
  level="section"
  title="Section title"
  subtitle="This is a subtitle"
>
  <template #labels>
    <neon-label color="success" label="Published" size="xs" />
    <neon-icon color="info" name="information-circle" />
  </template>
  <template #actions>
    <neon-button button-style="outline" color="high-contrast" label="Decline" size="s" />
    <neon-button button-style="outline" color="high-contrast" label="Action" size="s" />
    <neon-button label="Save" size="s" />
  </template>
</neon-header>`;

    const exampleSubsection = `<neon-header
  level="sub-section"
  title="Sub-section title"
  subtitle="This is a subtitle"
>
  <template #labels>
    <neon-label color="success" label="Published" size="xs" />
    <neon-icon color="info" name="information-circle" />
  </template>
  <template #actions>
    <neon-button button-style="outline" color="high-contrast" label="Decline" size="s" />
    <neon-button button-style="outline" color="high-contrast" label="Action" size="s" />
    <neon-button label="Save" size="s" />
  </template>
</neon-header>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonHeader')));

    return {
      menuModel,
      headline,
      examplePage,
      exampleSection,
      exampleSubsection,
      breadcrumbs: breadcrumbsFixture(),
    };
  },
});
