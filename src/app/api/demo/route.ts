import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DemoRequestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  role: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = DemoRequestSchema.parse(body);

    // In production, this would:
    // 1. Send to a CRM (Salesforce, HubSpot)
    // 2. Trigger email notifications
    // 3. Add to a queue for follow-up
    // 4. Track the conversion event

    // For now, just log and return success
    console.log("Demo request received:", {
      ...data,
      timestamp: new Date().toISOString(),
      source: "website",
    });

    // Placeholder: In production, integrate with your lead management system
    // Example: await sendToHubSpot(data);
    // Example: await sendSlackNotification(data);

    return NextResponse.json(
      { 
        success: true, 
        message: "Demo request received. We will be in touch shortly." 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    console.error("Demo request error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
