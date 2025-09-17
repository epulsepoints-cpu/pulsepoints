import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ArticleReader from './ArticleReader';

type VideoPost = {
  id: number;
  title: string;
  excerpt: string;
  videoEmbedHtml?: string;
  featuredImage?: string;
};

const VideosTab: React.FC = () => {
  const [videos, setVideos] = useState<VideoPost[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ecgkid.com/wp-json/wp/v2/posts?categories=727&_embed&per_page=10')
      .then(res => res.json())
      .then((data: any[]) => {
        const formatted = data.map(post => ({
          id: post.id,
          title: post.title?.rendered || '',
          excerpt: post.excerpt?.rendered || '',
          featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
          videoEmbedHtml: extractFirstVideoHtml(post.content?.rendered)
        }));
        setVideos(formatted);
      })
      .catch(err => console.error('Video fetch error:', err))
      .finally(() => setLoading(false));
  }, []);

  const extractFirstVideoHtml = (html?: string) => {
    if (!html) return undefined;
    const match = html.match(/<iframe .*?<\/iframe>/);
    return match ? match[0] : undefined;
  };

  if (loading) return <p className="p-4">Loading videos…</p>;

  if (selectedVideo) {
    return (
      <ArticleReader
        article={{
          title: selectedVideo.title,
          content: selectedVideo.videoEmbedHtml
            ? selectedVideo.videoEmbedHtml + '<div style="margin-top:1rem">' + selectedVideo.excerpt + '</div>'
            : selectedVideo.featuredImage
              ? `<img src='${selectedVideo.featuredImage}' alt='${selectedVideo.title}' style='width:100%;border-radius:12px;margin-bottom:1rem;' />` + selectedVideo.excerpt
              : selectedVideo.excerpt,
          category: 'Video'
        }}
        onBack={() => setSelectedVideo(null)}
        showFabBack={true}
      />
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map(video => (
        <Card
          key={video.id}
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setSelectedVideo(video)}
        >
          <CardContent className="p-4 space-y-2">
            {video.featuredImage && (
              <img src={video.featuredImage} alt={video.title} className="w-full h-32 object-cover rounded" />
            )}
            <h3 className="text-md font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: video.excerpt }} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideosTab;
