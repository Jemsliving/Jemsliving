/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <header className="bg-black text-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="text-brand-accent hover:text-white text-sm uppercase tracking-widest transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-display leading-tight mt-8">Privacy Policy</h1>
          <p className="text-base text-white/70 mt-2">Last updated: February 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-12 text-base leading-relaxed text-[#0a0a0a]/95">
        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">1. Data Controller</h2>
          <p>
            Jemima Ceesay is the data controller for personal data collected through jemsliving.com and related services operated under Jemsliving and Jemsliving Publishing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">2. Who We Are</h2>
          <p>
            Jemsliving and Jemsliving Publishing is the website and publishing imprint of author Jemima Ceesay. This privacy policy explains how we collect, use, and protect your personal information when you visit this website or interact with our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">3. What Data We Collect</h2>
          <p className="mb-4">We may collect the following categories of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Newsletter subscriptions:</strong> Your email address when you voluntarily subscribe.</li>
            <li><strong>Contact and submissions:</strong> Your name, email address, and any information you provide when contacting us or submitting a manuscript or proposal.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and pages visited (if analytics tools are used).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">4. Legal Basis for Processing</h2>
          <p className="mb-4">
            We process personal data on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Consent:</strong> When you subscribe to our newsletter or accept optional cookies.</li>
            <li><strong>Legitimate interest:</strong> When you contact us or submit materials for review.</li>
            <li><strong>Legal obligation:</strong> When processing is required under applicable law.</li>
          </ul>
          <p>You may withdraw your consent at any time.</p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">5. How We Use Your Data</h2>
          <p className="mb-4">We use personal data to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Send newsletters and updates</li>
            <li>Respond to enquiries</li>
            <li>Review submissions</li>
            <li>Improve the website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">6. Third-Party Services</h2>
          <p className="mb-4">
            We use selected third-party providers to operate this website, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>ConvertKit (Kit) for newsletter delivery</li>
            <li>Hosting and infrastructure providers</li>
          </ul>
          <p className="mb-4">
            These providers may process personal data on our behalf in accordance with their own privacy policies and applicable data protection laws.
          </p>
          <p>
            Some data may be transferred outside the EU/EEA. Where this occurs, appropriate safeguards are implemented in accordance with GDPR requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">7. Cookies</h2>
          <p>
            This website may use essential cookies for functionality and, where applicable, analytics cookies to understand website usage. Non-essential cookies are only activated with your consent. You can manage cookie preferences through your browser settings or consent banner.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">8. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes described above or as required by law. Newsletter data is stored until you unsubscribe or request deletion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">9. Your Rights</h2>
          <p className="mb-4">
            If you are located within the EU/EEA or other jurisdictions with similar protections, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Request correction</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="mb-4">
            You also have the right to lodge a complaint with the Swedish Authority for Privacy Protection (IMY).
          </p>
          <p>
            To exercise your rights or ask questions, contact:{" "}
            <a href="mailto:Jemslivingg@gmail.com" className="text-brand-gold hover:underline">Jemslivingg@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold text-black mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent version.
          </p>
        </section>

        <div className="pt-8 border-t border-black/10">
          <Link to="/" className="text-brand-gold hover:underline font-medium">
            ← Return to home
          </Link>
        </div>
      </div>
    </main>
  );
}
