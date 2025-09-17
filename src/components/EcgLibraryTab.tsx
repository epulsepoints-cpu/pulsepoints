import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ArticleReader from './ArticleReader';

const EcgLibraryTab: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [activePost, setActivePost] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://ecgkid.com/wp-json/wp/v2/ecg_library?_embed&per_page=10')
      .then(res => res.json())
      .then(data => {
        setPosts(data.map((p: any) => ({
          id: p.id,
          title: p.title.rendered,
          excerpt: p.excerpt?.rendered,
          link: p.link,
          image:
            p._embedded?.['wp:featuredmedia']?.[0]?.source_url ??
            'https://ecgkid.com/wp-content/uploads/2025/06/placeholder.png',
          content: p.content?.rendered
        })));
      });
  }, []);

  if (activePost) {
    return (
      <ArticleReader
        article={{
          title: activePost.title,
          content: `<iframe src='${activePost.link}' title='${activePost.title}' style='width:100%;height:60vh;border-radius:12px;border:none;margin-bottom:1rem;'></iframe>` +
            (activePost.content || ''),
          category: 'ECG Library'
        }}
        onBack={() => setActivePost(null)}
        showFabBack={true}
      />
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <Card
          key={post.id}
          onClick={() => setActivePost(post)}
          className="hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          <CardContent className="p-4 space-y-2">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <div
              className="text-sm text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <span className="text-blue-600 text-sm font-medium">View ECG</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EcgLibraryTab;
