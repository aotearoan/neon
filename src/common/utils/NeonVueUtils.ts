export class NeonVueUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static sanitizeAttributes(attributes: Record<string, any>, ...keys: string[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: Record<string, any> = {};
    Object.keys(attributes)
      .filter((k) => keys.indexOf(k) < 0)
      .forEach((k) => (result[k] = attributes[k]));
    return result;
  }
}
