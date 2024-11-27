import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [
  {value: "Healthy Food", label : "Healthy Food", checked:false},
]

export default async function FoodProducts() {
  const getAllProducts = await productByCategory("Food-Beverages");
  const pageTitle = "Food Beverages";

  return <CommonListing data={getAllProducts && getAllProducts.data} Category={Category}  pageTitle={pageTitle} />;
}
