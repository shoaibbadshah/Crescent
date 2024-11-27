import CommonListing from "@/Components/CommonListing";
import { productByCategory } from "@/Components/ProductApi";

const Category = [
  { value: "Obstacle Based", label: "Obstacle Based", checked: false },
  { value: "Jungle Themed", label: "Jungle Themed", checked: false },
  { value: "Animal Themed", label: "Animal Themed", checked: false },
  { value: "Cartoon Character Themed", label: "Cartoon Character Themed", checked: false },
  { value: "Superhero Themed", label: "Superhero Themed", checked: false },
  { value: "Games & Activities", label: "Games & Activities", checked: false },
  { value: "Princess Themed", label: "Princess Themed", checked: false },
  { value: "Activity Based", label: "Activity Based", checked: false },
  { value: "Clown & Circus Themed", label: "Clown & Circus Themed", checked: false },
  { value: "Sports Themed", label: "Sports Themed", checked: false },
]

export default async function BouncyProducts() {
  const getAllProducts = await productByCategory("Bouncy-Castle");
  const pageTitle = "Bouncy Castle";

  return <CommonListing data={getAllProducts && getAllProducts.data}  Category={Category}
  pageTitle={pageTitle} />;
}
