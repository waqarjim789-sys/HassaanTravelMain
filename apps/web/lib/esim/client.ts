import crypto from "crypto";

const ESIM_API_URL = "https://api.esimaccess.com";

function getCredentials() {
  const accessCode = process.env.ESIM_ACCESS_CODE;
  const secretKey = process.env.ESIM_SECRET_KEY;

  if (!accessCode || !secretKey) {
    throw new Error(
      "Missing ESIM_ACCESS_CODE or ESIM_SECRET_KEY environment variables."
    );
  }

  return { accessCode, secretKey };
}

export async function esimRequest<T>(
  endpoint: string,
  body: Record<string, unknown> = {}
): Promise<T> {
  const { accessCode, secretKey } = getCredentials();

  const requestId = crypto.randomUUID();
  const timestamp = Date.now().toString();

  const requestBody = JSON.stringify(body);

  const signData =
    timestamp +
    requestId +
    accessCode +
    requestBody;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(signData)
    .digest("hex")
    .toLowerCase();

  const response = await fetch(`${ESIM_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "RT-AccessCode": accessCode,
      "RT-RequestID": requestId,
      "RT-Signature": signature,
      "RT-Timestamp": timestamp,
    },
    body: requestBody,
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `eSIM Access API error ${response.status}: ${
        data?.errorMessage || "Unknown error"
      }`
    );
  }

  return data as T;
}