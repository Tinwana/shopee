import { ProductsView, SuggestProducts } from "@/features/Cart";
import { FC } from "react";

const CartPage: FC = ({}) => {
  return (
    <article className="flex flex-col">
      <ProductsView />
      <SuggestProducts />
    </article>
  );
};

export default CartPage;
