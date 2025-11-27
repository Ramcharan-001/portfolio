
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookOpen, Code, Eye, Package, User } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, CartesianGrid, XAxis, BarChart as RechartsBarChart } from 'recharts';
import { useEffect, useState } from 'react';
import { mockArticles, mockSubmissions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Submission, SubmissionStatus } from '@/types';

const chartConfig = {
  views: {
    label: 'Views',
    color: 'hsl(var(--primary))',
  },
};

const statusStyles: { [key in SubmissionStatus]: string } = {
  Submitted: 'bg-yellow-500/10 text-yellow-500',
  'Under Review': 'bg-blue-500/10 text-blue-500',
  'Revisions Required': 'bg-orange-500/10 text-orange-500',
  Accepted: 'bg-green-500/10 text-green-500',
  Rejected: 'bg-red-500/10 text-red-500',
  Published: 'bg-purple-500/10 text-purple-500',
  Draft: 'bg-gray-500/10 text-gray-500'
};


export default function AdminDashboardPage() {
  const [chartData, setChartData] = useState<Array<{ month: string; views: number }>>([]);
  
  useEffect(() => {
    // Generate chart data on the client side to avoid hydration errors
    const data = [
      { month: 'Jan', views: 230 },
      { month: 'Feb', views: 350 },
      { month: 'Mar', views: 420 },
      { month: 'Apr', views: 550 },
      { month: 'May', views: 680 },
      { month: 'Jun', views: 890 },
    ];
    setChartData(data);
  }, []);

  const recentArticles = mockArticles.slice(0, 5);
  const totalProjects = 12; // Mock data
  const totalSkills = 45; // Mock data
  const totalArticles = mockArticles.length;


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Portfolio Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">Showcasing your best work</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills & Technologies</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSkills}</div>
            <p className="text-xs text-muted-foreground">Across various domains</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Articles</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalArticles}</div>
            <p className="text-xs text-muted-foreground">Sharing your knowledge</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Audience Growth</CardTitle>
            <CardDescription>Profile views over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <RechartsBarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} stroke="hsl(var(--border) / 0.5)" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                 <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                  dataKey="views"
                  fill="var(--color-views)"
                  radius={4}
                />
              </RechartsBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
            <CardDescription>Your latest published blog posts.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentArticles.map((req: Submission) => (
                        <TableRow key={req.id}>
                            <TableCell>
                                <p className="font-medium line-clamp-1">{req.title}</p>
                                <p className="text-sm text-muted-foreground">{req.journal}</p>
                            </TableCell>
                            <TableCell>
                                <Badge className={statusStyles[req.status]}>{req.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
             <Button asChild variant="outline">
              <Link href="/admin-dashboard/blog">View All Articles</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
