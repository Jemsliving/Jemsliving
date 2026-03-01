/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

const KIT_FORM_URL = "https://app.kit.com/forms/9134740/subscriptions";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = new URLSearchParams({
        email_address: email,
        redirect: `${window.location.origin}/welcome`,
      });

      const res = await fetch(KIT_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (res.ok || res.redirected || res.status < 400) {
        window.location.href = "/welcome";
        return;
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-3"
    >
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 w-full rounded-full border-2 border-brand-bg/20 bg-white px-5 py-3.5 text-sm text-brand-bg placeholder:text-brand-bg/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/40 font-sans"
      />
      <button
        type="submit"
        disabled={loading}
        className="shrink-0 rounded-full bg-brand-bg px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Yes, I'm in"}
      </button>
    </form>
  );
}
