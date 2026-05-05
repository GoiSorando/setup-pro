// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User Types
export interface IUser {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthPayload {
  email: string;
  password: string;
}

// Category Types
export interface ICategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  order: number;
  createdAt: Date;
}

// Review Types
export interface IReview {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  categoryId: string;
  rating: number;
  featuredImageUrl?: string;
  galleryImages?: string[];
  youtubeEmbedId?: string;
  amazonAsin?: string;
  amazonLink?: string;
  affiliateDisclaimer: boolean;
  specs?: Record<string, string>;
  pros: string[];
  cons: string[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  published: boolean;
  publishedAt?: Date;
  authorId: string;
  views: number;
  affiliateClicks: number;
  conversions: number;
  revenueEstimated: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateReviewInput {
  title: string;
  slug?: string;
  content: string;
  excerpt?: string;
  categoryId: string;
  rating: number;
  featuredImageUrl?: string;
  galleryImages?: string[];
  youtubeEmbedId?: string;
  amazonAsin?: string;
  amazonLink?: string;
  specs?: Record<string, string>;
  pros?: string[];
  cons?: string[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  published?: boolean;
}

// Analytics Types
export interface AnalyticsOverview {
  totalReviews: number;
  totalViews: number;
  totalClicks: number;
  totalConversions: number;
  estimatedRevenue: number;
}

export interface ReviewAnalytics {
  reviewId: string;
  title: string;
  views: number;
  clicks: number;
  conversions: number;
  clickThroughRate: number;
  revenue: number;
}

// Newsletter Types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: Date;
}
