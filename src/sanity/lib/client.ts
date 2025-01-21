import { createClient } from 'next-sanity'; // Create Sanity client
import { apiVersion, dataset, projectId } from '../env'; // Import config values (stored in .env or similar)
import imageUrlBuilder from '@sanity/image-url'; // Image URL builder for handling image fields

// Initialize the Sanity client with your project's details
export const client = createClient({
  projectId: projectId,  // Sanity project ID (imported from env)
  dataset: dataset,      // Sanity dataset (imported from env)
  apiVersion: apiVersion, // API version (imported from env)
  useCdn: true,          // Use CDN for faster content delivery
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to get image URLs from Sanity
export const urlFor = (source: any) => builder.image(source);

// Export the Sanity client for use in queries or mutations
export default client;
