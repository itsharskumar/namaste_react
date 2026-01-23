const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// allow requests from frontend
app.use(cors());

// route
app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5199&lng=77.4587&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          // very important headers
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json"
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Swiggy API failed",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
