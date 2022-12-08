import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  // if (url.href.includes("fbclid")) {
  //   const redirectUrl = `https://spaceofstories.online/${url.pathname}`;
  //   return NextResponse.redirect(redirectUrl);
  // }

  const referer = req.headers.get("referer");
  console.log(referer, "Referer");
  if (referer?.includes("facebook")) {
    const redirectUrl = `https://spaceofstories.online/${url.pathname}`;
    return NextResponse.redirect(redirectUrl);
  }
}
