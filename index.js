const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Server is up and running");
})


app.listen(PORT, () => console.log(`Server start on port ${PORT}`));