import './style.css'

const siteName = import.meta.env.VITE_SITE_NAME || 'Fiches GEREX'
const description = import.meta.env.VITE_SITE_DESCRIPTION || 'Ressources pédagogiques'
const email = import.meta.env.VITE_CONTACT_EMAIL || ''

document.querySelector('#app').innerHTML = `
<header>
  <h1>${siteName}</h1>
  <p>${description}</p>
</header>
<nav>
  <a href="#fiches">Fiches</a>
  <a href="#liens">Autres ressources</a>
  <a href="/inscription.html">Inscription</a>
</nav>
<main>
  <section id="fiches">
    <h2>Fiches pédagogiques</h2>
    <div class="grid">
      <div class="card">
        <span class="tag">Anglais</span><span class="tag">Seconde</span>
        <h2>Présent simple vs présent continu</h2>
        <p>Fiche de synthèse avec exemples, exercices et corrigés.</p>
      </div>
      <div class="card">
        <span class="tag">Anglais</span><span class="tag">Première</span>
        <h2>Le Commonwealth</h2>
        <p>Fiche civilisation : histoire, pays membres, symboles.</p>
      </div>
      <div class="card">
        <span class="tag">Lettres</span><span class="tag">Terminale</span>
        <h2>Rimbaud — Cahier de Douai</h2>
        <p>Analyse des poèmes, procédés littéraires et pistes d'oral.</p>
      </div>
      <div class="card">
        <span class="tag">Anglais</span><span class="tag">Bac Pro</span>
        <h2>Made in Dagenham</h2>
        <p>Étude du film : vocabulaire du travail, égalité.</p>
      </div>
    </div>
  </section>
  <section id="liens" class="links">
    <h2>Autres ressources</h2>
    <a href="https://trame-anglais-lycee.netlify.app" target="_blank">→ Trames Anglais Lycée</a>
    <a href="https://fetes-monde-anglophone.netlify.app" target="_blank">→ Fêtes du monde anglophone</a>
    <a href="https://hors-manuel.netlify.app" target="_blank">→ Hors manuel</a>
    <a href="https://prononciation-anglaise.netlify.app" target="_blank">→ Prononciation anglaise</a>
  </section>
  <div class="env-demo">
    <strong>Variables d'environnement :</strong><br>
    Site : ${siteName}<br>
    Contact : ${email || '(non défini)'}
  </div>
  <button id="test-deploy" style="margin-top:1rem;padding:0.6rem 1.2rem;background:#2b6cb0;color:white;border:none;border-radius:4px;cursor:pointer;">Tester le déploiement</button>
  <p id="test-result" style="margin-top:0.5rem;font-size:0.9rem;"></p>
</main>
<footer>Ressources Anglais & Lettres — Talence</footer>
`

document.getElementById('test-deploy').addEventListener('click', () => {
  const result = document.getElementById('test-result')
  result.textContent = 'Déploiement OK — ' + new Date().toLocaleString('fr-FR')
  result.style.color = '#276749'
})
