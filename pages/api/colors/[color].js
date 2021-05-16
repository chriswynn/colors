import { getColor } from "../../../lib/get-color";

export default function handler(req, res) {
  const { color } = req.query;
  const randomColor = getColor(color);
  res.status(200).json({ color: randomColor });
}
