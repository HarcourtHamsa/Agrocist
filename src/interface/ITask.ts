export type taskStatus = 0 | 10 | 20 | 30 | 40;

export type taskTabStatus = 'scheduled' | 'cancelled' | 'completed';

export type resolutionStatus = 0 | 1 | 2 | 3 | 4 | 5 | null;

export interface IServiceResponseItem {
  total_price: number;
  quantity: number;
  service: {
    service_id: string;
    category: number;
    subcategory: number;
    title: string;
    details_1: string | null;
    details_2: string | null;
    details_3: string | null;
    price: number;
  };
}
export interface IServiceResponse {
  estimate_id: string;
  base_price: number;
  service_fee: number;
  total_price: number;
  category: number;
  landmark: string;
  start_time: number;
  end_time: number;
  location_type: number;
  location: string;
  standard_services: Array<IServiceResponseItem>;
  custom_services: Array<IServiceResponseItem>;
  other_services?: Array<IServiceResponseItem>;
  client_id?: string;
  task_id?: string;
  tasker_id?: string;
  estimate_expiry_time?: number;
  is_custom_estimate?: boolean;
  pending_refund_amount?: number;
  price_reduction?: number;
  refunded_amount?: number;
}

export interface ITaskDetail {
  category: number;
  check_in_time: number;
  id: string;
  client_id: string;
  create_time: string; // 4
  start_time: number;
  description: string; //5
  duration: number; //6
  estimate_id: string; //7
  location_type: number;
  price: number;
  base_price: number;
  service_fee: number;
  has_full_access: boolean; // first
  is_client_checked_in: boolean; // second
  is_tasker_checked_in: boolean; // third
  landmark: string;
  location: string;
  resolution_status: number;
  status: taskStatus;
  tasker_first_name: string;
  client_first_name: string;
  client_last_initial: string;
  tasker_last_name: string;
  tasker_id: string;
  task_id: string;
  payment_confirmed: number | null;
  tasker_checked_in: number | null;
  client_checked_in: number | null;
  task_started: number | null;
  task_completed: number | null;
  cancelled_by_tasker: number | null;
  cancelled_by_client: number | null;
  cancelled_by_system: number | null;
  completed: number | null;
  disputed_at: number | null;
  end_time: number | null;
  estimates: Array<IServiceResponse>;
  isActiveNotification: false;
}
export interface ITaskUpdate {
  id: number;
  timestamp: number;
  taskInfo: ITaskDetail;
  message: string;
  statusLevel: number;
}
export interface SubCategory {
  name: string;
  id: number;
}
export interface ICategory {
  id: string;
  name: string;
  subcategories: Array<SubCategory>;
}
