const express = require("express");
const app = express();
const router = require("./src/routes/index");
const db = require("./src/models/index");
const cors = require("cors");
const passport = require("./src/utils/passport");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(passport.initialize());
db.sequelize
	.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
