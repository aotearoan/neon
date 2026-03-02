import type { DeclarationReflection } from 'typedoc';
import { SupportingClasses } from './SupportingClasses';
import type { MenuModel } from '@/app/Menu';

/**
 * Loads and provides access to the documentation for the supporting classes.
 */
export class SupportingClassesDocs {
  private static readonly model = new SupportingClasses();
  private static readonly utils = new SupportingClasses();
  private static initialised = false;

  public static async init() {
    if (!SupportingClassesDocs.initialised) {
      await Promise.all([
        SupportingClassesDocs.model.init('docs/model.json', 'model'),
        SupportingClassesDocs.utils.init('docs/utils.json', 'utils'),
      ]).then(() => (SupportingClassesDocs.initialised = true));
    }
  }

  public static getClassDocs(classType: string, className: string): DeclarationReflection | null {
    switch (classType) {
      case 'model':
        return SupportingClassesDocs.model.getClassDoc(className);
      case 'utils':
        return SupportingClassesDocs.utils.getClassDoc(className);
    }

    return null;
  }

  public static modelList(): string[] {
    return SupportingClassesDocs.model.getClassList();
  }

  public static utilList(): string[] {
    return SupportingClassesDocs.utils.getClassList();
  }

  public static modelMenu(): MenuModel[] {
    return SupportingClassesDocs.model.getClassMenu();
  }

  public static utilMenu(): MenuModel[] {
    return SupportingClassesDocs.utils.getClassMenu();
  }
}
