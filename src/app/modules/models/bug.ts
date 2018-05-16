import { IComment } from './comment';

export interface Bug {
  id: string;
  title: string;
  description: string;
  priority: number;
  reporter: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: IComment[];
}
