import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, slug, content } = await request.json();
    const post = await prisma.post.create({ data: { title, slug, content } });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear el post' },
      { status: 500 }
    );
  }
}