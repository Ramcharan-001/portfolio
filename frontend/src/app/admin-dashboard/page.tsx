
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Layers, FileText, MessageSquare, Eye } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, CartesianGrid, XAxis, AreaChart as RechartsAreaChart } from 'recharts';
import { useEffect, useState } from 'react';
import { mockRecentGrades } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

const chartConfig = {
  views: {
    label: 'Views',
    color: 'hsl(var(--primary))',
  },
};

export default function AdminDashboardPage() {
    const { user } = useAuth();
  const [chartData, setChartData] = useState<Array<{ month: string; views: number }>>([]);
  
  useEffect(() => {
    // Generate chart data on the client side to avoid hydration errors
    const data = [
      { month: 'Jan', views: 150 },
      { month: 'Feb', views: 220 },
      { month: 'Mar', views: 300 },
      { month: 'Apr', views: 280 },
      { month: 'May', views: 450 },
      { month: 'Jun', views: 400 },
    ];
    setChartData(data);
  }, []);

  const recentContacts = mockRecentGrades; // Re-using for now

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 unread</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,823</div>
            <p className="text-xs text-muted-foreground">+50 in last 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Portfolio Views</CardTitle>
            <CardDescription>Profile view trend over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <RechartsAreaChart accessibilityLayer data={chartData}>
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
                <Area
                  dataKey="views"
                  type="natural"
                  fill="var(--color-views)"
                  fillOpacity={0.4}
                  stroke="var(--color-views)"
                />
              </RechartsAreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Contacts</CardTitle>
            <CardDescription>Latest messages from your contact form.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <ul className="space-y-4">
              {recentContacts.slice(0, 3).map((contact) => (
                <li key={contact.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{contact.studentName}</p>
                    <p className="text-sm text-muted-foreground">Subject: {contact.assignment}</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
              ))}
            </ul>
             <Button asChild variant="outline">
              <Link href="/admin-dashboard/leaves">View All Messages</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
