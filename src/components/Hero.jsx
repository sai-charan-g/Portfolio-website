export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Full Stack Developer and AI/ML Enthusiast</p>
          <h1>Hi, I&apos;m Sai Charan</h1>
          <p className="hero-lead">
            I build scalable web apps and have hands-on experience with AI/ML projects.
          </p>
          <p className="hero-text">
            I focus on products that are fast, practical, and easy to use, while also exploring
            machine learning solutions in areas like medical imaging and intelligent product
            features.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://github.com/sai-charan-g"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="button button-secondary" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero-metrics" aria-label="Quick profile highlights">
            <div className="hero-metric">
              <strong>Full Stack</strong>
              <span>React, Next.js, Node.js</span>
            </div>
            <div className="hero-metric">
              <strong>AI / ML</strong>
              <span>Medical imaging and model workflows</span>
            </div>
            
          </div>
        </div>

        <div className="hero-panel">
          <p className="panel-label">What I work with</p>

          <div className="panel-block">
            <span className="panel-kicker">Frontend Systems</span>
            <p>
              Responsive interfaces built with React and Next.js, designed to feel clean, fast,
              and easy to navigate.
            </p>
          </div>

          <div className="panel-block">
            <span className="panel-kicker">Backend Foundations</span>
            <p>
              Practical server-side work with Node.js and Express for APIs, workflows, and
              real-world product features.
            </p>
          </div>

          <div className="panel-block">
            <span className="panel-kicker">AI / ML Work</span>
            <p>
              Model training, preprocessing, and evaluation for projects involving intelligent
              features and medical image analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
