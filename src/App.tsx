/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Skills, Experience, Projects, Leadership, Contact, Footer } from './components/Portfolio';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
