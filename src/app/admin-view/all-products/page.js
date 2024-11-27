"use client"
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "@/Context/page";
import "react-toastify/dist/ReactToastify.css";
import Notification from "@/Components/Notification";
import ComponentLevelLoader from "@/Components/ComponentLevelLoader";
import { getAllAdminProducts, deleteAProduct } from "@/Components/ProductApi";
import { addToCart } from "@/Components/CartApi";
import NavbarSecond from "@/Components/Headers/NavbarSecond";





export function ProductTile({ item }) {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${item._id}`)}>
            <div className="overflow-hideen aspect-w-1 aspect-h-1 h-52">
                <img
                    src={item.thumbnail}
                    alt="Product image"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                />
            </div>
           
            <div className="my-4 mx-auto flex w-10/12 flex-col justify-between">
                <div className="mb-2 flex justify-between">
                    <p
                        className={`mr-3 text-sm line-through font-semibold `}
                    >{`AED ${item.price}`}</p>
                    
                       
                    
                    <p className="mr-3 text-sm  font-semibold text-red-700">{`AED ${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}`}</p>
                </div>
                <h3 className="md-2 text-gray-400 text-sm">{item.title}</h3>
            </div>
        </div>
    );
}



export function ProductButton({ item }) {
    const pathName = usePathname();
    const {
      setCurrentUpdatedProduct,
      setComponentLevelLoader,
      componentLevelLoader,
      user,
      showCartModal, setShowCartModal
    } = useContext(GlobalContext);
    const router = useRouter();
  
    const isAdminView = pathName.includes("admin-view");
  
    async function handleDeleteProduct(item) {
      setComponentLevelLoader({ loading: true, id: item._id });
  
      const res = await deleteAProduct(item._id);
  
      if (res && res.success) {
        setComponentLevelLoader({ loading: false, id: "" });
        toast.success("Product deleted successfully", {
            position: "top-right",
        });
        router.refresh();
      } else {
        toast.error("Failed to delete product", {
            position: "top-right",
        });
        setComponentLevelLoader({ loading: false, id: "" });
      }
    }
  
    async function handleAddToCart(getItem) {
      setComponentLevelLoader({ loading: true, id: getItem._id });
  
      const res = await addToCart({ productID: getItem._id, userID: user._id });
  
      if (res.success) {
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setComponentLevelLoader({ loading: false, id: "" });
        setShowCartModal(true);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setComponentLevelLoader({ loading: false, id: "" });
        setShowCartModal(true)
      }
  
      console.log(res);
    }
  

    return isAdminView ? (
        <>
            <button
                onClick={() => {
                    setCurrentUpdatedProduct(item);
                    router.push("/admin-view/add-product");
                }}
                className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
                Update
            </button>
            <button
                onClick={() => handleDeleteProduct(item)}
                className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
                {componentLevelLoader &&
                    componentLevelLoader.loading &&
                    item._id === componentLevelLoader.id ? (
                    <ComponentLevelLoader
                        text={"Deleting Product"}
                        color={"#ffffff"}
                        loading={componentLevelLoader && componentLevelLoader.loading}
                    />
                ) : (
                    "DELETE"
                )}
            </button>
        </>
    ) : (
        <>
            <button
                onClick={() => handleAddToCart(item)}
                className="mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
                {componentLevelLoader &&
                    componentLevelLoader.loading &&
                    componentLevelLoader.id === item._id ? (
                    <ComponentLevelLoader
                        text={"Adding to cart"}
                        color={"#ffffff"}
                        loading={componentLevelLoader && componentLevelLoader.loading}
                    />
                ) : (
                    "Add To Cart"
                )}
            </button>
        </>
    );
}



export function CommonListing({ data }) {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, []);

    return (
        <>
            <NavbarSecond />
            <section className="bg-white py-20 sm:py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                        {data && data.length
                            ? data.map((item) => (
                                <article
                                    className="relative flex flex-col overflow-hidden border cursor-pointer"
                                    key={item._id}
                                >
                                    <ProductTile item={item} />
                                    <ProductButton item={item} />
                                </article>
                            ))
                            : null}
                    </div>
                </div>
                <Notification />
            </section>
        </>
    );
}


export default async function AdminAllProducts() {
    const allAdminProducts = await getAllAdminProducts();
    return <CommonListing data={allAdminProducts && allAdminProducts.data} />;
}