export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#020617" />
      <link rel="icon" href="/favicon.svg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rumman Ahmed',
        jobTitle: 'Computer Engineer | AI & Computer Vision Researcher',
        url: 'https://rumman04.github.io',
        sameAs: [
          'https://www.linkedin.com/in/rumman-ahmed-bce',
          'https://github.com/rumman04'
        ],
        email: 'mailto:khanrumman820@gmail.com',
        telephone: '+92 317 3960244'
      }) }} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');` }} />
    </>
  );
}
