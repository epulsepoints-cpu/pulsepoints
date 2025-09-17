import React from "react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaLink, FaFire } from "react-icons/fa6";

const appUrl = "https://app.ecgkid.com";
const imageUrl = "https://ecgkid.com/wp-content/uploads/2025/03/Purple-Pink-Gradient-Modern-Engish-Course-Instagram-Post.webp";

interface SocialShareCardProps {
  completedTasks?: number;
  totalPoints?: number;
  streakCount?: number;
}

export default function SocialShareCard({ completedTasks = 5, totalPoints = 0, streakCount = 0 }: SocialShareCardProps) {
  const shareText = `🎉 I just completed my ECGkid PulsePoints daily challenge! ${completedTasks}/5 ECG tasks completed with ${streakCount} day streak! Try it yourself:`;
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${shareText} ${appUrl}`);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="max-w-xs rounded-xl shadow-lg bg-gradient-to-br from-pink-100 via-white to-purple-100 p-0 overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={imageUrl}
          alt="ECGkid Achievement"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <h3 className="text-white text-lg font-bold">ECGkid PulsePoints</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-center text-gray-800 font-semibold mb-2">
          🎉 Daily ECG Challenge Complete!
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
          <span>{completedTasks}/5 tasks</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FaFire className="text-orange-500" />
            {streakCount} day streak
          </span>
          <span>•</span>
          <span>{totalPoints} points</span>
        </div>
        <span className="text-xs text-gray-500 mb-4">Share your achievement:</span>
        <div className="flex gap-3 flex-wrap justify-center mb-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-black text-white rounded hover:bg-gray-800 text-sm"
          >
            <FaXTwitter /> X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 text-sm"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm"
          >
            <FaLink /> Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}