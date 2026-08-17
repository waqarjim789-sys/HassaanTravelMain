const ESIM_ACCESS_CODE = process.env.ESIM_ACCESS_CODE;
const ESIM_SECRET_KEY = process.env.ESIM_SECRET_KEY;

const ESIM_API_URL = "https://api.esimaccess.com";

export async function esimPost(
  endpoint: string,
  body: Record<string, unknown> = {}
) {
  if (!ESIM_ACCESS_CODE || !ESIM_SECRET_KEY) {
    throw new Error(
      "Missing ESIM_ACCESS_CODE or ESIM_SECRET_KEY environment variables."
    );
  }

  const requestId = crypto.randomUUID();
  const timestamp = Date.now().toString();

  const requestBody = JSON.stringify(body);

  const signData =
    timestamp +
    requestId +
    ESIM_ACCESS_CODE +
    requestBody;

  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(ESIM_SECRET_KEY),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signData)
  );

  const signature = Array.from(
    new Uint8Array(signatureBuffer)
  )
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .toLowerCase();

  const response = await fetch(`${ESIM_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "RT-AccessCode": ESIM_ACCESS_CODE,
      "RT-RequestID": requestId,
      "RT-Timestamp": timestamp,
      "RT-Signature": signature,
    },
    body: requestBody,
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.errorMsg ||
        data?.errorMessage ||
        `eSIM Access API returned HTTP ${response.status}`
    );
  }

  return data;
}