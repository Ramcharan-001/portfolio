
import { User, Report, RecentGrade, StudentReport, AttendanceRecord, StudentPerformance } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

const avatar1 = PlaceHolderImages.find(img => img.id === 'avatar-1')?.imageUrl;
const avatar2 = PlaceHolderImages.find(img => img.id === 'avatar-2')?.imageUrl;
const avatar3 = PlaceHolderImages.find(img => img.id === 'avatar-3')?.imageUrl;
const avatar4 = PlaceHolderImages.find(img => img.id === 'avatar-4')?.imageUrl;
const avatar5 = PlaceHolderImages.find(img => img.id === 'avatar-5')?.imageUrl;


export const mockUsers: User[] = [
  {
    uid: 'admin001',
    name: 'Alex Johnson',
    email: 'admin@example.com',
    role: 'Admin',
    department: 'Software Engineering',
    gpa: 0,
    joinedDate: '2022-01-15',
    avatarUrl: avatar1,
  },
  {
    uid: 'student001',
    name: 'Maria Garcia',
    email: 'visitor1@example.com',
    role: 'Student', // Represents a generic visitor, not a real role
    department: 'UI/UX Design',
    gpa: 3.8,
    joinedDate: '2023-09-01',
    avatarUrl: avatar2,
  },
  {
    uid: 'student002',
    name: 'Peter Jones',
    email: 'visitor2@example.com',
    role: 'Student',
    department: 'Backend Development',
    gpa: 3.2,
    joinedDate: '2022-09-01',
    avatarUrl: avatar3,
  },
  {
    uid: 'student003',
    name: 'Mary Williams',
    email: 'visitor3@example.com',
    role: 'Student',
    department: 'Frontend Development',
    gpa: 4.0,
    joinedDate: '2023-09-01',
    avatarUrl: avatar4,
  },
];

export const mockReports: Report[] = [
    {
        id: 'post001',
        studentName: 'The Art of State Management',
        gradeLevel: 'React',
        generatedBy: 'Alex Johnson',
        date: '2024-07-15',
        status: 'Sent', // Published
    },
    {
        id: 'post002',
        studentName: 'Diving Deep into Next.js 14',
        gradeLevel: 'Next.js',
        generatedBy: 'Alex Johnson',
        date: '2024-07-28',
        status: 'Pending', // Draft
    },
    {
        id: 'post003',
        studentName: 'A Guide to Clean Code',
        gradeLevel: 'Best Practices',
        generatedBy: 'Alex Johnson',
        date: '2024-07-14',
        status: 'Sent', // Published
    },
     {
        id: 'post004',
        studentName: 'CI/CD Pipelines with GitHub Actions',
        gradeLevel: 'DevOps',
        date: '2024-06-20',
        status: 'Archived', // Archived
    }
];

export const mockRecentGrades: RecentGrade[] = [
    {
        id: 'contact001',
        studentName: 'Recruiter from TechCorp',
        teacherName: '',
        subject: 'Job Opportunity',
        assignment: 'Interested in your profile for a Senior Dev role...',
        grade: 'A-',
    },
    {
        id: 'contact002',
        studentName: 'Jane Doe',
        teacherName: '',
        subject: 'Collaboration Idea',
        assignment: 'Loved your recent project, let\'s connect!',
        grade: 'B+',
    },
    {
        id: 'contact003',
        studentName: 'Startup Founder',
        teacherName: '',
        subject: 'Freelance Work',
        assignment: 'We have a project that would be perfect for you.',
        grade: 'C',
    },
];

export const mockStudentReports: StudentReport[] = [
    {
        id: 'proj001',
        studentId: 'admin001',
        reportPeriod: 'E-commerce Platform',
        publishedDate: '2024-01-15',
        overallGrade: 'React, Node.js',
    },
    {
        id: 'proj002',
        studentId: 'admin001',
        reportPeriod: 'Data Visualization Dashboard',
        publishedDate: '2024-06-10',
        overallGrade: 'D3.js, TypeScript',
    },
    {
        id: 'proj003',
        studentId: 'admin001',
        reportPeriod: 'Mobile Banking App',
        publishedDate: '2023-11-20',
        overallGrade: 'React Native, Firebase',
    }
];

export const mockAttendance: AttendanceRecord[] = [
    { id: 'msg001', date: '2024-07-25', status: 'Present', reason: 'Job Opportunity'},
    { id: 'msg002', date: '2024-07-24', status: 'Absent', reason: 'Collaboration Idea'},
    { id: 'msg003', date: '2024-07-23', status: 'Present', reason: 'General Inquiry'},
    { id: 'msg004', date: '2024-07-22', status: 'Absent', reason: 'Feedback on Blog Post'},
];

export const mockStudentPerformance: StudentPerformance[] = [
    { subject: 'Math', averageScore: 85, topScore: 98 },
    { subject: 'Science', averageScore: 88, topScore: 100 },
    { subject: 'History', averageScore: 78, topScore: 92 },
    { subject: 'English', averageScore: 82, topScore: 95 },
    { subject: 'Art', averageScore: 91, topScore: 100 },
];
