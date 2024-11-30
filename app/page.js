async function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function HomePage() {
  await simulateLoading(); // Simule 3 secondes de chargement

  return (
    <main>
      <h1>Bienvenue sur mon site</h1>
      <p>Ceci est la page d'accueil.</p>
    </main>
  );
}
