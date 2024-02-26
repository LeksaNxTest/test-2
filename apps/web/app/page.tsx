export const dynamic = 'force-dynamic'

export default async function Page() {

  const response = await fetch(process.env.API_URL!)
      .then(res => res.json())

  return (
    <main>
      <p>API_URL: {process.env.API_URL}</p>
      <p>Message: {response.message}</p>
    </main>
  );
}
