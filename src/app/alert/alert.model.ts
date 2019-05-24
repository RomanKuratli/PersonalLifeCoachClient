export interface Alert {
  id: number;
  msg: string;
  type: AlertType;
}

export enum AlertType {
  'Success', 'Error', 'Info', 'Warning'
}
