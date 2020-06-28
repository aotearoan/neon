import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../../common/enums/NeonFunctionalColor';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonNote,
  },
})
export default class Note extends Vue {
  private noteColors = Object.values(NeonFunctionalColor);

  private closeNote(color: NeonFunctionalColor) {
    this.noteColors = this.noteColors.filter((c) => c !== color);
  }
}
