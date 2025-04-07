import Form from "@/components/Form";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Form />
      <br />
      <Link href="/resultPage">확인하러가기</Link>
    </div>
  );
}
