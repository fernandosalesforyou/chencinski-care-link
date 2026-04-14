import { Leaf } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const homeopatiaItems = [
  "Atendimento individualizado",
  "Consulta homeopática aprofundada",
  "Avaliação integral física e emocional",
  "Prescrição baseada na individualidade do paciente",
  "Tratamento de condições agudas e crônicas",
  "Acompanhamento contínuo e personalizado",
  "Atendimento exclusivamente particular",
];

const SpecialtiesSection = () => (
  <section id="especialidades" className="py-16 md:py-24 bg-warm">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
        Especialidades
      </h2>

      <div className="max-w-xl mx-auto">
        <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Homeopatia para Crianças e Adultos</h3>
          </div>
          <ul className="space-y-2.5 mb-6">
            {homeopatiaItems.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppButton>
            Agendar Homeopatia
          </WhatsAppButton>
        </div>
      </div>
    </div>
  </section>
);

export default SpecialtiesSection;
