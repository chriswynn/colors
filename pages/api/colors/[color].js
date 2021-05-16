import Cors from "cors";
import { getColor } from "../../../lib/get-color";
import { initMiddleware } from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  const { color } = req.query;
  const randomColor = getColor(color);
  res.status(200).json({ color: randomColor });
}
