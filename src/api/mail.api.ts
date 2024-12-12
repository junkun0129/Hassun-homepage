export const sendEmailApi = async ({
  mailtext,
  from,
}: {
  mailtext: string;
  from: string;
}) => {
  console.log(mailtext);
  console.log(from);
  const res = await fetch("http://localhost:3001/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mailtext, from }),
  });
  console.log(res);

  if (!res.ok) {
    throw new Error(
      `Failed to send email: ${res.status} ${
        res.statusText
      }. Payload: ${JSON.stringify({ mailtext, from })}`
    );
  }

  const text = await res.text();
  console.log(text);
  // Attempt to parse JSON
  return text;
};
