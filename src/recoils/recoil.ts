import { atom } from 'recoil';

export const warningState = atom<{
  _id: string;
  title: string;
  content: string;
  image: string;
} | null>({
  key: 'warningState',
  default: null,
});
