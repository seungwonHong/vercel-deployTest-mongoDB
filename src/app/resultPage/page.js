import Result from "@/components/Result";
import dbConnect from "@/lib/db/dbConnect";
import ShortLink from "@/lib/db/models/ShortLink";

export default async function resultPage() {
  await dbConnect();
  const shortLinks = await ShortLink.find();
  console.log(shortLinks);

  return (
    <div>
      <Result response={shortLinks} />
    </div>
  );
}
