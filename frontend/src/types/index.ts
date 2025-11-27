
export type UserRole = 'Admin' | 'Student'; // Admin is Portfolio Owner, Student is a generic user/visitor

export interface User {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  department: string; // Represents 'Job Title' or 'Headline'
  gpa: number; // Can be repurposed or removed
  joinedDate: string; // Can represent 'Member Since' or similar
  avatarUrl?: string;
}

export type SubmissionStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Revisions Required' | 'Accepted' | 'Rejected' | 'Published';

// This type is versatile and can represent projects, articles, etc.
export interface Submission {
    id: string;
    title: string;
    author: string;
    abstract: string; // Can be a short description
    submittedDate: string; // Can be creation or publication date
    status: SubmissionStatus;
    journal: string; // Can be a category, like 'Web Development' or 'UX Design'
    fileUrl?: string; // Link to project or article
    imageUrl?: string; // Image for the project/article
}


// These types are no longer used in the portfolio context but are kept to avoid breaking imports
export type PropertyStatus = 'Occupied' | 'Vacant' | 'Under Maintenance';
export interface Property {}
export type PaymentStatus = 'Paid' | 'Due' | 'Late';
export interface Payment {}
export type MaintenanceStatus = 'Pending' | 'In Progress' | 'Completed';
export interface MaintenanceRequest {}
