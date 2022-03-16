export interface INavigation {
  navigate: (route: string, option?: any) => void;
  push: (route: string, option?: any) => void;
  goBack: () => void;
}

export interface IRoute {
  params: any;
}

export interface IComponent {
  navigation: INavigation;
  route?: IRoute;
}
