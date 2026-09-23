import { MongoClient, ServerApiVersion } from "mongodb";


const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

export const collectionNamesObj = {
    feedbackCollection: "feedback"
}


export const connect = (collectionName) => {
    const database = process.env.DB_NAME;
    return client.db(database).collection(collectionName)
}