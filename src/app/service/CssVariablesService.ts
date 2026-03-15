import { type CssBlock, type CssVariable, CssVariableType } from '@/app/model/css';

export class CssVariablesService {
  private static readonly jsonGlobalUrl = `${import.meta.env.VITE_RESOURCE_URL}docs/sass/variables-global.json`;
  private static readonly jsonLightModeUrl = `${import.meta.env.VITE_RESOURCE_URL}docs/sass/variables-light.json`;
  private static readonly jsonDarkModeUrl = `${import.meta.env.VITE_RESOURCE_URL}docs/sass/variables-dark.json`;

  private static variables: null | Array<CssVariable> = null;
  private static componentVariables: Record<string, Array<CssVariable>> = {};

  public static async getVariables(): Promise<Array<CssVariable>> {
    if (!CssVariablesService.variables) {
      await CssVariablesService.init();
    }

    return CssVariablesService.variables || [];
  }

  public static async getComponentVariables(componentName: string): Promise<Array<CssVariable> | undefined> {
    if (!CssVariablesService.variables) {
      await CssVariablesService.init();
    }

    return CssVariablesService.componentVariables[componentName];
  }

  private static async readGlobals() {
    return await fetch(CssVariablesService.jsonGlobalUrl).then(async (response) => {
      return await response.json().then((blocks: Array<CssBlock>) => {
        const variables: Array<CssVariable> = [];

        // global variables
        blocks.forEach((block) => {
          block.properties.forEach((property) =>
            variables.push({
              id: property.name,
              name: property.name,
              type: CssVariableType.Global,
              defaultValue: property.value,
              description: property.comment.text,
              annotations: property.comment.annotations,
            }),
          );
        });

        return variables;
      });
    });
  }

  private static async readModeVariables() {
    const variables: Record<string, CssVariable> = {};

    // add light mode variables
    await fetch(CssVariablesService.jsonLightModeUrl).then(async (response) => {
      await response.json().then((blocks: Array<CssBlock>) => {
        blocks.forEach((block) =>
          block.properties.forEach(
            (property) =>
              (variables[property.name] = {
                id: property.name,
                name: property.name,
                type: CssVariableType.Themed,
                defaultValue: property.value,
                description: property.comment.text,
                annotations: property.comment.annotations,
              }),
          ),
        );
      });
    });

    // add dark mode default values to light mode variables
    await fetch(CssVariablesService.jsonDarkModeUrl).then(async (response) => {
      await response.json().then((blocks: Array<CssBlock>) => {
        blocks.forEach((block) =>
          block.properties.forEach((property) => (variables[property.name].defaultValueAlt = property.value)),
        );
      });
    });

    return Object.values(variables);
  }

  private static async init() {
    const globalVariables = await CssVariablesService.readGlobals();
    const modeVariables = await CssVariablesService.readModeVariables();

    CssVariablesService.variables = [...globalVariables, ...modeVariables];

    CssVariablesService.variables
      .filter((variable) => variable.annotations?.component)
      .forEach((variable) => {
        const componentAnnotation = variable.annotations?.component;
        if (componentAnnotation) {
          const componentNames = componentAnnotation.split(',');
          componentNames.forEach((componentName) => {
            if (!CssVariablesService.componentVariables[componentName]) {
              CssVariablesService.componentVariables[componentName] = [];
            }

            CssVariablesService.componentVariables[componentName].push(variable);
          });
        }
      });
  }
}
