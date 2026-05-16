import {
  createCipheriv,
  createDecipheriv,
  pbkdf2Sync,
  randomBytes,
} from "crypto";

const ALGORITHM = "aes-256-gcm";
const KEY_LENGTH = 32;
const IV_LENGTH = 12;
const SALT_LENGTH = 16;
const ITERATIONS = 100000;

function getKey(password: string, salt: Buffer): Buffer {
  return pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, "sha256");
}

export function encrypt(text: string): string {
  const password =
    process.env.ENCRYPTION_KEY || "your-32-char-secure-key-here!!";
  const salt = randomBytes(SALT_LENGTH);
  const iv = randomBytes(IV_LENGTH);
  const key = getKey(password, salt);

  const cipher = createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  const authTag = cipher.getAuthTag().toString("base64");

  // Format: salt:iv:authTag:ciphertext
  return `${salt.toString("base64")}:${iv.toString("base64")}:${authTag}:${encrypted}`;
}

export function decrypt(ciphertext: string): string {
  const password =
    process.env.ENCRYPTION_KEY || "your-32-char-secure-key-here!!";
  const [saltB64, ivB64, authTagB64, encryptedB64] = ciphertext.split(":");
  if (!saltB64 || !ivB64 || !authTagB64 || !encryptedB64)
    throw new Error("Invalid ciphertext format");

  const salt = Buffer.from(saltB64, "base64");
  const iv = Buffer.from(ivB64, "base64");
  const authTag = Buffer.from(authTagB64, "base64");
  const key = getKey(password, salt);

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  let decrypted = decipher.update(encryptedB64, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
