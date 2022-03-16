import {UPDATE_SERVICE_CATEGORIES} from '../constant';

const initialAppData: any = {
  categories: [],
};

const appReducer = (state = initialAppData, action: any) => {
  switch (action.type) {
    case UPDATE_SERVICE_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
