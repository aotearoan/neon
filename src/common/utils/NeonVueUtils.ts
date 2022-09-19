export class NeonVueUtils {
  public static sanitizeAttributes(attributes: Record<string, any>, ...keys: string[]) {
    const result: Record<string, any> = {};
    Object.keys(attributes).filter((k) => keys.indexOf(k) < 0).forEach((k) => result[k] = attributes[k]);
    return result;
  }
}
