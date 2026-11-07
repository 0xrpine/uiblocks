"use client";

import { Textarea } from "./textarea";

export function TextareaDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <Textarea label="Message" required maxLength={500} placeholder="Write your message..." hint="Up to 500 characters." />
      <Textarea label="Feedback" placeholder="Tell us what you think..." error="Feedback cannot be empty." />
    </div>
  );
}
