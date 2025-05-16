import { User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Alex Johnson',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  bio: 'Book lover, coffee enthusiast, and amateur photographer. Always looking for new stories to get lost in.',
  joinDate: '2022-01-15',
  favoriteGenres: ['Science Fiction', 'Fantasy', 'Historical Fiction'],
  booksRead: 37,
  booksInProgress: 2,
  totalReviews: 24,
  books: [
    {
      bookId: '1',
      status: 'read',
      dateAdded: '2022-02-10',
      dateStarted: '2022-02-15',
      dateFinished: '2022-03-01'
    },
    {
      bookId: '5',
      status: 'read',
      dateAdded: '2022-04-05',
      dateStarted: '2022-04-10',
      dateFinished: '2022-04-25'
    },
    {
      bookId: '3',
      status: 'currently-reading',
      progress: 65,
      dateAdded: '2023-01-15',
      dateStarted: '2023-01-20'
    },
    {
      bookId: '7',
      status: 'currently-reading',
      progress: 30,
      dateAdded: '2023-02-03',
      dateStarted: '2023-02-05'
    },
    {
      bookId: '2',
      status: 'want-to-read',
      dateAdded: '2023-01-05'
    },
    {
      bookId: '4',
      status: 'want-to-read',
      dateAdded: '2023-01-25'
    },
    {
      bookId: '6',
      status: 'want-to-read',
      dateAdded: '2023-02-18'
    },
    {
      bookId: '8',
      status: 'want-to-read',
      dateAdded: '2023-03-02'
    }
  ]
};