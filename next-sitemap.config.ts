import { IConfig } from "next-sitemap"

const config: IConfig = {
  siteUrl: "https://gh-collection.vercel.app/", // ganti dengan domain aslimu
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/404"],
}

export default config
