import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ArticleReader from './ArticleReader';

const XrayTab: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://ecgkid.com/wp-json/wp/v2/x_ray_case?_embed&per_page=10')
      .then(res => res.json())
      .then(data => {
        setItems(data.map((p: any) => ({
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

  if (activeItem) {
    return (
      <ArticleReader
        article={{
          title: activeItem.title,
          content: `<iframe src='${activeItem.link}' title='${activeItem.title}' style='width:100%;height:60vh;border-radius:12px;border:none;margin-bottom:1rem;'></iframe>` +
            (activeItem.content || ''),
          category: 'X-Ray Case'
        }}
        onBack={() => setActiveItem(null)}
        showFabBack={true}
      />
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(p => (
        <Card
          key={p.id}
          onClick={() => setActiveItem(p)}
          className="hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          <CardContent className="p-4 space-y-2">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <h3 className="font-bold text-lg">{p.title}</h3>
            <div
              className="text-sm text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: p.excerpt }}
            />
            <span className="text-blue-600 text-sm font-medium">Tap to view</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default XrayTab;
