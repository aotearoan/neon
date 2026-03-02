import type { DeclarationReflection } from 'typedoc';
import type { MenuModel } from '@/app/Menu';

/**
 * Load and store the classes documentation from the JSON file.
 */
export class SupportingClasses {
  private classesDoc: DeclarationReflection | null = null;
  private classList: string[] | null = null;
  private menu: MenuModel[] = [];

  public async init(jsonPath: string, context: string) {
    if (!this.classesDoc) {
      this.classesDoc = await this.fetchJson<DeclarationReflection>(jsonPath);
      this.classList = this.toList(this.classesDoc);
      this.menu = this.toMenu(context, this.classesDoc);
    }
  }

  public getClassMenu(): MenuModel[] {
    return this.menu;
  }

  public getClassList(): string[] {
    return this.classList || [];
  }

  public getClassDoc(className: string) {
    return this.classesDoc?.children?.find(
      (declaration) => declaration.name === className || declaration.name.endsWith(`/${className}`),
    ) as unknown as DeclarationReflection;
  }

  private toMenu(context: string, declaration: DeclarationReflection) {
    const menuModel: MenuModel[] = [];

    declaration.children
      ?.filter((child) => child.children)
      .forEach((child) => {
        const [lvl1, lvl2, componentName] = child.name.split('/');

        // level 1
        let lvl1Menu = menuModel.find((menu) => menu.path === `${context}/${lvl1}`);

        if (!lvl1Menu) {
          lvl1Menu = {
            name: lvl1.replace('-', ' '),
            path: `${context}/${lvl1}`,
            children: [],
          };
          menuModel.push(lvl1Menu);
        }

        // level 2
        let lvl2Menu = lvl1Menu.children?.find((menu) => menu.path === lvl2);

        if (!lvl2Menu) {
          lvl2Menu = {
            name: lvl2.replace('-', ' '),
            path: lvl2,
            children: [],
          };
          lvl1Menu.children?.push(lvl2Menu);
        }

        // level 3
        lvl2Menu.children?.push({
          name: componentName.replace('-', ' '),
          path: componentName,
        });
      });

    return menuModel;
  }

  private async fetchJson<T>(jsonPath: string): Promise<T> {
    const url = `${import.meta.env.VITE_RESOURCE_URL}${jsonPath}`;
    return fetch(url).then((response) => response.json() as Promise<T>);
  }

  private toList(declaration: DeclarationReflection) {
    return declaration.children?.filter((child) => child.children).map((child) => child.name) || null;
  }
}
