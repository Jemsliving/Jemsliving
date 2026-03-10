/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#0a0a0a]/50">
          Newsletter
        </p>

        <h1 className="text-3xl md:text-4xl font-display font-semibold text-[#0a0a0a] tracking-tight">
          Welcome to Jemsliving.
        </h1>

        <p className="text-base md:text-lg text-[#0a0a0a]/80 leading-relaxed font-serif">
          Thank you for joining this journey. You&rsquo;ll now receive updates, early previews, and exclusive insights directly in your inbox.
        </p>

        <p className="text-sm text-[#0a0a0a]/50 font-serif italic">
          I&rsquo;m truly grateful to have you here.
        </p>

        <div className="pt-4 space-y-6">
          <Link
            to="/#books"
            className="inline-block px-8 py-3.5 bg-[#0a0a0a] text-white font-medium text-sm tracking-wide hover:bg-[#0a0a0a]/90 transition-colors"
          >
            Explore My Books →
          </Link>

          <div>
            <Link to="/" className="text-sm text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors underline underline-offset-2">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
