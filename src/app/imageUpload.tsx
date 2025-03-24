import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { uploadToS3 } from '@/services/s3-upload'
import { saveImageMetadata } from '@/services/dynamodb'
import { currentUser } from '@/services/auth'

const ImageUploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setUploading(true)
    try {
      // Upload to S3
      const s3Url = await uploadToS3(selectedFile)
      
      // Save metadata to DynamoDB
      await saveImageMetadata({
        url: s3Url,
        userId: currentUser.id,
        uploadedAt: new Date().toISOString(),
        likes: 0,
        comments: []
      })

      // Reset state
      setSelectedFile(null)
    } catch (error) {
      console.error('Upload failed', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileSelect}
        className="hidden" 
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Button variant="outline" size="icon">
          <Upload className="h-4 w-4" />
        </Button>
      </label>
      {selectedFile && (
        <Button 
          onClick={handleUpload} 
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </Button>
      )}
    </div>
  )
}

export default ImageUploadComponent