import React, { useState } from 'react';
import { blogPosts } from '../data/blogs';
import BlogCard from '../components/blog/BlogCard';
import { Search, Laptop } from 'lucide-react';

interface BlogPageProps {
  setSelectedBlog: (blog: any) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setSelectedBlog }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(blog => blog.category)))];

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 pb-16">
      {/* Blog Hero */}
      <section className="bg-blue-700 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-blue-800 p-2 rounded-full mb-4">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              TechKeeda Blog
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Insightful articles, guides, and analysis from tech industry experts
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-10">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found. Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard 
                  key={blog.id} 
                  blog={blog}
                  setSelectedBlog={setSelectedBlog}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;