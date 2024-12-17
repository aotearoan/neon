import enums from './config/enums.json';
import models from './config/models.json';
import utils from './config/utils.json';
import type { DeclarationReflection } from 'typedoc';

export const getClassDocs = (classType: string, className: string): DeclarationReflection | null => {
  switch (classType) {
    case 'enums':
      return enums.children.find(
        (enumConfig) => enumConfig.name === className || enumConfig.name.endsWith(`/${className}`),
      ) as unknown as DeclarationReflection;
    case 'models':
      return models.children.find(
        (modelConfig) => modelConfig.name === className || modelConfig.name.endsWith(`/${className}`),
      ) as unknown as DeclarationReflection;
    case 'utils':
      return utils.children.find(
        (utilConfig) => utilConfig.name === className || utilConfig.name.endsWith(`/${className}`),
      ) as unknown as DeclarationReflection;
  }

  return null;
};

export const enumList: string[] = enums.children
  .filter((enumConfig) => enumConfig.children)
  .map((enumConfig) => enumConfig.name);

export const modelList: string[] = models.children
  .filter((modelConfig) => modelConfig.children)
  .map((modelConfig) => modelConfig.name);

export const utilsList: string[] = utils.children
  .filter((utilConfig) => utilConfig.children)
  .map((utilConfig) => utilConfig.name);
