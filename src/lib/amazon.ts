const AMAZON_ASSOCIATE_ID = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID || 'setupprohq-20';
const AMAZON_DOMAIN = 'amazon.com';

export function generateAmazonLink(asin: string): string {
  return `https://www.${AMAZON_DOMAIN}/dp/${asin}?tag=${AMAZON_ASSOCIATE_ID}`;
}

export function extractASINFromLink(url: string): string | null {
  const match = url.match(/\/dp\/([A-Z0-9]+)/);
  return match ? match[1] : null;
}

export function isValidASIN(asin: string): boolean {
  return /^[A-Z0-9]{10}$/.test(asin);
}

// Mock Amazon Product API (in production, use real API)
export async function getAmazonProductInfo(asin: string) {
  if (!isValidASIN(asin)) {
    return null;
  }

  // This is a placeholder - in production, integrate with Product Advertising API
  return {
    asin,
    title: 'Product Title',
    price: '$99.99',
    rating: 4.5,
    reviews: 1234,
    link: generateAmazonLink(asin),
  };
}
