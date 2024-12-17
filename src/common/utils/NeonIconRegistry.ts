/**
 * Manage a map of SVG icons for use with the <a href="/presentation/icon">NeonIcon</a> component. See the
 * <a href="/presentation/icon#description">description</a> page for details on how
 * to prepare an SVG for Neon.
 */
export class NeonIconRegistry {
  private static icons: Record<string, string> = {};

  /**
   * Add an icon to the registry.
   *
   * @param name Icon name, this corresponds to the <em>name</em> property in NeonIcon.
   * @param svg The string representation of the SVG.
   * @param overwrite Overwrite an existing icon if the name is a duplicate.
   *
   * @returns Boolean indicating if the icon was successfully registered.
   */
  public static addIcon(name: string, svg: string, overwrite = true): boolean {
    const canAdd = overwrite || !NeonIconRegistry.icons[name];

    if (canAdd) {
      NeonIconRegistry.icons[name] = svg;
      return true;
    }

    return false;
  }

  /**
   * Remove an icon from the registry.
   *
   * @param name The name of the icon to remove.
   */
  public static removeIcon(name: string) {
    delete NeonIconRegistry.icons[name];
  }

  /**
   * Get an icon SVG by name.
   *
   * @param name The name of the icon to remove.
   *
   * @returns The icon SVG as a string.
   */
  public static getIcon(name: string) {
    return NeonIconRegistry.icons[name];
  }

  /**
   * List all registered icon names.
   */
  public static list() {
    return Object.keys(NeonIconRegistry.icons);
  }

  /**
   * Clear the icon registry.
   */
  public static clear() {
    NeonIconRegistry.icons = {};
  }
}
