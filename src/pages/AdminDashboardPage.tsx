import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameState } from '@/hooks/useGameState';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { ArrowLeft, Package2, Bell, Users, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminOrderDashboard from '@/components/AdminOrderDashboard';

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { gameState } = useGameState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'overview' | 'orders' | 'notifications' | 'users' | 'analytics'>('overview');

  // Check admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!gameState.isAuthenticated || !gameState.user?.id) {
        navigate('/');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', gameState.user.id));
        if (userDoc.exists() && userDoc.data().isAdmin === true) {
          setIsAdmin(true);
          console.log('✅ Admin access granted for user:', gameState.user.id);
        } else {
          console.log('❌ Admin access denied for user:', gameState.user.id);
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [gameState.isAuthenticated, gameState.user?.id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have admin privileges to access this page.</p>
          <Button onClick={() => navigate('/')} variant="outline">
            Return to App
          </Button>
        </div>
      </div>
    );
  }

  const adminSections = [
    {
      id: 'overview' as const,
      title: 'Overview',
      icon: BarChart3,
      description: 'Dashboard overview and key metrics'
    },
    {
      id: 'orders' as const,
      title: 'Order Management',
      icon: Package2,
      description: 'Manage physical product orders'
    },
    {
      id: 'notifications' as const,
      title: 'Notifications',
      icon: Bell,
      description: 'Send and manage notifications'
    },
    {
      id: 'users' as const,
      title: 'User Management',
      icon: Users,
      description: 'Manage user accounts and permissions'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'orders':
        return <AdminOrderDashboard />;
      case 'notifications':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Notification Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Notification management features coming soon...</p>
            </CardContent>
          </Card>
        );
      case 'users':
        return (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">User management features coming soon...</p>
            </CardContent>
          </Card>
        );
      case 'analytics':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Analytics dashboard coming soon...</p>
            </CardContent>
          </Card>
        );
      default:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Admin Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Welcome, {gameState.user?.username || gameState.user?.email || 'Admin'}! You have full administrative access to E-Pulsepoints.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {adminSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <Card 
                        key={section.id} 
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setActiveSection(section.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-8 w-8 text-blue-600" />
                            <div>
                              <h3 className="font-medium text-gray-900">{section.title}</h3>
                              <p className="text-sm text-gray-600">{section.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to App</span>
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {gameState.user?.username || gameState.user?.email}
              </span>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {(gameState.user?.username || gameState.user?.email || 'A').charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {adminSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSection === section.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
