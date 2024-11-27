import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [
  { value: "Wedding & Engagement Decor", label: "Wedding & Engagement Decor", checked: false },
  { value: "Linen and Table Cloth", label: "Linen and Table Cloth", checked: false },
  { value: "Photo Booths", label: "Photo Booths", checked: false },
  { value: "Themed Event Decor", label: "Themed Event Decor", checked: false },
  { value: "Basic Balloon Decor", label: "Basic Balloon Decor", checked: false },
  { value: "Carpets and Rugs", label: "Carpets and Rugs", checked: false },
  { value: "Decor Lighting Accessories", label: "Decor Lighting Accessories", checked: false },
  { value: "Event Decor Accessories", label: "Event Decor Accessories", checked: false },
  { value: "Mandap & Shamiyana", label: "Mandap & Shamiyana", checked: false },
  { value: "Event Decor", label: "Event Decor", checked: false }
]

export default async function PeopleProducts() {
  const getAllProducts = await productByCategory("People-Services");
  const pageTitle = "People-Services"

  return <CommonListing data={getAllProducts && getAllProducts.data} Category={Category} pageTitle={pageTitle} />;
}
