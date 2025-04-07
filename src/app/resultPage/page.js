import Result from "@/components/Result";
import dbConnect from "@/lib/db/dbConnect";
import ShortLink from "@/lib/db/models/ShortLink";

export const dynamic = "force-dynamic";

export default async function resultPage() {
  await dbConnect();
  const rawLinks = await ShortLink.find().lean();
  const shortLinks = JSON.parse(JSON.stringify(rawLinks));
  console.log(shortLinks);

  return (
    <div>
      <Result response={shortLinks} />
    </div>
  );
}
