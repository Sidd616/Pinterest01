"use client";

import { useState } from "react";
import PinCard from "@/components/ui/PinCard";
import { Pin } from "@/types/pin";

export default function Profile() {
  const [savedPins, setSavedPins] = useState<Pin[]>([]);

  const handleLike = (pinId: string) => {
    console.log("Liked pin:", pinId);
  };

  const handleComment = (pinId: string) => {
    console.log("Comment on pin:", pinId);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Saved Pins</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {savedPins.map((pin) => (
                <PinCard
                  key={pin.id}
                  pin={pin}
                  onLike={handleLike}
                  onComment={handleComment}
                />
              ))}
              {savedPins.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No saved pins yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}