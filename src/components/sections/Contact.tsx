import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { contact } from '../../data/content';

/**
 * Контакты без рамки. Поля — на воздухе, тонкая нижняя линия.
 * Слева большой 2-строчный заголовок и список координат.
 * Справа — форма без границ.
 */
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
    <section id="contact" className="bg-paper px-5 md:px-10 py-36 md:py-56">
      <div className="max-w-site mx-auto grid grid-cols-12 gap-x-10 gap-y-20">
        <Reveal as="div" className="col-span-12 md:col-span-5">
          <h2 className="display display-tight text-ink leading-[0.98] text-[clamp(2.4rem,5.6vw,5rem)] max-w-[12ch]">
            {contact.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="display italic text-ink/55 mt-7 text-[18px] md:text-[22px] leading-[1.4] max-w-[36ch]">
            {contact.description}
          </p>

          <ul className="mt-14 space-y-8">
            {contact.blocks.map((b) => (
              <li key={b.label}>
                <p className="eyebrow mb-1.5">{b.label}</p>
                {b.href ? (
                  <a
                    href={b.href}
                    className="display text-ink text-[22px] md:text-[30px] tracking-editorial hover:opacity-55 transition-opacity"
                  >
                    {b.value}
                  </a>
                ) : (
                  <span className="display text-ink text-[22px] md:text-[30px] tracking-editorial">
                    {b.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} as="div" className="col-span-12 md:col-span-6 md:col-start-7">
          <form onSubmit={onSubmit} className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              <Field label="имя" value={name} onChange={setName} placeholder="как к вам обращаться" />
              <Field label="телефон" value={phone} onChange={setPhone} placeholder={contact.form.phone} type="tel" />
            </div>
            <div className="mt-12">
              <label className="block">
                <span className="eyebrow block mb-3">{contact.form.message}</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 text-[16px] resize-none transition-colors duration-300"
                  placeholder="дата церемонии, формат, пожелания"
                />
              </label>
            </div>
            <div className="mt-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <p className="text-[11px] tracking-wide2 text-ink/45 max-w-[40ch] leading-relaxed">
                отправляя форму, вы соглашаетесь с обработкой данных
                для подготовки сценария.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 text-ink hover:text-ink/60 transition-colors duration-300"
              >
                <span className="display italic text-[20px] md:text-[24px]">{contact.form.submit}</span>
                <ArrowRight size={18} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1.5" />
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
      <span className="eyebrow block mb-3">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink outline-none py-3 text-[16px] transition-colors duration-300"
      />
    </label>
  );
}
