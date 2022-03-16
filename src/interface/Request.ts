import {IUser} from './IUser';

export interface IResponse {
  success: boolean;
  errors?: string[];
  message?: string;
  access_token?: string;
  user?: IUser;
  data?: any;
}
