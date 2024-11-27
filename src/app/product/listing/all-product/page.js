import CommonListing from "@/Components/CommonListing";
import { getAllAdminProducts } from "@/Components/ProductApi";

const Category = [
  { value: "Event-Furniture", path: "/product/listing/event-furniture", label: "Event-Furniture", checked: false },
  { value: "Bouncy-Castle", path: "/product/listing/bouncy-castle", label: "Bouncy-Castle", checked: false },
  { value: "Ballon-Decor", path: "/product/listing/ballon-decor", label: "Ballon-Decor", checked: false },
  { value: "Food-Beverages", path: "/product/listing/food-beverages", label: "Food-Beverages", checked: false },
  { value: "Kids-Entertainment", path: "/product/listing/kids-entertainment", label: "Kids-Entertainment", checked: false },
  { value: "People-Services", path: "/produt/listing/people-services", label: "People-Services", checked: false },
  { value: "Venues", path: "/product/listing/venues", label: "Venues", checked: false }
];


export default async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();
  const pageTitle = "All Categories";


  return <CommonListing data={getAllProducts && getAllProducts.data}
    Category={Category}
    pageTitle={pageTitle}
  />;
}
