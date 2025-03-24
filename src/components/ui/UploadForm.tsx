"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);
    
    // Add API call logic here
    console.log("Form submitted", { title, description, image });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        type="file"
        onChange={(e:any) => setImage(e.target.files?.[0] || null)}
        accept="image/*"
        required
      />
      <Input
        placeholder="Title"
        value={title}
        onChange={(e:any) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e:any) => setDescription(e.target.value)}
      />
      <Button type="submit" className="w-full">
        Upload Pin
      </Button>
    </form>
  );
}