import {ticket_types} from 'interface/ITicket';

export const handleTextInput = (
  setState: React.Dispatch<React.SetStateAction<any>>,
  text: string,
  key: string,
) => {
  setState((oldState: any) => ({
    ...oldState,
    [key]: {...oldState[key], value: text},
  }));
};

// export const navigate(navigation: INavigation, route: string, payload: any): void => {

// }
export const toggleModal = (
  setOpenModal: React.Dispatch<React.SetStateAction<any>>,
  value: boolean,
  params?: any,
) => {
  setOpenModal((prevState: any) => ({
    ...prevState,
    params: params,
    value,
  }));
};

export const getTicketType = (item: any): ticket_types => {
  return item.channel_id
    ? 'general'
    : item.creator_type
    ? 'task'
    : item.xyz
    ? 'registration_tasker'
    : item.abc
    ? 'registration_client'
    : 'safety';
};
