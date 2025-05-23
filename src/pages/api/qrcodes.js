export default function handleApi(req, res) {
  switch (req.method) {
    case "GET":
      res.json([
        [
          {
            id: "abc",
            title: "위키피디아 Next.js",
            url: "https://en.wikipedia.org/wiki/Next.js",
          },
          {
            id: "def",
            title: "코드잇 자유게시판",
            url: "https://codeit.kr/community/general",
          },
          {
            id: "ghi",
            title: "코드잇 질문답변",
            url: "https://www.codeit.kr/community/questions",
          },
        ],
      ]);
    case "POST":
      res.send({
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      });
    case "PATCH":
      res.status(404).send("404 not found");
  }
}
