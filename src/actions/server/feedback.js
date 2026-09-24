"use server";
import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const getFeedback = async () =>
  await connect("feedback").find().toArray();

export const postFeedback = async (message) => {
  const result = await connect("feedback").insertOne({
    message,
    date: new Date().toISOString(),
  });

  revalidatePath("/feedback");

  return {
    ...result,
    insertedId: result.insertedId.toString(),
  };
};
