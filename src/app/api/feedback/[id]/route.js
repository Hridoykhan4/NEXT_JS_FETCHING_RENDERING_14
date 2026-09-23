import { collectionNamesObj, connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
const feedbackCollection = connect(collectionNamesObj.feedbackCollection);

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);

  // const singleFeedback = feedback.find(f => f.id === Number(id)) || {}
  // console.log(singleFeedback);
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a message",
    });
  }

  const query = { _id: new ObjectId(id) };

  const newData = {
    $set: {
      message,
      updatedAt: new Date().toISOString(),
    },
  };

  return Response.json(await feedbackCollection.updateOne(query, newData));
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }

  return Response.json(
    await feedbackCollection.deleteOne({ _id: new ObjectId(id) }),
  );
}
