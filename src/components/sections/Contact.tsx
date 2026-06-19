import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { contact, meta } from '../../data/content';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent('Заявка с сайта SILENZIO');
    const body = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\n\n${message}`);
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-site grid-cols-1 lg:grid-cols-2">
        <Reveal as="div" className="flex flex-col justify-between gap-12 px-6 py-20 md:py-28 lg:border-r lg:border-border lg:px-10">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-balance text-[clamp(2.4rem,5vw,4rem)] leading-[1.05]">
              {contact.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="italic text-muted-foreground">{line}</span> : line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{contact.description}</p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href={meta.phoneHref}
              className="flex items-center gap-4 text-2xl font-medium tracking-tight text-foreground transition-opacity hover:opacity-70 md:text-3xl"
            >
              <Phone className="size-5 text-muted-foreground" strokeWidth={1.5} />
              {meta.phone}
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-4 text-lg text-foreground transition-opacity hover:opacity-70"
            >
              <Mail className="size-5 text-muted-foreground" strokeWidth={1.5} />
              {meta.email}
            </a>
            <p className="flex items-center gap-4 text-muted-foreground">
              <Clock className="size-5" strokeWidth={1.5} />
              Круглосуточно, 7 дней в неделю
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} as="div" className="bg-card px-6 py-20 md:py-28 lg:px-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <p className="display text-2xl text-foreground">{contact.formTitle}</p>

            <Field
              id="name"
              label="Имя"
              value={name}
              onChange={setName}
              placeholder="Как к вам обращаться"
              required
            />
            <Field
              id="phone"
              label="Телефон"
              value={phone}
              onChange={setPhone}
              placeholder="+7 ___ ___-__-__"
              required
              type="tel"
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide4 text-muted-foreground">
                Сообщение
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                placeholder="Коротко опишите, чем мы можем помочь"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium tracking-tight text-primary-foreground transition-opacity hover:opacity-90"
            >
              Отправить заявку
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id, label, value, onChange, placeholder, type = 'text', required,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wide4 text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
      />
    </div>
  );
}
