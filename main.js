import { Client, Databases } from "node-appwrite";

const PROJECT_ID = process.env.PROJECT_ID;

export default async ({ req, res, log, error }) => {
	const client = new Client();

	client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

	return res.send("Hey fuckers!");
};
