export interface DocumentationModel {
  props: PropertyModel[];
  events: EventModel[];
  description?: string;
}

export interface PropertyModel {
  name?: string;
  required?: boolean;
  type?: PropTypeModel;
  defaultValue?: PropDefaultModel;
}

export interface EventModel {
  name?: string;
  description?: boolean;
  type?: EventTypeModel;
}

export interface PropTypeModel {
  name?: string;
}

export interface EventTypeModel {
  names?: string[];
}

export interface PropDefaultModel {
  value?: string;
}
