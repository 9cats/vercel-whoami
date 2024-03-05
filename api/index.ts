import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "text/plain");
	Object.keys(req.headers).sort().forEach(key => {
		res.write(key + ": " + req.headers[key] + "\n");
	});
  res.end();
}
