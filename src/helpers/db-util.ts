import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}/next-events?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
