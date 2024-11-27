import connectToDB from "../../../lib/database/page";
import AuthUser from "../../../../middleware/AuthUser";
import Product from "../../../lib/models/product";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewProductSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  images: Joi.array().required(),
  subCategory: Joi.string().required(),
  discountPercentage: Joi.string().required(),
  rating: Joi.number().required(),
  thumbnail: Joi.string().required(),
  stock: Joi.string().required(),
});


export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req)


    if (isAuthUser?.role === "admin") {
      const extractData = await req.json();

      const {
        title,
        description,
        price,
        thumbnail,
        category,
        images,
        subCategory,
        rating,
        discountPercentage,
        stock,
      } = extractData;

      const { error } = AddNewProductSchema.validate({
        title,
        description,
        price,
        thumbnail,
        category,
        images,
        subCategory,
        rating,
        discountPercentage,
        stock,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedProduct = await Product.create(extractData);

      if (newlyCreatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Product added successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the product ! please try again",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
