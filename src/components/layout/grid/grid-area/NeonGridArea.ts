import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export class NeonGridArea extends Vue {
  /**
   * identifier of the grid area (this should match a named area in the grid layout)
   */
  @Prop({ required: true })
  public id!: string;
}

export default NeonGridArea;
