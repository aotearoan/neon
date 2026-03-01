import type { DeclarationReflection } from 'typedoc';
import { SupportingClasses } from './SupportingClasses';

/**
 * Loads and provides access to the documentation for the supporting classes.
 */
export class SupportingClassesDocs {
  private static readonly enums = new SupportingClasses();
  private static readonly models = new SupportingClasses();
  private static readonly utils = new SupportingClasses();
  private static initialised = false;

  public static async init() {
    if (!SupportingClassesDocs.initialised) {
      await Promise.all([
        SupportingClassesDocs.enums.init('docs/config/enums.json'),
        SupportingClassesDocs.models.init('docs/config/models.json'),
        SupportingClassesDocs.utils.init('docs/config/utils.json'),
      ]).then(() => (SupportingClassesDocs.initialised = true));
    }
  }

  public static getClassDocs(classType: string, className: string): DeclarationReflection | null {
    switch (classType) {
      case 'enums':
        return SupportingClassesDocs.enums.getClassDoc(className);
      case 'models':
        return SupportingClassesDocs.models.getClassDoc(className);
      case 'utils':
        return SupportingClassesDocs.utils.getClassDoc(className);
    }

    return null;
  }

  public static enumList(): string[] {
    return SupportingClassesDocs.enums.getClassList();
  }

  public static modelList(): string[] {
    return SupportingClassesDocs.models.getClassList();
  }

  public static utilList(): string[] {
    return SupportingClassesDocs.utils.getClassList();
  }
}
