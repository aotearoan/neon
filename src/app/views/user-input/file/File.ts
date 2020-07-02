import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFile } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFile,
    ComponentDocumentation,
  },
})
export default class File extends Vue {
  private menuModel: MenuModel | null = null;

  private data = {
    files: [],
  };

  private fileExamples = `<div class="neon-vertically-spaced">
  <neon-file @input="files = $event" label="Select file" />
  <neon-file @input="files = $event" color="low-contrast" :multiple="true" label="Add files" icon="plus" />
  <neon-file @input="files = $event" :multiple="true" label="Add SVG files" />
  <neon-file @input="files = $event" :direct-upload="true" :multiple="true" label="Direct upload" />
</div>`;

  private examples = [
    {
      title: 'File example',
      template: this.fileExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonFile');
  }
}
