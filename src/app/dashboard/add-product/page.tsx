import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm";

const AddProductPage = async () => {
  // Check session on server
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // redirect unauthenticated users
  }

  return <AddProductForm />; // render your client-side component
};

export default AddProductPage;
