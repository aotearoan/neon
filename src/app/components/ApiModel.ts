export interface TagModel {
  title: string;
  description: string;
}

export interface TagsModel {
  type?: TagModel[];
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

export interface SlotModel {
  name: string;
  description: string;
}

export interface PropertyModel {
  name?: string;
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
