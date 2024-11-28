export interface Client {
  id: string;
  username: string;
  name: string;
  lastname: string;
}

export interface ClientFormField {
  fieldName: string;
  disabled: boolean;
}
