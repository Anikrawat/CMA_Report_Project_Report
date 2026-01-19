import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const nextParam = searchParams.get("next");
    const baseUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";
    const callbackURL = nextParam ? `${baseUrl}${nextParam}` : `${baseUrl}/dashboard`;

    const { email, password } = await request.json();

    const data = await auth.api.signInEmail({
      body: {
        email, // required
        password, // required
        rememberMe: true,
        callbackURL,
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({
      message: "Signed In Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    console.log(error)
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}

