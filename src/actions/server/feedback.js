'use server'
import { connect } from "@/lib/dbConnect";

export const getFeedback = async () =>
  await connect("feedback").find().toArray();
