import Typography from "@mui/material/Typography";
import { Product } from "~/models/Product";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
// import { useCart, useInvalidateCart, useUpsertCart } from "~/queries/cart";

type AddProductToCartProps = {
  product: Product;
  isFetching: boolean;
};

export default function AddProductToCart({
  product,
  isFetching,
}: AddProductToCartProps) {
  // const { mutate: upsertCart } = useUpsertCart();
  // const invalidateCart = useInvalidateCart();

  const addProduct = () => {
    // upsertCart(
    //   { product, count: product.count ? product.count + 1 : 1 },
    //   { onSuccess: invalidateCart }
    // );
  };

  const removeProduct = () => {
    // if (product) {
    //   upsertCart(
    //     { ...product, count: cartItem.count - 1 },
    //     { onSuccess: invalidateCart }
    //   );
    // }
  };

  return product.count ? (
    <>
      <IconButton disabled={isFetching} onClick={removeProduct} size="large">
        <Remove color={"secondary"} />
      </IconButton>
      <Typography align="center">{product.count}</Typography>
      <IconButton disabled={isFetching} onClick={addProduct} size="large">
        <Add color={"secondary"} />
      </IconButton>
    </>
  ) : (
    <IconButton disabled={isFetching} onClick={addProduct} size="large">
      <CartIcon color={"secondary"} />
    </IconButton>
  );
}
