
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockAttendance } from '@/lib/data';
import { Trash2 } from 'lucide-react';

export default function ContactsPage() {
    const contacts = mockAttendance.map(a => ({
        id: a.id,
        name: `Visitor ${a.id.replace('att','')}`,
        email: `visitor${a.id.replace('att','')}@example.com`,
        date: a.date,
        subject: a.reason || 'General Inquiry',
        read: a.status === 'Present',
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <CardDescription>Messages from visitors via your contact form.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>From</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead className="hidden md:table-cell">Received</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contacts.map(contact => (
                        <TableRow key={contact.id}>
                            <TableCell>
                                <div className="font-medium">{contact.name}</div>
                                <div className="text-sm text-muted-foreground">{contact.email}</div>
                            </TableCell>
                            <TableCell>{contact.subject}</TableCell>
                            <TableCell className="hidden md:table-cell">{contact.date}</TableCell>
                            <TableCell>
                                <Badge variant={contact.read ? 'outline' : 'default'}>
                                    {contact.read ? 'Read' : 'Unread'}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="destructive" size="sm">
                                    <Trash2 className="mr-2 h-4 w-4"/>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
