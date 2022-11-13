import { startAppoloServer } from "./appolo-server.loaders";
import { DatabaseLoader } from "./database.loaders";
import config from "../config";

export default async function() {
  await DatabaseLoader.openConnection();
  
  await startAppoloServer();
}