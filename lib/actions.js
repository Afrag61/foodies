"use server";

import { saveMeal } from "@/lib/meals";
import { print } from "@/Print";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevFormState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    print(prevFormState)
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals')
  redirect("/meals");
};
