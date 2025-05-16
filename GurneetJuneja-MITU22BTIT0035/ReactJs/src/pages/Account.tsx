import React, { useState } from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');
  
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
  };
  
  // Mock order data
  const orders = [
    {
      id: 'ORD-12345',
      date: '2025-04-15',
      status: 'Delivered',
      total: 129.99,
      items: 3
    },
    {
      id: 'ORD-12346',
      date: '2025-04-02',
      status: 'Processing',
      total: 89.99,
      items: 2
    },
    {
      id: 'ORD-12347',
      date: '2025-03-20',
      status: 'Delivered',
      total: 59.99,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-medium text-primary-900 mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-900">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <button
                    className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-primary-700 text-white'
                        : 'text-primary-800 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="h-5 w-5 mr-3" />
                    Profile
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'orders'
                        ? 'bg-primary-700 text-white'
                        : 'text-primary-800 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('orders')}
                  >
                    <ShoppingBag className="h-5 w-5 mr-3" />
                    Orders
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'wishlist'
                        ? 'bg-primary-700 text-white'
                        : 'text-primary-800 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('wishlist')}
                  >
                    <Heart className="h-5 w-5 mr-3" />
                    Wishlist
                  </button>
                  <button
                    className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-primary-700 text-white'
                        : 'text-primary-800 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </button>
                  <button
                    className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {activeTab === 'profile' && (
                <div className="p-6 animate-fade-in">
                  <h2 className="text-xl font-medium text-primary-900 mb-6">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={user.phone}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        value={user.address}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={user.city}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={user.state}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={user.zip}
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        value={user.country}
                        className="input w-full"
                      />
                    </div>
                  </div>
                  
                  <Button variant="accent">
                    Save Changes
                  </Button>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div className="p-6 animate-fade-in">
                  <h2 className="text-xl font-medium text-primary-900 mb-6">Order History</h2>
                  
                  {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Order ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Items
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {orders.map((order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                                {order.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(order.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  order.status === 'Delivered'
                                    ? 'bg-green-100 text-green-800'
                                    : order.status === 'Processing'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {order.items}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${order.total.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-primary-700 hover:text-primary-800">
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-primary-800 mb-2">No Orders Yet</h3>
                      <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
                      <Button variant="accent" as="a" href="/products">
                        Start Shopping
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div className="p-6 animate-fade-in">
                  <h2 className="text-xl font-medium text-primary-900 mb-6">Wishlist</h2>
                  
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-primary-800 mb-2">Your Wishlist is Empty</h3>
                    <p className="text-gray-500 mb-6">Add items to your wishlist to save them for later.</p>
                    <Button variant="accent" as="a" href="/products">
                      Explore Products
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="p-6 animate-fade-in">
                  <h2 className="text-xl font-medium text-primary-900 mb-6">Account Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium text-primary-800 mb-4">Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="input w-full"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-500 mb-1">
                                New Password
                              </label>
                              <input
                                type="password"
                                className="input w-full"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-500 mb-1">
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                className="input w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="accent">
                        Update Password
                      </Button>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="text-lg font-medium text-primary-800 mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="email-notifications"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                            Receive email notifications about orders and promotions
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="newsletter"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
                            Subscribe to newsletter
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-8">
                      <h3 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="secondary" className="border-red-300 text-red-600 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;