export interface BlogItem {
  id: string;
  title: string;
  author: string;
  subject: string;
  message: string;
  tags: string[];
  createdAt : Date | string
}
