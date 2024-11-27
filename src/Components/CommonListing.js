"use client";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import ProductButton from "./ProductButton";
import ProductTile from "./ProductTile";
import Notification from "./Notification";
import NavbarSecond from "./Headers/NavbarSecond";
import TransitionComponent from "./TransitionComponent";
import Link from "next/link";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { FaChevronDown, FaFunnelDollar, FaMinus, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sortOptions = [
  { name: "Best Rating", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function CommonListing({ data, Category, pageTitle }) {
  const router = useRouter();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState(6);
  const itemsPerPage = 6;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      let filtered = [...data];

      if (selectedCategory) {
        filtered = filtered.filter((product) => product.subCategory === selectedCategory);
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.subCategory.toLowerCase().includes(query)
        );
      }

      const minPrice = (1560 / 1000) * 0; // Minimum price
      const maxPrice = (4000 / 100) * priceRangeValue; // Maximum price
      filtered = filtered.filter((product) => product.price >= minPrice && product.price <= maxPrice);

      setFilteredProducts(filtered);
      setCurrentPage(1);
      setLoading(false);
    }, 3000);
  }, [selectedCategory, searchQuery, data, priceRangeValue]);

  const updatePrice = (value) => {
    const maxValue = document.getElementById("maxPrice");
    const max = 1554; // Maximum price
    const price = (max * value) / 1000;

    setPriceRangeValue(value);
    maxValue.textContent = `AED${price.toFixed(2)}`;
  };

  const handleFilter = (filterType, value) => {
    setLoading(true); // Set loading to true when a filter is applied
    if (filterType === "Category") {
      setSelectedCategory(value === selectedCategory ? null : value);
      const path = Category.find(category => category.value === value)?.path || "";
      router.push(path);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(startPage + pageRange - 1, totalPages || 1);

  let pageNumbers = [];
  if (endPage >= startPage) {
      pageNumbers = [...Array(endPage - startPage + 1)].map((_, i) => startPage + i);
  }


  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (sortOption) => {
    let sortedProducts = [...data];

    if (sortOption === "Best Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };
  return (
    <>
      <NavbarSecond />
      <div className="bg-gray-50 my-20">
        <TransitionComponent
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          filters={Category} // Ensure Category is passed as filters
          selectedCategory={selectedCategory}
          handleFilter={handleFilter}
        />

        <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Filter</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <FaChevronDown
                      className="-mr-1 ml-2 mt-1 h-3 w-3 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => handleSort(option.name)} // Handle sorting onClick
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FaFunnelDollar className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className='block'>
                <form className="my-6 mb-4">
                  <label
                    for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      value={searchQuery}
                      onChange={handleSearch}
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search products by title or brand"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <div className="hidden pt-4 lg:block">
                  <h3 className="sr-only">Price Range</h3>
                  <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                      <div>
                        {/* Price range slider */}
                        <div className="mb-4">
                          <input type="range" className="w-full range-pink" onChange={(e) => updatePrice(e.target.value)} />
                        </div>
                        {/* Display min and max prices */}
                        <div className="flex justify-between text-gray-500">
                          <span id="minPrice">AED 0</span>
                          <span id="maxPrice">AED 100</span>
                        </div>
                      </div>
                    </div>
                  </ul>
                  <div className=" ml-5 mt-4">
                    <Link href="/product/listing/all-product">
                      <button
                        role="link"
                        className="relative flex gap-2 text-base font-semibold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-900 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      ><svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        Go To Home
                      </button>
                    </Link>
                  </div>

                  <div className="hidden pt-4 lg:block h-[90vh] overflow-auto overflow-x-none">
                    <form className="h-full mx-2">
                      <>
                        <Disclosure
                          as="div"
                          key={Category}
                          className="border-b border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center px-2 justify-between bg-white py-3 text-base font-semibold text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{pageTitle}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <FaMinus className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <FaPlus className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4 bg-white p-2">
                                  {Category.map((subCategory, index) => (
                                    <div key={index} className="flex items-center">
                                      <input
                                        id={`filter-${subCategory}`}
                                        name={`${subCategory}`}
                                        type="checkbox"
                                        checked={selectedCategory === subCategory.value}
                                        onChange={() => handleFilter("Category", subCategory.value)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-${subCategory}`}
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                        {subCategory.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </>
                    </form>
                  </div>
                </div>
                <div>
                </div>
              </div>

              <div className="lg:col-span-3">
                {loading ? (
                  <div className="flex justify-center py-10">
                    <div className="flex gap-4 p-4 flex-wrap justify-center">

                      <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/474682/loading.svg" alt="Loading icon" />

                    </div>


                  </div>
                ) : filteredProducts && (
                  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-2 grid grid-cols-1 gap-6 xl:grid-cols-3 sm:gap-4 lg:mt-2">
                      {filteredProducts
                        .slice(
                          (currentPage - 1) * itemsPerPage,
                          currentPage * itemsPerPage
                        )
                        .map((item) => (
                          <article
                            className="relative flex flex-col overflow-hidden border cursor-pointer"
                            key={item._id}
                          >
                            <ProductTile item={item} />
                            <ProductButton item={item} />
                          </article>
                        ))}
                    </div>
                  </div>
                )}
                <Notification />
                <hr className="mt-8" />
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                  {filteredProducts && (
                    <div className="flex items-center gap-4 justify-between w-full">
                      <p className="text-sm text-gray-700 flex-1 max-sm:hidden">
                        Showing
                        <span className="font-medium">
                          {Math.min((currentPage - 1) * itemsPerPage + 1, filteredProducts.length)}
                        </span>
                        to
                        <span className="font-medium">
                          {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
                        </span>
                        of
                        <span className="font-medium">{filteredProducts.length}</span> results
                      </p>
                      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <button
                          className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                          onClick={() => handlePaginationClick(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <span className="sr-only">Previous</span>
                          <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {pageNumbers.map((pageNumber) => (
                          <button
                            key={pageNumber}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === pageNumber
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-900 hover:bg-gray-50'
                              } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                            onClick={() => handlePaginationClick(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        ))}
                        <button
                          className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'opacity-0 pointer-events-none' : ''}`}
                          onClick={() => handlePaginationClick(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <span className="sr-only">Next</span>
                          <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </nav>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>

    </>
  );
}

export default CommonListing