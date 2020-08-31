import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * A grid area is the basic container corresponding to a grid area defined in the NeonGrid component.
 */
@Component
export class NeonGridArea extends Vue {
  /**
   * Identifier of the grid area (this should match a named area in the grid layout)
   */
  @Prop({ required: true })
  public id!: string;
}

export default NeonGridArea;
