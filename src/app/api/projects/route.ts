import { NextResponse } from 'next/server';
import { getProjectRepository } from '@/infrastructure/container';

export async function GET() {
  const repo = getProjectRepository();
  const projects = await repo.findAll();
  return NextResponse.json(projects);
}
