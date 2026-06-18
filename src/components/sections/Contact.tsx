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
      [`Имя: ${name || '—'}`, `Телефон: ${phone || '—'}`, `Сообщение: ${message || '—'}`].join('\n'),
    );
    window.location.href = `mailto:llev25359@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto grid grid-cols-12 gap-6 md:gap-10">
        <Reveal as="div" className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-5">{contact.eyebrow}</p>
          <h2 className="display text-ink leading-[1.02] tracking-tight2 text-[clamp(2.2rem,5.4vw,4.2rem)] max-w-[16ch]">
            {contact.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="mt-8 max-w-[42ch] text-[15px] md:text-[17px] leading-relaxed text-ink/65 font-light">
            {contact.description}
          </p>

          <ul className="mt-12 space-y-7">
            {contact.blocks.map((b) => (
              <li key={b.label}>
                <p className="eyebrow mb-1.5">{b.label}</p>
                {b.href ? (
                  <a href={b.href} className="display text-ink text-[20px] md:text-[26px] tracking-tight2 hover:opacity-60 transition-opacity">
                    {b.value}
                  </a>
                ) : (
                  <span className="display text-ink text-[20px] md:text-[26px] tracking-tight2">{b.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} as="div" className="col-span-12 md:col-span-7 md:pl-6">
          <form onSubmit={onSubmit} className="border-t border-ink/15 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <Field label="имя" value={name} onChange={setName} placeholder="как к вам обращаться" />
              <Field label="телефон" value={phone} onChange={setPhone} placeholder={contact.form.phone} type="tel" />
            </div>
            <div className="mt-10">
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
            <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-[11px] tracking-wide2 text-ink/45 max-w-[42ch]">
                отправляя форму, вы соглашаетесь с обработкой данных для подготовки сценария.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-ink text-paper rounded-full px-7 py-3.5 text-[12px] uppercase tracking-wide2 font-medium hover:bg-ink/85 transition-colors"
              >
                {contact.form.submit}
                <ArrowRight size={14} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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
