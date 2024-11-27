import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [

  { value: "Bean Bags & Picnic Benches", label: "Bean Bags & Picnic Benches", checked: false },
  { value: "Kids Tables", label: "Kids Tables", checked: false },
  { value: "Kids Chairs & Stools", label: "Kids Chairs & Stools", checked: false },
  { value: "Kids Furniture Combo", label: "Kids Furniture Combo", checked: false },
  { value: "Inflatable Slides", label: "Inflatable Slides", checked: false },
  { value: "Inflatable Pool", label: "Inflatable Pool", checked: false },
  

];

export default async function KidsProducts() {
  const getAllProducts = await productByCategory("Kids-Entertainment");
  const pageTitle = "Kids & Entertainment";


  return <CommonListing data={getAllProducts && getAllProducts.data} Category={Category} pageTitle={pageTitle} />;
}
