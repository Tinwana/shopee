"use client";
import { FC } from "react";
import HeaderTitle from "./components/HeaderTitle";
import ProductsContainer from "./components/ProductsContainer";
import CartControl from "./components/CartControl";
import { useLogin } from "@/hooks";

interface ProductsViewProps {}

const ProductsView: FC<ProductsViewProps> = ({}) => {
  useLogin();
  return (
    <div className="mt-4 flex flex-col gap-4">
      <HeaderTitle />
      {Array.from({ length: 3 }).map((item, i) => (
        <ProductsContainer item={item} key={i} />
      ))}
      <CartControl />
    </div>
  );
};

export default ProductsView;
