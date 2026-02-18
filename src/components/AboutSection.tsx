import WhatsAppButton from "./WhatsAppButton";
import drMoises from "@/assets/dr-moises.png";

const AboutSection = () => (
  <section id="quem-sou" className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-secondary">
            <img
              src={drMoises}
              alt="Dr. Moises Chencinski"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
            Conheça o Dr. Moises Chencinski
          </h2>
          <div className="space-y-3 font-body text-muted-foreground leading-relaxed text-base mb-6">
            <p>Médico com atuação em <strong className="text-foreground">Pediatria e Homeopatia</strong>, oferecendo atendimento individualizado e humanizado, sempre com embasamento científico.</p>
            <p>Autor de 3 livros e colunista em revistas e sites especializados. Experiência em aleitamento materno.</p>
            <p>Acompanhamento desde o pré-natal até a infância. Consulta estruturada para compreender o paciente como um todo, fortalecendo o vínculo médico e familiar.</p>
          </div>
          <WhatsAppButton>
            Agendar Consulta
          </WhatsAppButton>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
