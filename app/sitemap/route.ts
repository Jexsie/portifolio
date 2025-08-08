import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://jessyssebuliba.github.io/portfolio-site'
    : 'http://localhost:3000'
    
  // Redirect to the actual sitemap.xml
  return NextResponse.redirect(new URL("/sitemap.xml", baseUrl))
}
