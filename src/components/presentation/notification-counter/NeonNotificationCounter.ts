import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NeonNotificationCounter extends Vue {
  @Prop()
  public count?: number;
}
