import { feedback } from "../route";

export async function GET() {
  return Response.json(feedback);
}

export async function POST(request) {
  const body = await request.json();

  const newFeedback = { message: body.message, id: feedback.length + 1 };
  feedback.push(newFeedback);

  console.log(feedback);
  if (!body.message || typeof body.message !== "string") {
    return Response.json({
      status: 400,
      message: "please send a message",
    });
  }
  return Response.json({
    acknowledged: true,
    insertedId: newFeedback.id,
  });
}
