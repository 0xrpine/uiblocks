"use client";

import { Input } from "./input";

export function InputDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <Input label="Email" required placeholder="olivia@example.com" hint="We will never share your email." />
      <Input label="Search" placeholder="Search..." leadingIcon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>} />
      <Input label="Username" placeholder="invalid input" error="This username is already taken." />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  );
}
