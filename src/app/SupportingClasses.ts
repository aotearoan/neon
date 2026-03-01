import type { DeclarationReflection } from 'typedoc';

/**
 * Load and store the classes documentation from the JSON file.
 */
export class SupportingClasses {
  private classesDoc: DeclarationReflection | null = null;
  private classList: string[] | null = null;

  public async init(jsonPath: string) {
    if (!this.classesDoc) {
      this.classesDoc = await this.fetchJson<DeclarationReflection>(jsonPath);
      this.classList = this.toList(this.classesDoc);
    }
  }

  public getClassList(): string[] {
    return this.classList || [];
  }

  public getClassDoc(className: string) {
    return this.classesDoc?.children?.find(
      (declaration) => declaration.name === className || declaration.name.endsWith(`/${className}`),
    ) as unknown as DeclarationReflection;
  }

  private async fetchJson<T>(jsonPath: string): Promise<T> {
    const url = `${import.meta.env.VITE_RESOURCE_URL}${jsonPath}`;
    return fetch(url).then((response) => response.json() as Promise<T>);
  }

  private toList(declaration: DeclarationReflection) {
    return declaration.children?.filter((child) => child.children).map((child) => child.name) || null;
  }
}
