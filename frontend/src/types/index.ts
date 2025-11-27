
export type UserRole = 'Admin' | 'Student';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  department: string; // Represents expertise for portfolio, e.g., 'Frontend Development'
  gpa: number; // Not relevant for portfolio, can be ignored or repurposed
  joinedDate: string; // Represents account creation date
  avatarUrl?: string;
}

export type ReportStatus = 'Draft' | 'Published' | 'Archived'; // Now represents Blog Post status

export interface Report {
    id: string;
    studentName: string; // Represents Blog Post Title
    gradeLevel: string; // Represents Blog Post Category
    generatedBy: string; // Represents Author
    date: string; // Represents Published Date
    status: ReportStatus;
}

export interface RecentGrade {
    id: string;
    studentName: string; // Represents contact person's name
    teacherName: string; // Not relevant
    subject: string; // Represents contact subject
    assignment: string; // Represents contact message snippet
    grade: string; // Not relevant
}

export interface StudentReport {
    id: string;
    studentId: string; // Represents project ID
    reportPeriod: string; // Represents project title
    publishedDate: string; // Represents project completion date
    overallGrade: string; // Represents tech stack
}

export type AttendanceStatus = 'Read' | 'Unread'; // Represents contact message status

export interface AttendanceRecord {
    id: string;
    date: string; // YYYY-MM-DD format, represents message date
    status: AttendanceStatus;
    reason: string; // Represents message subject
}

export interface StudentPerformance {
    subject: string;
    averageScore: number;
    topScore: number;
}
