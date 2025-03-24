export async function uploadToS3(file: File): Promise<string> {
    try {
        // Create a FormData instance
        const formData = new FormData();
        formData.append('file', file);

        // Make API call to your backend endpoint that handles S3 upload
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const data = await response.json();
        return data.url; // Return the S3 URL of the uploaded file
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw error;
    }
}