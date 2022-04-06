export interface IImage {
  base64: string;
  fileName: string;
  fileSize: number;
  height: number;
  width: number;
  type: 'image/jpg';
  uri: string;
}

export interface IFileImage {
  assets: Array<IImage>;
}
