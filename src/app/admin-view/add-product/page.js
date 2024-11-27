"use client";
import { GlobalContext } from "@/Context/page";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "@/Components/Notification";
import ComponentLevelLoader from "@/Components/ComponentLevelLoader";
import NavbarSecond from "@/Components/Headers/NavbarSecond";
import { updateAProduct, addNewProduct } from "@/Components/ProductApi";
import InputComponent from "@/Components/InputComponent";

const category = [
  { id: "Event-Furniture", label: "Event-Furniture" },
  { id: "Bouncy-Castle", label: "Bouncy-Castle" },
  { id: "Ballon-Decor", label: "Ballon-Decor" },
  { id: "Food-Beverages", label: "Food-Beverages" },
  { id: "Kids-Entertainment", label: "Kids-Entertainment" },
  { id: "People-Services", label: "People-Services" },
  { id: "Venues", label: "Venues" },
];

const subCategoryMapping = {
  "Event-Furniture": [
    { id: "Cocktail Tables", label: "Cocktail Tables" },
    { id: "Sofas & Ottomans", label: "Sofas & Ottomans" },
    { id: "Chairs", label: "Chairs" },
    { id: "Dining Tables", label: "Dining Tables" },
    { id: "Outdoor Seating Setup", label: "Outdoor Seating Setup" },
    { id: "Dining Setup", label: "Dining Setup" },
    { id: "Coffee Tables", label: "Coffee Tables" },
    { id: "Bean Bags & Benches", label: "Bean Bags & Benches" },
    { id: "Bar Stools & High Chairs", label: "Bar Stools & High Chairs" },
    { id: "Lounge Seating Setup", label: "Lounge Seating Setup" },
    { id: "High Seating Setup", label: "High Seating Setup" },
    { id: "Bar Counter", label: "Bar Counter" },
  ],
  "Bouncy-Castle": [
    { id: "Obstacle Based", label: "Obstacle Based" },
    { id: "Jungle Themed", label: "Jungle Themed" },
    { id: "Animal Themed", label: "Animal Themed" },
    { id: "Cartoon Character Themed", label: "Cartoon Character Themed" },
    { id: "Superhero Themed", label: "Superhero Themed" },
    { id: "Games & Activities", label: "Games & Activities" },
    { id: "Princess Themed", label: "Princess Themed" },
    { id: "Activity Based", label: "Activity Based" },
    { id: "Clown & Circus Themed", label: "Clown & Circus Themed" },
    { id: "Sports Themed", label: "Sports Themed" },
    { id: "Trending Themes", label: "Trending Themes" },
    { id: "Basic Birthday Decor", label: "Basic Birthday Decor" },
    { id: "Premium Birthday Decor", label: "Premium Birthday Decor" },
    { id: "Inflatable Slides", label: "Inflatable Slides" },
    { id: "Inflatable Pool", label: "Inflatable Pool" },
  ],
  "Ballon-Decor": [
    { id: "Basic Balloon Decor", label: "Basic Balloon Decor" },
    { id: "Wedding & Engagement Decor", label: "Wedding & Engagement Decor" },
    { id: "Linen and Table Cloth", label: "Linen and Table Cloth" },
    { id: "Photo Booths", label: "Photo Booths" },
    { id: "Themed Event Decor", label: "Themed Event Decor" },
    { id: "Carpets and Rugs", label: "Carpets and Rugs" },
    { id: "Decor Lighting Accessories", label: "Decor Lighting Accessories" },
    { id: "Event Decor Accessories", label: "Event Decor Accessories" },
    { id: "Mandap & Shamiyana", label: "Mandap & Shamiyana" },
    { id: "Event Decor", label: "Event Decor" },
  ],
  "Food-Beverages": [
    { id: "Healthy Food", label: "Healthy Food" },
    { id: "Snacks", label: "Snacks" },
    { id: "Beverages", label: "Beverages" },
    { id: "Desserts", label: "Desserts" },
    { id: "Catering Services", label: "Catering Services" },
    { id: "Food Trucks", label: "Food Trucks" },
    { id: "BBQ & Grills", label: "BBQ & Grills" },
  ],
  "Kids-Entertainment": [
    { id: "Magic Shows", label: "Magic Shows" },
    { id: "Clowns", label: "Clowns" },
    { id: "Puppet Shows", label: "Puppet Shows" },
    { id: "Face Painting", label: "Face Painting" },
    { id: "Balloon Twisting", label: "Balloon Twisting" },
    { id: "Kids DJ", label: "Kids DJ" },
    { id: "Mascots", label: "Mascots" },
  ],
  "People-Services": [
    { id: "Photographers", label: "Photographers" },
    { id: "Event Planners", label: "Event Planners" },
    { id: "Security Services", label: "Security Services" },
    { id: "Wait Staff", label: "Wait Staff" },
    { id: "Clean-Up Crew", label: "Clean-Up Crew" },
    { id: "Hosts & Hostesses", label: "Hosts & Hostesses" },
    { id: "Makeup Artists", label: "Makeup Artists" },
  ],
  "Venues": [
    { id: "Banquet Halls", label: "Banquet Halls" },
    { id: "Outdoor Venues", label: "Outdoor Venues" },
    { id: "Hotels & Resorts", label: "Hotels & Resorts" },
    { id: "Conference Centers", label: "Conference Centers" },
    { id: "Community Centers", label: "Community Centers" },
    { id: "Private Properties", label: "Private Properties" },
    { id: "Rooftop Venues", label: "Rooftop Venues" },
  ],
};

export function SelectComponent({
  label,
  value,
  onChange,
  options = [],
  placeholder = "--Select--",
}) {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 absolute pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
        {label}
      </p>
      <select
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      >
        <option value="">{placeholder}</option>
        {options.map((optionItem) => (
          <option id={optionItem.id} value={optionItem.id} key={optionItem.id}>
            {optionItem.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function AdminAddNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    subCategory: "",
    rating: "",
    stock: "",
    thumbnail: "",
    discountPercentage: 0,
    images: [],
  });

  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const router = useRouter();
  const {
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (currentUpdatedProduct !== null) setFormData(currentUpdatedProduct);
  }, [currentUpdatedProduct]);

  useEffect(() => {
    if (formData.category) {
      setFilteredSubCategories(subCategoryMapping[formData.category] || []);
    } else {
      setFilteredSubCategories([]);
    }
  }, [formData.category]);

  async function handleAddProduct() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res =
      currentUpdatedProduct !== null
        ? await updateAProduct(formData)
        : await addNewProduct(formData);
    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: "top-right",
      });
      setFormData({
        title: "",
        price: 0,
        description: "",
        category: "",
        subCategory: "",
        rating: "",
        stock: "",
        thumbnail: "",
        discountPercentage: 0,
        images: [],
      });
      setCurrentUpdatedProduct(null);
      setTimeout(() => {
        router.push("/admin-view/all-products");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: "top-right",
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  return (
    <>
      <NavbarSecond />
      <div className="w-full mt-10 py-20 mr-0 mb-0 ml-0 relative">
        <div className="flex flex-col mx-40 items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
          <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
            <InputComponent
              type="text"
              placeholder="Enter name"
              label="Title"
              value={formData.title}
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
              }
            />
            <InputComponent
              type="number"
              placeholder="Enter price"
              label="Price"
              value={formData.price}
              onChange={(event) =>
                setFormData({ ...formData, price: event.target.value })
              }
            />
            <InputComponent
              type="text"
              placeholder="Enter description"
              label="Description"
              value={formData.description}
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            />

            <InputComponent
              type="text"
              placeholder="Enter Rating"
              label="Rating"
              value={formData.rating}
              onChange={(event) =>
                setFormData({ ...formData, rating: event.target.value })
              }
            />
            <InputComponent
              type="text"
              placeholder="Stock Available"
              label="Stock"
              value={formData.stock}
              onChange={(event) =>
                setFormData({ ...formData, stock: event.target.value })
              }
            />
            <InputComponent
              type="number"
              placeholder="Enter discount percentage"
              label="Discount Percentage"
              value={formData.discountPercentage}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  discountPercentage: event.target.value,
                })
              }
            />
            <SelectComponent
              label="Category"
              placeholder="--Category--"
              value={formData.category}
              onChange={(event) =>
                setFormData({ ...formData, category: event.target.value })
              }
              options={category}
            />

            <SelectComponent
              label="Sub-Category"
              placeholder="--Sub-Category--"
              value={formData.subCategory}
              onChange={(event) =>
                setFormData({ ...formData, subCategory: event.target.value })
              }
              options={filteredSubCategories}
            />

            <InputComponent
              type="text"
              placeholder="Enter thumbnail URL"
              label="Thumbnail"
              value={formData.thumbnail}
              onChange={(event) =>
                setFormData({ ...formData, thumbnail: event.target.value })
              }
            />

            <label>Images</label>
            {[1, 2, 3, 4].map((index) => (
              <InputComponent
                key={index}
                type="text"
                placeholder={`Enter image URL ${index}`}
                label={`Image ${index}`}
                value={formData.images[index - 1] || ""}
                onChange={(event) => {
                  const newImages = [...formData.images];
                  newImages[index - 1] = event.target.value;
                  setFormData({ ...formData, images: newImages });
                }}
              />
            ))}
            <button
              onClick={handleAddProduct}
              className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
            >
              {componentLevelLoader && componentLevelLoader.loading ? (
                <ComponentLevelLoader
                  text={
                    currentUpdatedProduct !== null
                      ? "Updating Product"
                      : "Adding Product"
                  }
                  color={"#ffffff"}
                  loading={componentLevelLoader && componentLevelLoader.loading}
                />
              ) : currentUpdatedProduct !== null ? (
                "Update Product"
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </div>
        <Notification />
      </div>
    </>
  );
}
