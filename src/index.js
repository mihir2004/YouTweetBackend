import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.on("error", (error) => {
      console.log(`Err:`, error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server live at PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error in Conncecting to DB`, err);
  });
