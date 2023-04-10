import { useTranslate } from '@/hooks/useTranslate';
import { Select } from 'antd';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();
  const translate = useTranslate();
  const changeLang = (lang: string) => {
    router.push('/', '/', { locale: lang });
  };

  const options = [
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Vietnamese' },
  ];

  return (
    <div>
      <Select
        className="my-4"
        defaultValue={router.locale}
        style={{ width: 120 }}
        onChange={changeLang}
        options={options}
      />
      <div className="home">{translate.home.content}</div>
    </div>
  );
};

export default Main;
