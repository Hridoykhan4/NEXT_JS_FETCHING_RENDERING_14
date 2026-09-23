// import { feedback } from "../route";

import { collectionNamesObj, connect } from "@/lib/dbConnect";

// export async function GET() {
//   return Response.json(feedback);
// }

// export async function POST(request) {
//   const body = await request.json();

//   const newFeedback = { message: body.message, id: feedback.length + 1 };
//   feedback.push(newFeedback);

//   console.log(feedback);
//   if (!body.message || typeof body.message !== "string") {
//     return Response.json({
//       status: 400,
//       message: "please send a message",
//     });
//   }
//   return Response.json({
//     acknowledged: true,
//     insertedId: newFeedback.id,
//   });
// }

const feedbackCollection = connect(collectionNamesObj.feedbackCollection);

export async function GET(request) {
  return Response.json(await feedbackCollection.find().toArray());
}

export async function POST(request) {
  const { message } = await request.json();
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "please send a message",
    });
  }
  const newFeedback = { message, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedback);
  return Response.json(result);
}
