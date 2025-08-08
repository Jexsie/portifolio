import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("this will be the sitemap.xml route");
}
