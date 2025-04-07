import dbConnect from "@/lib/db/dbConnect";
import ShortLink from "@/lib/db/models/ShortLink";

export default async function handler(req, res) {
    await dbConnect();
    console.log(`출력 : ${ShortLink}`);
    switch (req.method) {
        case "GET":
            // 전체 조회
            const shortLinks = await ShortLink.find();
            res.send(shortLinks);
            break;
        case "POST":
            const nextShortLink = await ShortLink.create(req.body);
            res.status(201).send(nextShortLink);
            break;
    }
}
