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
