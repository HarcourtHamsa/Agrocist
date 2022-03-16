type creator_type = 'support' | 'client';
export type ticket_tab_option = 'unassigned' | 'assigned' | 'completed';

export type ticket_types =
  | 'general'
  | 'task'
  | 'registration_tasker'
  | 'registration_client'
  | 'safety';

// TODO: How do i know who is assigned for a task ticket: the ID

export interface ITicket {
  assigned_to: string | null;
  id: string;
  // this is to determine if its completed. Completed tasks have a false value.
  is_open: boolean;
  created_at: string | Date;
}

export interface ITicketGeneral extends ITicket {
  channel_id: string;
  closure_notice_expiry: null;
  initial_message: string;
  initial_message_sender: string;
  user_first_name: string;
  user_id: string;
  user_last_name: string;
  user_type: string;
}

export interface ITicketTask extends ITicket {
  tasker_id: string;
  tasker_channel_id: string;
  issue_type: string;
  creator_type: creator_type;
  client_id: string;
  task_id: string;
  parent_issue_id: string;
  client_channel_id: string;
}
export interface ITicketRegistration extends ITicket {}
