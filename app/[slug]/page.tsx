import { prisma } from '@/lib/prisma';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return <div>Post no encontrado</div>;

  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="whitespace-pre-line">{post.content}</p>
    </article>
  );
}