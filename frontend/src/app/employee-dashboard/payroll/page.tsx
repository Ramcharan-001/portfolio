
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { mockAttendance } from '@/lib/data';
import { useAuth } from '@/hooks/use-auth';
import Image from 'next/image';
import Link from 'next/link';

export default function UserBlogPage() {
    const { user } = useAuth();
    // Reusing mock data for blog posts
    const blogPosts = mockAttendance.map((record, index) => ({
      id: record.id,
      title: `The Importance of ${['Clean Code', 'State Management', 'Testing', 'CI/CD'][index % 4]}`,
      date: record.date,
      excerpt: 'In this post, I explore the fundamental principles and best practices that lead to robust and maintainable software...',
      imageUrl: `https://picsum.photos/seed/${index+20}/600/400`,
      category: ['Development', 'React', 'DevOps', 'Best Practices'][index % 4],
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">My Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
                <div className="relative h-40 w-full">
                    <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="rounded-t-lg object-cover w-full h-full" />
                </div>
                <CardHeader>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription>{post.date} &bull; {post.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button variant="outline" asChild>
                        <Link href="#">Read More</Link>
                    </Button>
                </div>
            </Card>
        ))}
      </div>
    </div>
  );
}
