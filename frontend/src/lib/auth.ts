
import { User, UserRole } from "@/types";
import { mockUsers } from "./data";

export interface Credentials {
  email: string;
  password?: string;
}

export interface SignUpCredentials extends Credentials {
  name: string;
  role: UserRole;
}

const AUTH_STORAGE_KEY = 'synergy-ems-auth-user';
const API_BASE_URL = 'http://localhost:8080/api/auth';

// --- Auth State ---

let currentUser: User | null = null;
const listeners: ((user: User | null) => void)[] = [];

if (typeof window !== 'undefined') {
  try {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
  }
}

function notifyListeners() {
  listeners.forEach(listener => listener(currentUser));
}

// --- Auth Functions ---

/**
 * Signs a user in by finding them in the mock data.
 * @param credentials The user's email and password.
 * @returns A promise that resolves with the User object.
 */
export const mockSignIn = async (credentials: Credentials): Promise<User> => {
  console.log('Attempting sign in with:', credentials);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.email.toLowerCase() === credentials.email.toLowerCase());
      if (user) {
        currentUser = user;
        try {
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
        } catch (error) {
          console.error("Failed to save user to localStorage", error);
        }
        notifyListeners();
        resolve(user);
      } else {
        reject(new Error("Invalid email or password."));
      }
    }, 500);
  });
};

/**
 * Signs a new user up.
 * @param credentials The new user's details.
 * @returns A promise that resolves with the new User object.
 */
export const mockSignUp = async (credentials: SignUpCredentials): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = mockUsers.find(u => u.email.toLowerCase() === credentials.email.toLowerCase());
      if (existingUser) {
        reject(new Error("An account with this email already exists."));
        return;
      }
      
      const newUser: User = {
        uid: `user${Math.floor(Math.random() * 10000)}`,
        name: credentials.name,
        email: credentials.email,
        role: credentials.role,
        department: credentials.role === 'Student' ? 'Grade 10' : 'N/A', // Example default
        gpa: 0,
        joinedDate: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD
        avatarUrl: `https://i.pravatar.cc/150?u=${credentials.email}`,
      };

      mockUsers.push(newUser);
      currentUser = newUser;
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
      } catch (error) {
        console.error("Failed to save user to localStorage", error);
      }
      notifyListeners();
      resolve(newUser);
    }, 500);
  });
};


/**
 * Simulates a user signing out.
 * @returns A promise that resolves when sign-out is complete.
 */
export const mockSignOut = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            currentUser = null;
            try {
                localStorage.removeItem(AUTH_STORAGE_KEY);
            } catch (error) {
                console.error("Failed to remove user from localStorage", error);
            }
            notifyListeners();
            resolve();
        }, 300);
    });
};


/**
 * Simulates a listener for auth state changes, like Firebase's onAuthStateChanged.
 * @param callback The function to call when the auth state changes.
 * @returns An unsubscribe function.
 */
export const onMockAuthStateChanged = (callback: (user: User | null) => void): (() => void) => {
  // Immediately call the listener with the current user state
  callback(currentUser);

  // Add the listener to the list
  listeners.push(callback);

  // Return an unsubscribe function
  return () => {
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};
