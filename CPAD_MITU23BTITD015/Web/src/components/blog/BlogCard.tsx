import React from 'react';
import { BlogPost } from '../../types';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
  setSelectedBlog: (blog: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, setSelectedBlog }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
      onClick={() => setSelectedBlog(blog)}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {blog.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">{blog.excerpt}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm text-gray-500">{blog.date}</div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {blog.readTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;