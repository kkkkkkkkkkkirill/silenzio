import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { contact } from '../../data/content';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Заявка с сайта SILENZIO');
    const body = encodeURIComponent(
      [
        `Имя: ${name || '—'}`,
        `Телефон: ${phone || '—'}`,
        `Сообщение: ${message || '—'}`,
      ].join('\n'),
    );
    window.location.href = `mailto:llev25359@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal as="div" className="md:col-span-5">
          <p className="eyebrow mb-4">{contact.eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight2">
            {contact.title}
          </h2>
          <p className="mt-7 max-w-[44ch] text-[15px] md:text-[17px] leading-relaxed text-ink/65 font-light">
            {contact.description}
          </p>

          <ul className="mt-10 space-y-5">
            {contact.blocks.map((b) => (
              <li key={b.label}>
                <p className="eyebrow mb-1">{b.label}</p>
                {b.href ? (
                  <a href={b.href} className="text-[18px] md:text-[22px] text-ink hover:opacity-70 transition-opacity">
                    {b.value}
                  </a>
                ) : (
                  <span className="text-[18px] md:text-[22px] text-ink">{b.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} as="div" className="md:col-span-7">
          <form onSubmit={onSubmit} className="border border-ink/15 p-6 md:p-10 bg-paper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="имя" value={name} onChange={setName} placeholder="как к вам обращаться" />
              <Field label="телефон" value={phone} onChange={setPhone} placeholder={contact.form.phone} type="tel" />
            </div>
            <div className="mt-6">
              <label className="block">
                <span className="eyebrow block mb-2">{contact.form.message}</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-2 text-[15px] resize-none"
                  placeholder="дата церемонии, формат, пожелания"
                />
              </label>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-[11px] tracking-wide2 text-ink/45 max-w-[44ch]">
                отправляя форму, вы соглашаетесь с обработкой данных для подготовки сценария.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-[12px] uppercase tracking-wide2 font-medium hover:opacity-90 transition-opacity"
              >
                {contact.form.submit}
                <ArrowRight size={14} strokeWidth={1.8} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-2 text-[15px]"
      />
    </label>
  );
}
