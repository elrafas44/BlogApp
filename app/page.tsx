import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function HomePage() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <Link href="/new" className="text-blue-500 hover:underline">
        Nuevo Post
      </Link>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.slug}`} className="text-lg text-blue-700 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}