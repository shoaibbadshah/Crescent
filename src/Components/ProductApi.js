import Cookies from "js-cookie";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/add-product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/all-products`, {
      method: "GET",
      cache: 'force-cache', // Ensure caching is enabled
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/update-product`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const productById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/product-by-id?id=${id}`, {
      method: "GET",
      cache: 'force-cache', // Ensure caching is enabled
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const productByCategory = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/admin/product-by-category?id=${id}`, {
      method: "GET",
      cache: 'force-cache', // Ensure caching is enabled
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
