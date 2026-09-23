export const feedback = [
  {
    id: 1,
    message: "The food is so good",
  },
  {
    id: 2,
    message: "The gesture of the waiter needs to be improved",
  },
];


export const GET = async (request) => {
  return Response.json({
    status: 200,
    message: "Yahoo! API created",
  });
};

