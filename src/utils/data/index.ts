import {IIntroItem, IOptions} from 'interface/IGeneral';
import {CHANGE_PASSWORD_SCREEN} from 'navigation/constant';
import * as ImageAssets from 'utils/images/list';
import {normalizeDimension} from 'utils/sizing';

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
export const intro: IIntroItem[] = [
  {
    id: 1,
    title: `Snap & Diagnose`,
    text: `Get an opportunity to Snap your farm crops or animals and diagnose the diseases`,
    image: ImageAssets.slide_1,
    width: normalizeDimension(220),
    height: normalizeDimension(239, 'height'),
  },
  {
    id: 2,
    title: `Talk to Experts`,
    text: `Meet AGRO Professionals on the App to help diagnose your farm's crops and animals`,
    image: ImageAssets.slide_2,
    width: normalizeDimension(304),
    height: normalizeDimension(189, 'height'),
  },
  {
    id: 3,
    title: `Free Community`,
    text: `There is a big community of farmers and professionals that are available to interact with on the app`,
    image: ImageAssets.slide_3,
    width: normalizeDimension(220),
    height: normalizeDimension(239, 'height'),
  },
];

export const diagnosisPictureOption = [
  {
    id: 1,
    title: `Take Photo`,
    image: ImageAssets.take_photo,
  },
  {
    id: 2,
    title: `Upload Photo`,
    image: ImageAssets.upload_photo,
  },
];

export const clickableCardOptions = [
  {
    id: 1,
    title: `Identify and Diagnose your crop`,
    text: `Take a picture of your plants and see diagnosis`,
    image: ImageAssets.camera,
    isGreen: true,
  },
  {
    id: 2,
    title: `Ask Experts`,
    text: `One-on-one consultation with experts. Get precise solutions to your crop problems.`,
    image: ImageAssets.ask,
    isGreen: false,
  },
];
