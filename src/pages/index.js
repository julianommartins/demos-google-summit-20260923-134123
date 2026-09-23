import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const CREATED_BY = 'Antigravity, Gemini 3.8 Flash'

const TIMELINE_STEPS = [
  {
    number: '01',
    title: 'Criar a aplicação',
    description: 'A application nasce no namespace demos e já traz seu repositório.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Conectar o repositório',
    description: 'A nullplatform cria o repo no GitHub e injeta as credenciais do CI.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Criar o Scope',
    description: 'Um scope Development define onde e como a aplicação roda.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Disparar o Build',
    description: 'O push na branch principal aciona o CI e publica a imagem.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Executar o Deploy',
    description: 'O release vai para o scope e a infraestrutura sobe sozinha.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Release em produção 🎉',
    description: 'URL pública servida em *.bra.nullapps.io.',
    icon: (
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Alô Google Summit!</title>
        <meta name="description" content="Demonstração da nullplatform no Google Summit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.hero}>
            <span className={styles.badge}>nullplatform live demo</span>
            <h1 className={styles.title}>Alô Google Summit!</h1>
            <p className={styles.subtitle}>
              Demonstração ao vivo: uma aplicação web completa levada do zero à produção pela nullplatform.
            </p>
          </header>

          <section className={styles.timelineSection} aria-labelledby="timeline-heading">
            <div className={styles.sectionHeader}>
              <h2 id="timeline-heading" className={styles.sectionTitle}>
                Do zero à produção
              </h2>
            </div>

            <div className={styles.timeline}>
              {TIMELINE_STEPS.map((step) => (
                <article key={step.number} className={styles.stepCard}>
                  <div className={styles.stepIconWrapper}>
                    {step.icon}
                  </div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepNumber}>Passo {step.number}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p className={styles.signature}>Criada com {CREATED_BY}</p>
        </footer>
      </div>
    </>
  )
}
