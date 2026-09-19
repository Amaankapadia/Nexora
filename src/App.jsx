import { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react";
import "./App.css";

const features = [
  {
    num: "01",
    icon: "✦",
    title: "AI Automation",
    text: "Automate complex workflows with intelligent systems that learn, adapt and execute.",
  },
  {
    num: "02",
    icon: "◈",
    title: "Deep Intelligence",
    text: "Turn massive amounts of information into decisions your team can act on instantly.",
  },
  {
    num: "03",
    icon: "∞",
    title: "Infinite Scale",
    text: "Build once and scale from a single workflow to an intelligent enterprise.",
  },
];

const stats = [
  ["10×", "Faster workflows"],
  ["99.9%", "Platform uptime"],
  ["24/7", "AI operations"],
  ["50M+", "Tasks processed"],
];

const faqs = [
  {
    q: "What is NEXORA?",
    a: "NEXORA is an intelligent AI platform designed to automate workflows, analyze information and help teams move faster.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. NEXORA is designed to be approachable for non-technical teams while providing powerful capabilities for developers.",
  },
  {
    q: "Can NEXORA scale with my company?",
    a: "Yes. NEXORA is designed to support individual workflows, growing teams and larger enterprise environments.",
  },
  {
    q: "Can I connect my existing tools?",
    a: "NEXORA can be connected to existing systems through integrations and APIs.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <div className="bg-glow glow-left" />
      <div className="bg-glow glow-right" />
      <div className="grid-bg" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-symbol">
            <i />
            <i />
          </span>
          NEXORA
        </a>

        <nav>
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#company">Company</a>
        </nav>

        <div className="nav-right">
          <button className="login">Log in</button>
          <button className="nav-button" onClick={() => scrollTo("pricing")}>
            Get started <span>↗</span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span />
              THE AI OPERATING LAYER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Intelligence
              <br />
              <em>without limits.</em>
            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              NEXORA connects AI, data and automation into one intelligent
              system designed to help modern teams think faster and build
              better.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <button className="primary" onClick={() => scrollTo("pricing")}>
                Start building <span>↗</span>
              </button>

              <button className="secondary" onClick={() => scrollTo("platform")}>
                Explore NEXORA <span>↓</span>
              </button>
            </motion.div>

            <div className="hero-proof">
              <div className="avatar-stack">
                <b>AM</b>
                <b>SC</b>
                <b>DR</b>
                <b>+</b>
              </div>

              <div>
                <strong>2,000+ teams</strong>
                <small>already building with NEXORA</small>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="art-glow" />

            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="ring ring-c" />

            <div className="core">
              <div className="core-inner">
                <strong>N</strong>
              </div>
            </div>

            <div className="signal signal-one">✦</div>
            <div className="signal signal-two">◆</div>
            <div className="signal signal-three">+</div>

            <motion.div
              className="ai-card command"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="card-header">
                <span className="online" />
                NEXORA AI
                <small>LIVE</small>
              </div>

              <div className="command-line">
                <span>›</span>
                Analyze your next move
                <i />
              </div>

              <div className="mini-buttons">
                <button>Analyze</button>
                <button>Optimize</button>
                <button>Execute</button>
              </div>
            </motion.div>

            <motion.div
              className="ai-card metric-card"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="mini-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div>
                <small>AI PERFORMANCE</small>
                <strong>+38.4%</strong>
              </div>
            </motion.div>

            <motion.div
              className="ai-card task-card"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <div className="task-icon">✦</div>

              <div>
                <small>PROCESSING</small>
                <strong>24,891 tasks</strong>
              </div>

              <span className="green-dot" />
            </motion.div>
          </motion.div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <span>POWERING TEAMS AT</span>

          <div>
            <strong>vertex</strong>
            <strong>lumina</strong>
            <strong>northstar</strong>
            <strong>arc</strong>
            <strong>quantum</strong>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          {stats.map(([number, text], index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <strong>{number}</strong>
              <span>{text}</span>
            </motion.div>
          ))}
        </section>

        {/* PLATFORM */}
        <section className="section" id="platform">
          <div className="section-intro">
            <div>
              <label>THE PLATFORM</label>

              <h2>
                Intelligence that
                <br />
                <span>moves with you.</span>
              </h2>
            </div>

            <p>
              A single intelligent layer connecting your data, workflows and
              decisions.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="feature"
                key={feature.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-top">
                  <span>{feature.num}</span>
                  <b>{feature.icon}</b>
                </div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <a href="#solutions">Explore ↗</a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PRODUCT */}
        <section className="section product-section" id="solutions">
          <div className="product-copy">
            <label>AI WORKSPACE</label>

            <h2>
              Your entire workflow.
              <br />
              <span>One intelligent system.</span>
            </h2>

            <p>
              Give your team one place to connect information, automate
              processes and make better decisions.
            </p>

            <div className="checks">
              <span>✓ Autonomous workflows</span>
              <span>✓ Real-time intelligence</span>
              <span>✓ Human control when it matters</span>
            </div>

            <button className="link-button">
              Explore the platform →
            </button>
          </div>

          <div className="dashboard">
            <div className="dashboard-bar">
              <div>
                <i />
                <i />
                <i />
              </div>

              <span>NEXORA / WORKSPACE</span>

              <b>● LIVE</b>
            </div>

            <div className="dashboard-content">
              <aside>
                <strong>N</strong>
                <span className="active">◈</span>
                <span>◇</span>
                <span>⌁</span>
                <span>⚙</span>
              </aside>

              <div className="dashboard-main">
                <div className="dashboard-heading">
                  <div>
                    <small>OVERVIEW</small>
                    <h3>Good evening, Amaan.</h3>
                  </div>

                  <button>+ New workflow</button>
                </div>

                <div className="dashboard-metrics">
                  <div>
                    <small>AI TASKS</small>
                    <strong>24,891</strong>
                    <span>↗ 18.4%</span>
                  </div>

                  <div>
                    <small>AUTOMATIONS</small>
                    <strong>1,284</strong>
                    <span>↗ 12.7%</span>
                  </div>
                </div>

                <div className="chart-box">
                  <div className="chart-title">
                    <span>AI ACTIVITY</span>
                    <small>LAST 7 DAYS</small>
                  </div>

                  <div className="chart">
                    <div className="chart-line" />
                    <b />
                    <b />
                    <b />
                    <b />
                    <b />
                    <b />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" id="company">
          <div className="center-title">
            <label>FROM THE COMMUNITY</label>

            <h2>
              Built for people
              <br />
              <span>who build the future.</span>
            </h2>
          </div>

          <div className="testimonial-grid">
            {[
              [
                "NEXORA changed how our team works. What used to take hours now happens automatically.",
                "Arjun Mehta",
                "Founder, Vertex Labs",
                "AM",
              ],
              [
                "It feels like having an intelligent AI operations team working alongside us 24/7.",
                "Sarah Chen",
                "Product Director, Lumina",
                "SC",
              ],
              [
                "We went from experimentation to production faster than we expected.",
                "Daniel Ross",
                "CTO, Northstar",
                "DR",
              ],
            ].map(([quote, name, role, initials], index) => (
              <motion.article
                className="testimonial"
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <span className="quote">“</span>
                <p>{quote}</p>

                <div className="person">
                  <b>{initials}</b>

                  <div>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="center-title">
            <label>SIMPLE PRICING</label>

            <h2>
              Start small.
              <br />
              <span>Think infinitely.</span>
            </h2>
          </div>

          <div className="pricing">
            {[
              ["Starter", "$19", "For individuals exploring AI.", false],
              ["Scale", "$79", "For teams building serious AI systems.", true],
              ["Enterprise", "Custom", "For organizations operating at scale.", false],
            ].map(([name, price, desc, featured]) => (
              <article className={featured ? "price featured" : "price"} key={name}>
                {featured && <div className="popular">POPULAR</div>}

                <label>{name}</label>

                <h3>{price}</h3>

                {price !== "Custom" && <small>/ month</small>}

                <p>{desc}</p>

                <button className={featured ? "primary" : "price-button"}>
                  Get started ↗
                </button>

                <div className="price-list">
                  <span>✓ AI workflows</span>
                  <span>✓ Advanced analytics</span>
                  <span>✓ Priority support</span>
                  <span>✓ Secure infrastructure</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="faq-heading">
            <label>QUESTIONS</label>

            <h2>
              Everything you
              <br />
              <span>need to know.</span>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.q}>
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{faq.q}</span>
                  <b>{openFaq === index ? "−" : "+"}</b>
                </button>

                <motion.div
                  className="answer"
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-glow" />
          <div className="cta-ring" />

          <label>THE NEXT LAYER</label>

          <h2>
            Intelligence is the
            <br />
            <span>new infrastructure.</span>
          </h2>

          <p>
            Build smarter systems. Move faster. Let your team focus on the
            work only humans can do.
          </p>

          <button className="primary" onClick={() => scrollTo("pricing")}>
            Start building with NEXORA ↗
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <a href="#home" className="brand">
              <span className="brand-symbol">
                <i />
                <i />
              </span>
              NEXORA
            </a>

            <p>
              The intelligence layer
              <br />
              for modern business.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <label>PRODUCT</label>
              <a href="#platform">Platform</a>
              <a href="#solutions">Solutions</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div>
              <label>COMPANY</label>
              <a href="#company">About</a>
              <a href="#company">Careers</a>
              <a href="#company">Contact</a>
            </div>

            <div>
              <label>SOCIAL</label>
              <a href="#home">LinkedIn</a>
              <a href="#home">GitHub</a>
              <a href="#home">X / Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NEXORA. All rights reserved.</span>

          <div>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;