import { useRouter } from 'next/router';

import vi from '@/locales/vi';
import en from '@/locales/en';
import { Languages } from '@/constants/common-constants';

export const useTranslate = () => {
  const { locale } = useRouter();

  switch (locale) {
    case Languages.VI:
      return vi;
    default:
      return en;
  }
};
