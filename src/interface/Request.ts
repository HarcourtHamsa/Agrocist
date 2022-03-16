export interface IResponse {
  success: boolean;
  errors?: string[];
  message?: string;
  access_token?: string;
  user?: {
    id: number,
    first_name: string,
    phonenumber: string,
    farm_name: string,
  }
  data?: any;
}
