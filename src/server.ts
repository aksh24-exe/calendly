import { error } from "node:console";
import { app } from "./app.js";
import { connectToDatabase } from "./config/database.js";
import { PORT } from "./config/env.js";

async function startServer() {
    await connectToDatabase()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}


startServer().catch((error) => {
  console.error('[Server]: Something went wrong', error)
  process.exit(1)
});