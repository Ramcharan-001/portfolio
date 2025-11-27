
import { User, Submission, SubmissionStatus } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

const avatar1 = PlaceHolderImages.find(img => img.id === 'avatar-1')?.imageUrl;
const avatar2 = PlaceHolderImages.find(img => img.id === 'avatar-2')?.imageUrl;
const avatar3 = PlaceHolderImages.find(img => img.id === 'avatar-3')?.imageUrl;
const avatar4 = PlaceHolderImages.find(img => img.id === 'avatar-4')?.imageUrl;

// mockUsers now represents Portfolio Owner (Admin) and generic users (Student)
export const mockUsers: User[] = [
  {
    uid: 'admin001',
    name: 'Alex Doe',
    email: 'admin@example.com',
    role: 'Admin',
    department: 'Full Stack Developer & Designer',
    gpa: 4.0, 
    joinedDate: '2020-01-01',
    avatarUrl: avatar1,
  },
  {
    uid: 'student001',
    name: 'John Davis',
    email: 'visitor1@example.com',
    role: 'Student', 
    department: 'Visitor',
    gpa: 0,
    joinedDate: '2023-09-01',
    avatarUrl: avatar2,
  },
  {
    uid: 'student002',
    name: 'Emily Clark',
    email: 'visitor2@example.com',
    role: 'Student',
    department: 'Visitor',
    gpa: 0,
    joinedDate: '2022-07-01',
    avatarUrl: avatar3,
  },
  {
    uid: 'student003',
    name: 'Michael Brown',
    email: 'visitor3@example.com',
    role: 'Student',
    department: 'Visitor',
    gpa: 0,
    joinedDate: '2024-01-01',
    avatarUrl: avatar4,
  },
];

export const mockArticles: Submission[] = [
    {
        id: 'art001',
        title: 'Building a Design System in Figma',
        author: 'Alex Doe',
        abstract: 'A deep dive into creating a scalable design system from scratch.',
        submittedDate: '2024-07-15',
        status: 'Published',
        journal: 'UX Collective',
    },
    {
        id: 'art002',
        title: 'The Rise of Server Components',
        author: 'Alex Doe',
        abstract: 'Exploring the future of React with server-side rendering.',
        submittedDate: '2024-06-20',
        status: 'Published',
        journal: 'Smashing Magazine',
    },
    {
        id: 'art003',
        title: 'Getting Started with Genkit',
        author: 'Alex Doe',
        abstract: 'An introductory guide to Google\'s new generative AI framework.',
        submittedDate: '2024-08-01',
        status: 'Draft',
        journal: 'Personal Blog',
    }
];

// Re-purposing mockSubmissions for projects
export const mockSubmissions: Submission[] = [
    {
        id: 'proj001',
        title: 'E-commerce Platform',
        author: 'Alex Doe',
        abstract: 'A full-stack e-commerce site built with Next.js and Stripe.',
        submittedDate: '2024-05-01',
        status: 'Published', // Using status for project state
        journal: 'Web Development', // Using journal for category
    },
    {
        id: 'proj002',
        title: 'Mobile Banking App UI',
        author: 'Alex Doe',
        abstract: 'A sleek and modern UI kit for a mobile banking application designed in Figma.',
        submittedDate: '2024-03-10',
        status: 'Published',
        journal: 'UI/UX Design',
    },
     {
        id: 'proj003',
        title: 'AI-Powered Chatbot',
        author: 'Alex Doe',
        abstract: 'A customer service chatbot using Genkit and Firebase.',
        submittedDate: '2024-07-22',
        status: 'Published',
        journal: 'AI/ML',
    }
];


// Empty exports for old data types
export const mockProperties: any[] = [];
export const mockPayments: any[] = [];
export const mockMaintenance: any[] = [];
export const mockTenants: any[] = [];
