import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Image, Input, Skeleton } from 'antd';

import { useTranslate } from '@/hooks/useTranslate';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { getProductDetail } from '@/stores/slices/product-slice';

const Products = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productStore.productsDetails);

  const translate = useTranslate();

  const loadData = async () => {
    const productId = router.query?.productId;
    if (productId) {
      setIsLoading(true);
      await dispatch(getProductDetail(productId as string));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [router]);

  return (
    <div className="px-12 py-12 w-full bg-white rounded-lg">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Form
          labelCol={{ span: 4 }}
          layout="horizontal"
          size={'middle'}
          disabled={true}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label={translate.product.name}>
            <Input value={product?.name} />
          </Form.Item>
          <Form.Item label={translate.product.createdAt}>
            <Input value={product?.createdAt} />
          </Form.Item>
          <Form.Item label={translate.product.price}>
            <Input value={product?.price} />
          </Form.Item>
          <Form.Item label={translate.product.image}>
            <Image width={200} src={product?.image} />
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Products;
