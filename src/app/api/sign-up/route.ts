import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const nextParam = searchParams.get("next");
    const baseUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";
    const callbackURL = nextParam ? `${baseUrl}${nextParam}` : `${baseUrl}/dashboard`;

    const { email, password, name, role } = await request.json();

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL,
      },
    });

    return NextResponse.json({
      message: "Signed-Up Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}
