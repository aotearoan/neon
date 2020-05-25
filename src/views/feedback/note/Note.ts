import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonNote } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
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

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['note-content']],
      },
    ];
  }
}
