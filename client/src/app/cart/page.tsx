import { ProductsView, SuggestProducts } from "@/features/Cart";
import { FC } from "react";

const CartPage: FC = ({}) => {
  const user = true;
  return (
    <article className="flex flex-col">
      <ProductsView user={user} />
      <SuggestProducts />
    </article>
  );
};

export default CartPage;
