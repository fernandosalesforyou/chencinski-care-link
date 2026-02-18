import { Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const testimonials = [
  {
    text: "Atendimento cuidadoso, com explicações claras e muita atenção aos detalhes.",
    author: "Família A.",
  },
  {
    text: "Consulta detalhada, com escuta verdadeira e abordagem diferenciada.",
    author: "Família B.",
  },
  {
    text: "Profissional extremamente atencioso e consultório acolhedor.",
    author: "Família C.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
        O que dizem as famílias atendidas
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {testimonials.map((t) => (
          <div key={t.author} className="bg-warm rounded-xl p-6 border border-border">
            <Stars />
            <p className="font-body text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-body text-xs font-semibold text-foreground">— {t.author}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <WhatsAppButton>Agendar Minha Consulta</WhatsAppButton>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
