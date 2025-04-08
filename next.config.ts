import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para Prisma (evita errores en entornos serverless)
  experimental: {
    serverComponentsExternalPackages: ["prisma"],
    optimizePackageImports: ["@prisma/client"], // Next.js 15: optimiza imports
  },

  // Configuración de ESLint y TypeScript (para evitar fallos en el build)
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint durante el build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript
  },

  // Webpack customizado para Prisma
  webpack: (config) => {
    config.externals = [...(config.externals || []), { prisma: "prisma" }];
    return config;
  },

  // Opcional: Configuración para imágenes (si tu blog usa imágenes)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite todas las URLs de imágenes
      },
    ],
  },

  // Opcional: Server Actions (Next.js 15)
  serverActions: true,
};

export default nextConfig;