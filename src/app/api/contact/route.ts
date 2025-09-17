import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For Azure Static Web Apps, we'll just return success
    // In production, you would integrate with your email service
    console.log('Contact form submission:', {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company,
      message: body.message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

