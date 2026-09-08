/**
 * ReviewBro Brand & Design System Constants
 */

export const BRAND = {
  name: 'ReviewBro',
  domain: 'ReviewBro.in',
  tagline: 'More Than Reviews. A Brighter Tomorrow.',
  subtagline: 'Because every piece of feedback is a step towards a better business.',
  eyebrow: 'REPUTATION MANAGEMENT, REIMAGINED',
  heroHeadline: {
    line1: 'Your Reviews.',
    line2: 'Your Reputation.',
    line3: 'One Bro.',
  },
  heroSubtitle:
    'Manage reviews, collect more feedback, reply with AI, understand what customers are saying, and grow your business — all in one simple platform.',
  status: 'ReviewBro is currently in development.',
  socials: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    youtube: 'https://youtube.com',
  },
}

export const SAMPLE_METRICS = [
  {
    id: 'rating',
    label: 'Average Rating',
    value: '4.7',
    unit: '★',
    change: '+12%',
    changePositive: true,
  },
  {
    id: 'total',
    label: 'Total Reviews',
    value: '1,248',
    unit: '',
    change: '+28%',
    changePositive: true,
  },
  {
    id: 'sentiment',
    label: 'Positive Sentiment',
    value: '68%',
    unit: '',
    change: '+14%',
    changePositive: true,
  },
  {
    id: 'response-rate',
    label: 'Response Rate',
    value: '92%',
    unit: '',
    change: '+20%',
    changePositive: true,
  },
]

export const SAMPLE_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    platform: 'google' as const,
    rating: 5,
    timeAgo: '2 hours ago',
    text: 'Great service and amazing experience. Highly recommend!',
    status: 'Replied' as const,
    reply: 'Thank you Priya! We are thrilled you had such a wonderful visit with us. Looking forward to welcoming you back soon!',
  },
  {
    id: 'rev-2',
    author: 'Rahul Mehta',
    platform: 'zomato' as const,
    rating: 4,
    timeAgo: '5 hours ago',
    text: 'Good food, but the waiting time was a bit long.',
    status: 'AI Reply' as const,
    suggestedReply: 'Hi Rahul, thank you for visiting and for the honest feedback! Glad you enjoyed the flavors. We are streamlining kitchen prep during peak hours to serve you much faster next time.',
  },
  {
    id: 'rev-3',
    author: 'Sneha Kapoor',
    platform: 'google' as const,
    rating: 5,
    timeAgo: '1 day ago',
    text: 'Excellent ambience and very friendly staff.',
    status: 'Replied' as const,
    reply: 'Thanks a lot Sneha! Our team works hard to create a warm environment, and your review made our day!',
  },
]

export const PLATFORM_STEPS = [
  {
    id: 'manage',
    title: 'Manage Reviews',
    description: 'All your reviews from Google and other platforms, in one place.',
    icon: 'message-square',
    badgeColor: 'emerald',
  },
  {
    id: 'get',
    title: 'Get More Reviews',
    description: 'QR, WhatsApp, campaigns and automated requests.',
    icon: 'users',
    badgeColor: 'blue',
  },
  {
    id: 'ai',
    title: 'AI Replies',
    description: 'Respond faster. Sound human. Save hours.',
    icon: 'sparkles',
    badgeColor: 'amber',
  },
  {
    id: 'understand',
    title: 'Understand',
    description: 'Sentiment, topics, trends and customer patterns.',
    icon: 'bar-chart-3',
    badgeColor: 'indigo',
  },
  {
    id: 'grow',
    title: 'Grow',
    description: 'Turn your reputation into real business growth with insights and recommendations.',
    icon: 'arrow-up-right',
    badgeColor: 'teal',
  },
]

export const COMPARISON_POINTS = {
  traditional: [
    'Fragmented platforms',
    'Manual follow-ups',
    'Generic AI replies',
    'Basic analytics',
    'Reactive, not proactive',
  ],
  reviewBro: [
    'Everything in one place',
    'Automated review collection',
    'Smarter, contextual AI replies',
    'Deeper insights and trends',
    'Actionable recommendations',
    'Built for business growth',
  ],
}
