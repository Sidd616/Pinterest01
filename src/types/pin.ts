export interface Pin {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  userId: string;
  username: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  username: string;
  createdAt: Date;
}