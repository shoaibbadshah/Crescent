import { productByCategory } from "@/Components/ProductApi";
import CommonListing from "@/Components/CommonListing";

// Subcategories for Event Furniture
const Category = [
  { value: "Cocktail Tables", label: "Cocktail Tables", checked: false },
  { value: "Sofas & Ottomans", label: "Sofas & Ottomans", checked: false },
  { value: "Chairs", label: "Chairs", checked: false },
  { value: "Dining Tables", label: "Dining Tables", checked: false },
  { value: "Outdoor Seating Setup", label: "Outdoor Seating Setup", checked: false },
  { value: "Dining Setup", label: "Dining Setup", checked: false },
  { value: "Coffee Tables", label: "Coffee Tables", checked: false },
  { value: "Bean Bags & Benches", label: "Bean Bags & Benches", checked: false },
  { value: "Bar Stools & High Chairs", label: "Bar Stools & High Chairs", checked: false },
  { value: "Lounge Seating Setup", label: "Lounge Seating Setup", checked: false },
  { value: "High Seating Setup", label: "High Seating Setup", checked: false },
  { value: "Bar Counter", label: "Bar Counter", checked: false }
];



export default async function EventFurnitureProducts() {

  const getAllEventFurnitureProducts = await productByCategory("Event-Furniture");
  const pageTitle = "Event Furniture"; // Static title for the page


  return (
    <CommonListing
      data={getAllEventFurnitureProducts && getAllEventFurnitureProducts.data}
      Category={Category}
      pageTitle={pageTitle} // Pass the pageTitle prop to CommonListing

    />
  );
}
