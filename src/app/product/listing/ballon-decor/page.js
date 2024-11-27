import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [
  { value: "Trending Themes", label: "Trending Themes", checked: false },
  { value: "Basic Birthday Decor", label: "Basic Birthday Decor", checked: false },
  { value: "Premium Birthday Decor", label: "Premium Birthday Decor", checked: false },
  { value: "Inflatable Slides", label: "Inflatable Slides", checked: false },
  { value: "Inflatable Pool", label: "Inflatable Pool", checked: false }
]

export default async function BallonProducts() {
  const getAllProducts = await productByCategory("Ballon-Decor");
  const pageTitle = "Ballon-Decor";

  return <CommonListing data={getAllProducts && getAllProducts.data} Category={Category} pageTitle={pageTitle} />;
}
