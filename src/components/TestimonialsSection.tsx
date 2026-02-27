import { Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const testimonials = [
  {
    text: "Procurei a homeopatia depois de anos tratando crises de rinite e sinusite sem resultados duradouros. A consulta foi muito detalhada e me senti realmente ouvida. Após iniciar o tratamento, as crises diminuíram muito e minha qualidade de vida melhorou bastante. Sou muito grata pelo cuidado e atenção recebidos.",
    author: "Mariana Almeida",
  },
  {
    text: "Eu não conhecia a profundidade da consulta homeopática até passar em atendimento. Foi uma experiência completamente diferente, com uma avaliação cuidadosa e personalizada. Aos poucos, fui percebendo melhora no sono, na ansiedade e na disposição. Hoje recomendo para todos que buscam um tratamento mais individualizado.",
    author: "Ricardo Nogueira",
  },
  {
    text: "Levei minha filha para tratamento homeopático buscando uma abordagem mais integral. Fomos acolhidos com muita atenção e profissionalismo. O acompanhamento é próximo e sempre temos retorno quando precisamos. Estamos muito satisfeitos com os resultados e com a segurança que sentimos durante todo o processo.",
    author: "Camila Torres",
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
        O que dizem os pacientes atendidos
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
