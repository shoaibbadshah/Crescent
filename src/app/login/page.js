// Login.js
"use client";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { GlobalContext } from "@/Context/page";
import Notification from "@/Components/Notification";

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    isAuthUser,
    setIsAuthUser,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);
  const router = useRouter();

  function isValidForm() {
    return (
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }

  async function handleLogin() {
    setComponentLevelLoader({ loading: true, id: "" });
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message, {
          position: "top-right", // Corrected
        });
        setIsAuthUser(true);
        setUser(data.finalData.user);
        setFormData({
          email: "",
          password: "",
        });
        Cookies.set("token", data.finalData.token);
        localStorage.setItem("user", JSON.stringify(data.finalData.user));
      } else {
        toast.error(data.message, {
          position: "top-right", // Corrected
        });
        setIsAuthUser(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  useEffect(() => {
    if (isAuthUser) router.push("/product/listing/all-product");
  }, [isAuthUser]);

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                Login
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {loginFormControls.map((controlItem) =>
                  controlItem.componentType === "input" ? (
                    <div key={controlItem.id} className="relative">
                      <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                        {controlItem.label}
                      </p>
                      <input
                        placeholder={controlItem.placeholder}
                        type={controlItem.type || "text"}
                        value={formData[controlItem.id]}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            [controlItem.id]: event.target.value,
                          })
                        }
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                  ) : null
                )}
                <button
                  className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                  disabled={!isValidForm()}
                  onClick={handleLogin}
                >
                  {componentLevelLoader && componentLevelLoader.loading ? (
                    <span className="flex gap-1 items-center">
                      Logging In
                      <PulseLoader
                        color="#ffffff"
                        loading={
                          componentLevelLoader && componentLevelLoader.loading
                        }
                        size={10}
                        data-testid="loader"
                      />
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="flex flex-col gap-2">
                  <p>New to website ?</p>
                  <button
                    className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Notification/>
    </div>
  );
}
