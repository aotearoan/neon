import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropZone, NeonInput } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonDropZone,
  },
})
export default class DropZone extends Vue {
  private dropZoneExamples = `<div class="neon-horizontal drop-zone-examples">
  <neon-drop-zone>
    <span>Drop files here to upload</span>
  </neon-drop-zone>
  <neon-drop-zone :circular="true">
    <span>This is a circular drop zone</span>
  </neon-drop-zone>
  <neon-drop-zone :circular="true" :disabled="true">
    <span>This drop zone is disabled</span>
  </neon-drop-zone>
</div>`;
}
