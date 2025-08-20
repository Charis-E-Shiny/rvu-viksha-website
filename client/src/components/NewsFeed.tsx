// NewsFeed.tsx
import React, { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  url: string;
}
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const NewsFeed: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=coding+OR+programming&sortBy=publishedAt&apiKey=${apiKey}`
        );
        const data = await res.json();

        if (data.articles) {
          const items = data.articles.slice(0, 10).map((a: any) => ({
            title: a.title,
            url: a.url,
          }));
          setNewsItems(items);
        }
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  // Rotate headlines every 5s
  useEffect(() => {
    if (newsItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [newsItems]);

  if (loading) return <div className="p-4 text-white">Loading coding headlines...</div>;
  if (error) return <div className="p-4 text-red-400">{error}</div>;
  if (newsItems.length === 0) return <div className="p-4 text-white">No news found</div>;

  const currentNews = newsItems[currentIndex];

  return (
    <div
      className="
        relative 
        bg-[rgba(10,25,47,0.7)] 
        backdrop-blur-lg 
        border border-[rgba(255,255,255,0.15)] 
        rounded-2xl 
        shadow-xl 
        p-4 sm:p-6
        mx-auto 
        flex flex-col
        transition-all duration-700
        w-[95%] max-w-[550px] h-[250px]
        min-h-[200px] sm:min-h-[230px]
      "
    >
      {/* Header */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-blue-300 tracking-wide text-center border-b border-[rgba(255,255,255,0.2)] pb-2">
        📰 TechNewsFeed
      </h2>

      {/* Scrollable Headline Area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent pr-2">
        <a
          href={currentNews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base sm:text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors leading-relaxed"
        >
          {currentNews.title}
        </a>
      </div>

      {/* Bottom Row */}
      <div className="mt-3 sm:mt-4 flex items-center justify-between">
        <button
          onClick={() => window.open(currentNews.url, "_blank")}
          className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base rounded-lg shadow transition-all"
        >
          Read More →
        </button>

        {/* Carousel Dots */}
        <div className="flex space-x-2">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-blue-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
