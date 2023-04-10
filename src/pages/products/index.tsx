import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { useTranslate } from '@/hooks/useTranslate';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { getProducts } from '@/stores/slices/product-slice';
import { searchProducts } from '@/stores/slices/product-slice/async-actions';
import { TProductDetail } from '@/types/product-types';

const { Search } = Input;

const Products = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const productsList = useAppSelector((state) => state.productStore.products);

  const loadData = async () => {
    setIsLoading(true);
    await dispatch(getProducts());
    setIsLoading(false);
  };

  const translate = useTranslate();

  const columns: ColumnsType<TProductDetail> = [
    {
      title: translate.product.name,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: translate.product.createdAt,
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: translate.product.price,
      dataIndex: 'price',
      key: 'price',
    },
  ];

  const handleSearch = async (value: string) => {
    setIsLoading(true);
    dispatch(searchProducts(value));
    setIsLoading(false);
  };

  const handleRow = (record: TProductDetail) => ({
    onClick: () => {
      router.push({
        pathname: '/products/[productId]',
        query: { productId: record.id },
      });
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Search
        className="pb-4 max-w-xs"
        placeholder="Input search name"
        onSearch={handleSearch}
        enterButton
      />
      <Table
        className="pr-0.5 rounded-lg"
        loading={isLoading}
        columns={columns}
        dataSource={productsList}
        onRow={handleRow}
      />
    </>
  );
};

export default Products;
