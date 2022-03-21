import { MoreInfo } from './moreInfo.model';

export interface Vetement {


  id: number;
  name: string;
  price: number;
  size: string;
  link: string;
  // status: string;
  // color: string;
  moreInfo: MoreInfo;
}
