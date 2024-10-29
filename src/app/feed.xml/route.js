export async function GET() {
  return new Response("<Feed>", {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
