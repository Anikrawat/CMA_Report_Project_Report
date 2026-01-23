import { auth } from '@/lib/auth'
import { signUpServerSchema } from '@/Schemas/sign-up-schema';
import dbConnect from '@/db/dbConnect';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json()
    const { email, password, name } = signUpServerSchema.parse(body);

    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json({
      message: "Signed-Up Successfully",
      data
    }, { status: 200 })

  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          errors: error.issues.map((err: any) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json({
      message: error.message
    }, { status: error.statusCode })
  }
}
