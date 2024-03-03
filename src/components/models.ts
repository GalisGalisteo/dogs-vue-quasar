export interface DogInfo {
  id?: number | string;
  breed: string;
  size: string;
  color: string;
  image: string;
  dateCreated?: Date;
}

export interface ValidatableObject {
  validate(): boolean;
  hasError: boolean;
}

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
