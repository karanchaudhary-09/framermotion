declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASS: string;
    FROM_NAME: string;
    FROM_EMAIL: string;
  }
}
