import axios from "axios";

export default async function postLinks({ title, url }) {
  await axios.post("/api/short-links", {
    title,
    url,
  });
}
