import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor, NeonResponsive } from '@/components';

@Component
export default class Note extends Vue {
  private noteColors = Object.values(NeonFunctionalColor);

  private closeNote(color: NeonFunctionalColor) {
    this.noteColors = this.noteColors.filter(c => c !== color);
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
