import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ArticleReader from './ArticleReader';

type Course = {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  url: string;
};

const CoursesTab: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetch('/Data/courses.json')
      .then(res => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch(err => console.error('Error loading courses:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading courses…</p>;

  // Detail view
  if (selectedCourse) {
    return (
      <ArticleReader
        article={{
          title: selectedCourse.title,
          content: (selectedCourse.image ? `<img src='${selectedCourse.image}' alt='${selectedCourse.title}' style='width:100%;border-radius:12px;margin-bottom:1rem;' />` : '') + selectedCourse.excerpt + `<div style='margin-top:1.5rem'><a href='${selectedCourse.url}' target='_blank' rel='noopener noreferrer' style='color:#2563eb;font-weight:500;text-decoration:underline;'>Visit Full Course Page</a></div>`,
          category: 'Course'
        }}
        onBack={() => setSelectedCourse(null)}
        showFabBack={true}
      />
    );
  }

  // Grid view
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(c => (
        <Card key={c.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCourse(c)}>
          <CardContent className="p-4 space-y-2">
            {c.image && (
              <img src={c.image} alt={c.title} className="w-full h-32 object-cover rounded" />
            )}
            <h3 className="text-md font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{c.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CoursesTab;
