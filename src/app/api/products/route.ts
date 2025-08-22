import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const newProduct = await req.json();

    const filePath = path.join(process.cwd(), "src", "data", "data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(fileData);

    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const productWithId = { id, ...newProduct };

    products.push(productWithId);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

    return NextResponse.json({ message: "✅ Product added", product: productWithId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "❌ Error adding product" }, { status: 500 });
  }
}
