import dbConnect from "@/lib/db/dbConnect";
import ShortLink from "@/lib/db/models/ShortLink";

export default async function handleApi(req, res) {
  await dbConnect();
  const { id } = req.query; // url에서 값 조회

  switch (req.method) {
    case "GET":
      // 특정 목록 조회
      const shortLink = await ShortLink.findById(id);
      res.status(200).send(shortLink);
      break;
    case "PATCH":
      const updatedShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(updatedShortLink);
      break;
    case "DELETE":
      await ShortLink.findByIdAndDelete(id);
      res.status(204).end();
      break;
    case "POST":
      try {
        const nextShortLink = await ShortLink.create(req.body);
        res.status(201).send(nextShortLink);
      } catch {
        console.log("데이터 삽입 실패");
      }
      break;
    default:
      res.status(404).send("error");
  }
}
