export class NeonIconRegistry {
  private static icons: Record<string, string> = {};

  public static addIcon(name: string, svg: string, overwrite = true): boolean {
    const canAdd = overwrite || !NeonIconRegistry.icons[name];

    if (canAdd) {
      NeonIconRegistry.icons[name] = svg;
      return true;
    }

    return false;
  }

  public static removeIcon(name: string) {
    delete NeonIconRegistry.icons[name];
  }

  public static getIcon(name: string) {
    return NeonIconRegistry.icons[name];
  }

  public static list() {
    return Object.keys(NeonIconRegistry.icons);
  }

  public static clear() {
    NeonIconRegistry.icons = {};
  }
}
