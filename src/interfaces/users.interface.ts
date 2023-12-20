export interface User {
  _id?: string;
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender?: string;
  birthday: string;
  phoneNumber: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
}
