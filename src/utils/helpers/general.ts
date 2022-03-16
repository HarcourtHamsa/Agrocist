import {ICategory} from 'interface/ITask';

export const getCategoryUsingId = (
  categories: Array<ICategory>,
  id: number,
): ICategory => {
  console.log({categories, id});
  const category: Array<ICategory> = categories.filter(
    (item: ICategory) => +item.id == id,
  );
  console.log({category});
  return category[0] ?? [];
};
