export interface DocumentationModel {
  props: PropertyModel[];
  events: EventModel[];
  description?: string;
  slots?: SlotModel[];
}

export interface TagModel {
  title: string;
  description: string;
}

export interface TagsModel {
  type?: TagModel[];
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

export interface NameModel {
  name: string;
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
