import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostRepository } from '@/infrastructure/container';
import { blogPostToJSON } from '@/core/domain/entities/BlogPost';

export async function GET(request: NextRequest) {
  const published = request.nextUrl.searchParams.get('published');
  const repo = getBlogPostRepository();

  const posts = await repo.findAll({
    published: published === 'true' ? true : published === 'false' ? false : undefined,
  });

  return NextResponse.json(posts.map(blogPostToJSON));
}
