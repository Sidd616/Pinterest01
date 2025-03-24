"use client";

import { useState } from "react";
import PinCard from "../components/ui/PinCard";
import UploadForm from "../components/ui/UploadForm";
import { Pin } from "@/types/pin";

export default function Home() {
  const [pins, setPins] = useState<Pin[]>([
    {
      id: "1",
      imageUrl: "https://via.placeholder.com/300x400",
      title: "Sample Pin",
      description: "This is a sample pin",
      userId: "1",
      username: "user1",
      likes: [],
      comments: [],
      createdAt: new Date(),
    },
  ]);

  const handleLike = (pinId: string) => {
    console.log("Liked pin:", pinId);
  };

  const handleComment = (pinId: string) => {
    console.log("Comment on pin:", pinId);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UploadForm />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pins.map((pin) => (
            <PinCard
              key={pin.id}
              pin={pin}
              onLike={handleLike}
              onComment={handleComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}