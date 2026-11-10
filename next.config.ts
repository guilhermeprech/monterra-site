import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Há um package-lock.json na pasta pessoal do usuário; fixa a raiz do projeto.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
