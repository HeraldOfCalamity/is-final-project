export interface Client {
  id: string;
  username: string;
  name: string;
  lastname: string;
  coordenates: [number, number];
}

export interface ClientFormField {
  fieldName: string;
  disabled: boolean;
}
