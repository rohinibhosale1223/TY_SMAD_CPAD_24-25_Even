export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  uploadedBy: string;
  uploadDate: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
} 