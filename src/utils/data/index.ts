import {IOptions} from 'interface/IGeneral';
import {ITaskDetail, ITaskUpdate} from 'interface/ITask';
import {CHANGE_PASSWORD_SCREEN} from 'navigation/constant';
import * as ImageAssets from 'utils/images/list';

export const profileOptions = [
  {
    name: 'Update User Information',
    route: CHANGE_PASSWORD_SCREEN,
  },
];

export const different_specialty: IOptions[] = [
  {
    id: 1,
    text: `Plants Farmer`,
    image: ImageAssets.plant_farmer,
  },
  {
    id: 2,
    text: `Animal Farmer`,
    image: ImageAssets.animal_farmer,
  },
  {
    id: 3,
    text: `Experts`,
    image: ImageAssets.expert,
  },
];
export const intro: IOptions[] = [
  {
    id: 1,
    text: `Snap & Diagnose`,
    image: ImageAssets.slide_1,
  },
  {
    id: 2,
    text: `Talk to Experts`,
    image: ImageAssets.slide_2,
  },
  {
    id: 3,
    text: `Free Community`,
    image: ImageAssets.slide_3,
  },
];
