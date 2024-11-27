import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [
  { value: "Venuses", label: "Venues", checked: false }
]

export default async function VenuesProducts() {
  const getAllProducts = await productByCategory("Venues");
  const pageTitle = "Venues"

  return <CommonListing data={getAllProducts && getAllProducts.data} Category={Category} pageTitle={pageTitle} />;
}
