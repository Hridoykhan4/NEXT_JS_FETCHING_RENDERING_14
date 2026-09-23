import { feedback } from "../../route";

export async function GET(request, {params}) {
    const {id} = await params;
    const singleFeedback = feedback.find(f => f.id === Number(id)) || {}
    console.log(singleFeedback);
    return Response.json(singleFeedback)
}