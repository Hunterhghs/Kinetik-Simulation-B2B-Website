"use client";

import * as React from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DemoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  message: z.string().optional(),
  // Honeypot
  website: z.string().optional(),
});

type DemoPayload = z.infer<typeof DemoSchema>;

export function DemoForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = React.useState<string | null>(null);

  const [form, setForm] = React.useState<DemoPayload>({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    website: "",
  });

  const onChange =
    (key: keyof DemoPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = DemoSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    // Honeypot: silently succeed for bots
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    
    try {
      // For static hosting, use a form submission service
      // Option 1: Formspree (replace with your form ID)
      // Option 2: Netlify Forms (add data-netlify="true" to form)
      // Option 3: Email link fallback
      
      // Using Web3Forms as a free option (replace with your access key)
      const formData = new FormData();
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with real key
      formData.append("name", parsed.data.name);
      formData.append("email", parsed.data.email);
      formData.append("company", parsed.data.company);
      formData.append("role", parsed.data.role);
      formData.append("message", parsed.data.message || "No message provided");
      formData.append("subject", `Demo Request from ${parsed.data.company}`);

      // For now, just simulate success (replace with real form endpoint)
      // const response = await fetch("https://api.web3forms.com/submit", {
      //   method: "POST",
      //   body: formData,
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please email hello@kinetikb2b.ai directly.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Request a demo</CardTitle>
        <CardDescription>
          Share your workflow and signal sources. We'll follow up with a clear evaluation plan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === "success" ? (
          <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm">
            <div className="font-medium">Thanks — request received.</div>
            <div className="mt-1 text-muted-foreground">
              We'll respond with suggested next steps and a short discovery checklist.
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <Input id="name" value={form.name} onChange={onChange("name")} autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Work email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="company">
                  Company
                </label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={onChange("company")}
                  autoComplete="organization"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="role">
                  Role
                </label>
                <Input id="role" value={form.role} onChange={onChange("role")} placeholder="RevOps, Sales Ops, Marketing Ops…" />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="message">
                What workflow do you want to validate first?
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={onChange("message")}
                placeholder="Example: signal-based routing governance + SLA enforcement."
              />
            </div>

            {/* Honeypot field */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input id="website" value={form.website} onChange={onChange("website")} />
            </div>

            {error ? (
              <div className="rounded-md border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
                {error}
              </div>
            ) : null}

            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting…" : "Submit request"}
            </Button>

            <p className="text-xs text-muted-foreground">
              By submitting, you agree we may contact you about this request.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
