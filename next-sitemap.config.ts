import { IConfig } from "next-sitemap"

const config: IConfig = {
  siteUrl: "https://namadomainmu.com", // ganti dengan domain aslimu
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/404"],
}

export default config
