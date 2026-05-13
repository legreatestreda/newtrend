'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiCheck,
} from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const contactInfo = [
    { icon: FiPhone, title: 'Téléphone', value: '+33 1 00 00 00 00' },
    { icon: FiMail, title: 'Email', value: 'contact@garage-premium.fr' },
    { icon: FiMapPin, title: 'Adresse', value: '12 Avenue Premium, Paris' },
    { icon: FiClock, title: 'Horaires', value: 'Lun — Sam · 09h — 19h' },
  ];

  const stats = [
    ['24h', 'Délai'],
    ['+1200', 'Clients'],
    ['98%', 'Satisfaction'],
  ];

  const formFields = [
    { key: 'nom', label: 'Nom', type: 'text', placeholder: 'Jean Dupont' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'jean@email.com' },
    { key: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '+33 6 00 00 00 00' },
    { key: 'sujet', label: 'Sujet', type: 'text', placeholder: 'Achat, financement...' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO — remonté */}
      <div className="relative h-[34vh] w-full overflow-hidden">
        <Image
          src="/assets/contact-hero.webp"
          alt="contact"
          fill
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 px-6 pb-4 md:px-12">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            contact
          </p>

          <h1 className="text-3xl md:text-5xl font-thin">
            Nous contacter
          </h1>
        </div>
      </div>

      {/* CONTENT — remonté */}
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-12">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="text-xl md:text-2xl font-thin">
              Parlons de votre projet
            </h2>

            <div className="mt-5 space-y-3">
              {contactInfo.map(({ icon: Icon, title, value }) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-xl border border-zinc-900 bg-zinc-900/30 p-3"
                >
                  <Icon className="text-zinc-500" size={16} />
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600">
                      {title}
                    </p>
                    <p className="text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* STATS — remonté */}
            <div className="mt-6 grid grid-cols-3 gap-px bg-zinc-900">
              {stats.map(([value, label]) => (
                <div key={label} className="bg-black p-3 text-center">
                  <p className="text-base font-thin">{value}</p>
                  <p className="text-[9px] uppercase text-zinc-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM — remonté */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 md:p-6">

            <h2 className="mb-3 text-lg font-thin">
              Envoyer une demande
            </h2>

            <div className="grid gap-3 md:grid-cols-2">

              {formFields.map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <p className="text-[9px] uppercase text-zinc-600">
                    {label}
                  </p>

                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, [key]: e.target.value }))
                    }
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-600"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <p className="text-[9px] uppercase text-zinc-600">
                  Message
                </p>

                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, message: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-600"
                />
              </div>

              <button className="md:col-span-2 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black hover:bg-zinc-200">
                Envoyer <FiArrowRight size={12} />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* SHOWROOM — remonté */}
      <div className="border-t border-zinc-900 px-6 py-8 md:px-12">

        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 text-lg font-thin">
            Showroom
          </h2>

          <div className="grid gap-px bg-zinc-900 md:grid-cols-3">
            {[
              { title: 'Adresse', desc: 'Paris, France' },
              { title: 'Horaires', desc: 'Lun — Sam · 09h — 19h' },
              { title: 'Essai', desc: 'Sur rendez-vous' },
            ].map((item) => (
              <div key={item.title} className="bg-black p-4">
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-zinc-500">{item.desc}</p>

                <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-600">
                  <FiCheck size={10} /> dispo
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}