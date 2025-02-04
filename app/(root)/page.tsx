import ProductList from "@/components/shared/header/product/product-list";
import { getlatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getlatestProducts();
  return (
    <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
  );
};

export default Homepage;
