import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFile } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFile,
  },
})
export default class File extends Vue {
  private data = {
    files: [],
  };

  private fileExamples = `<div class="neon-vertically-spaced">
  <neon-file @input="files = $event" label="Select file" />
  <neon-file @input="files = $event" color="low-contrast" :multiple="true" label="Add files" icon="plus" />
  <neon-file @input="files = $event" :multiple="true" accept="*.svg" label="Add SVG files" />
</div>`;
}
