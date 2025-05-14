import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    bookId: '1',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'This book is an absolute masterpiece! The character development is incredible, and the themes of racial injustice are as relevant today as they were when it was written. Scout\'s narrative voice is perfect.',
    date: '2023-04-12',
    likes: 24
  },
  {
    id: '2',
    bookId: '1',
    userId: '2',
    userName: 'Sarah Miller',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'A classic for good reason. The prose is beautiful and Atticus Finch remains one of the most moral characters in literature. Some parts felt a bit slow, but overall it was engaging throughout.',
    date: '2023-05-23',
    likes: 18
  },
  {
    id: '3',
    bookId: '2',
    userId: '3',
    userName: 'Michael Chen',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'Fitzgerald\'s portrayal of the Jazz Age is unmatched. The green light as a symbol of hope and the unreachable American Dream is brilliant. This novel gets better with each reading.',
    date: '2023-02-15',
    likes: 32
  },
  {
    id: '4',
    bookId: '3',
    userId: '4',
    userName: 'Emma Davis',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'Orwell was prophetic. The concept of Big Brother and constant surveillance feels more relevant now than ever. A disturbing but essential read for understanding the dangers of totalitarianism.',
    date: '2023-06-07',
    likes: 41
  },
  {
    id: '5',
    bookId: '4',
    userId: '5',
    userName: 'James Wilson',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'Austen\'s wit and social commentary shine in this romantic classic. Elizabeth Bennet is one of literature\'s most enduring heroines, and her relationship with Darcy evolves beautifully.',
    date: '2023-03-18',
    likes: 29
  },
  {
    id: '6',
    bookId: '5',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'The perfect adventure story! Tolkien\'s world-building is unmatched, and Bilbo\'s journey from reluctant burglar to hero is delightful. The riddles in the dark chapter remains one of my favorites in all literature.',
    date: '2023-01-30',
    likes: 37
  },
  {
    id: '7',
    bookId: '6',
    userId: '2',
    userName: 'Sarah Miller',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'Holden Caulfield captures the alienation of adolescence perfectly. While his constant complaints can be grating, there\'s something universal about his struggle to find authenticity in a world full of "phonies."',
    date: '2023-04-05',
    likes: 22
  },
  {
    id: '8',
    bookId: '7',
    userId: '3',
    userName: 'Michael Chen',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'A simple fable with profound wisdom. "When you want something, all the universe conspires in helping you to achieve it" - this quote alone made the book worth reading for me.',
    date: '2023-05-11',
    likes: 31
  },
  {
    id: '9',
    bookId: '8',
    userId: '4',
    userName: 'Emma Davis',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'The book that introduced me to reading! Rowling creates a magical world that feels completely real. Harry\'s journey from unwanted child to hero is both heartwarming and thrilling.',
    date: '2023-02-28',
    likes: 45
  },
  {
    id: '10',
    bookId: '8',
    userId: '5',
    userName: 'James Wilson',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'Pure magic from start to finish. The characters are instantly lovable, the plot is engaging, and the world-building is incredible. I\'ve read this countless times and it never loses its charm.',
    date: '2023-03-14',
    likes: 38
  }
];