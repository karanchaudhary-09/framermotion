interface EmailData {
  to: string;
  subject: string;
  text: string;
}

interface EmailResponse {
  message: string;
}

export async function sendEmail(
  to: string,
  subject: string,
  text: string
): Promise<EmailResponse> {
  const response = await fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, subject, text } as EmailData),
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response.json() as Promise<EmailResponse>;
}
