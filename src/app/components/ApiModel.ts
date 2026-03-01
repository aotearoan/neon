export interface TagModel {
  title: string;
  description: string;
}

export interface TagsModel {
  type?: TagModel[];
  ignore?: boolean;
}

export interface NameModel {
  name: string;
  elements?: NameModel[];
}

export interface PropTypeModel {
  name?: string;
  elements?: NameModel[];
}

export interface EventTypeModel {
  names: string[];
}

export interface PropDefaultModel {
  value?: string;
}

export interface BindingTypeModel {
  name: string;
}

export interface BindingModel {
  name: string;
  description: string;
  type: BindingTypeModel;
}

export interface SlotModel {
  name: string;
  description: string;
  scoped: boolean;
  bindings?: BindingModel[];
}

export interface PropertyModel {
  name?: string;
  description?: string;
  required?: boolean;
  type?: PropTypeModel;
  defaultValue?: PropDefaultModel;
  tags?: TagsModel;
}

export interface EventModel {
  name?: string;
  description?: boolean;
  type?: EventTypeModel;
}

export interface DocumentationModel {
  props: PropertyModel[];
  events: EventModel[];
  description?: string;
  slots?: SlotModel[];
}
