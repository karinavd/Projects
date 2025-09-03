import {createRequire} from "module"
const require = createRequire(import.meta.url)
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/youtubeBackend")
  .then(() => console.log("success")).catch(e=>console.log(e));
