const express = require("express");

const app = express();

app.use(express.json());
app.use("/Students", require("./Routes/StudentRoutes"));
app.use("/projects", require("./Routes/ProjectRoutes"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Express is running at port ${port}`));
