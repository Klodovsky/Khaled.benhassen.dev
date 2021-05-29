module.exports = {
  siteTitle: 'Khaled BEN HASSEN | Software Engineer',
  siteDescription:
    'Khaled BEN HASSEN is an incoming Software Developer, based in Tunisia, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Khaled BEN HASSEN, Vue, Klodovsky, software engineer, web developer, javascript, Laravel, itialuS, Sourceamax, IT GATE, Dev, Git',
  siteUrl: 'https://khaled.benhassen.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Khaled BEN HASSEN',
  location: 'Sousse, Tunisia',
  email: 'khaled.benhassen@polytechnicien.tn',
  github: 'https://github.com/Klodovskyy',
  twitterHandle: '@Klodovsky',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Klodovskyy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/khaled-bhassan/',
    },

    {
      name: 'Twitter',
      url: 'https://twitter.com/Klodovsky',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
