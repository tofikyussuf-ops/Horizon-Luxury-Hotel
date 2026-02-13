/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sakobkeapywyvocrguqm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
