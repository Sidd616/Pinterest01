import { Pin } from "@/types/pin";
import Image from "next/image";
import { Heart } from "lucide-react";

interface PinCardProps {
  pin: Pin;
  onLike: (pinId: string) => void;
  onComment: (pinId: string) => void;
}

export default function PinCard({ pin, onLike, onComment }: PinCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <Image
        src={pin.imageUrl}
        alt={pin.title}
        width={300}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{pin.title}</h3>
        <p className="text-gray-600 text-sm">{pin.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLike(pin.id)}
              className="flex items-center space-x-1"
            >
              <Heart className="w-5 h-5" />
              <span>{pin.likes.length}</span>
            </button>
            <button onClick={() => onComment(pin.id)}>
              Comments ({pin.comments.length})
            </button>
          </div>
          <button className="text-sm text-gray-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}