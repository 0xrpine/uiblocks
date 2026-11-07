"use client";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function AlertDemo() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4">
      <Alert
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        }
      >
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add supporting text to the alert here.</AlertDescription>
      </Alert>
      <Alert
        tone="destructive"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 8h.01" />
          </svg>
        }
      >
        <AlertTitle>Action required</AlertTitle>
        <AlertDescription>Your session is about to expire. Sign in again to continue.</AlertDescription>
      </Alert>
    </div>
  );
}
