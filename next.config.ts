import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { 
        remotePatterns: [
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            // මෙතන අර error එකේ ආපු නිවැරදි hostname එක දාන්න
            { protocol: 'https', hostname: 'lujj3hlib0vllcbn.public.blob.vercel-storage.com' },
            // අවශ්‍ය නම් අනිත් එකත් තියාගන්න ප්‍රශ්නයක් නැහැ
            { protocol: 'https', hostname: 'lspfdyhgsrgsxcju.public.blob.vercel-storage.com' },
        ]
    }
};

export default nextConfig;