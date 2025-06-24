import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Star, Heart, Brain, Users, Sparkles, Clock, ArrowRight, Target, Zap, TrendingUp, Shield     } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EBEBEB]">
      <header className="sticky top-0 z-50 w-full border-b border-[#EBEBEB] bg-white/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center gap-2 md:gap-4 w-full">
            <div className="relative h-14 w-40 md:h-20 md:w-64 flex-shrink-0">
              <Image
                src="logoazulmari.png"
                alt="Mariana Viana Psicologia"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1" />
            <Button asChild className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:py-6 md:text-base whitespace-nowrap uppercase font-bold">
              <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">Agende sua consulta</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Dobra 1 */}
        <section className="py-10 md:py-14 container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-[#CBAA7B]/20 text-[#CBAA7B] text-sm font-sans mb-2">
                <strong>Psicóloga CRP 05/47572</strong>
              </div>
              <h2 className="text-4xl font-serif text-[#2B484C] font-medium">
                Psicóloga Mariana Viana
              </h2>
              <h1 className="text-3xl md:text-3xl lg:text-3xl font-serif leading-tight text-[#2B484C]">
                <span className="font-medium">Equilíbrio</span> entre responsabilidades e saúde emocional.
              </h1>
              <div className="space-y-4">
                <p className="text-lg text-[#2B484C] font-sans leading-relaxed">
                  Você sustenta resultados, metas, família — mas está cada vez mais exausto(a)? <br />
                  Relacionamentos em crise, ansiedade e culpa viraram parte da sua rotina?
                </p>
               
              </div>
              <div className="bg-[#CBAA7B]/10 p-6 rounded-2xl space-y-4">
                <p className="text-lg text-[#2B484C] font-sans font-medium">
                  Existe um caminho para o bem-estar emocional.
                </p>
                <p className="text-[#2B484C]/80 font-sans">
                  A psicoterapia é um investimento em equilíbrio, clareza e potência emocional.
                </p>
              </div>
              <div className="space-y-4">
             
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Mais de 15 anos de experiência acolhendo pessoas que buscam mais do que alívio:{" "}
                  <strong>transformação</strong>.
                </p>
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Especialista em desenvolvimento humano, executiva de RH no mercado corporativo, conheci de perto o
                  burnout e a sobrecarga. Hoje, acolho homens e mulheres que precisam de um espaço de estratégia
                  emocional para continuar crescendo – sem se perder de si.
                </p>
              </div>
              <div className="pt-4">
                <Button className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:py-6 md:text-base whitespace-nowrap uppercase font-bold" asChild>
                  <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">
                    Agende sua consulta pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="mari2.jpg"
                  alt="Psicóloga Mariana Viana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                <p className="text-[#2B484C] font-sans">
                  <span className="font-medium">15+ anos</span> desenvolvendo e acolhendo pessoas que desejam
                  transformar a sua própria história.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Element */}
        <div className="relative">
          <div className="absolute left-0 w-1/3 h-40 bg-[#CBAA7B]/20 rounded-r-full -z-10"></div>
        </div>

        {/* Tratamentos - Dobra 2 */}
        <section id="tratamentos" className="py-20 bg-white">
          <div className="container space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-[#2B484C]">
                Tratamentos <span className="font-medium">Especializados</span>
              </h2>
              <p className="text-[#2B484C]/80 font-sans text-lg">
                Com uma abordagem integrativa, baseada em Psicologia Positiva e neurociência, a
                psicoterapia com Mariana Viana promove transformação emocional real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#DBB8AF]/30 flex items-center justify-center group-hover:bg-[#DBB8AF]/50 transition-colors">
                  <Target className="h-6 w-6 text-[#2B484C]" />
                </div>
                <h3 className="text-xl font-serif text-[#2B484C]">Equilíbrio Emocional para Alta Performance</h3>
                <p className="text-[#2B484C]/70 font-sans">
                  Clareza mental, autoconsciência e estrutura emocional para quem sustenta muitas responsabilidades.
                </p>
              </div>

              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#DBB8AF]/30 flex items-center justify-center group-hover:bg-[#DBB8AF]/50 transition-colors">
                  <Users className="h-6 w-6 text-[#2B484C]" />
                </div>
                <h3 className="text-xl font-serif text-[#2B484C]">
                  Relacionamentos Saudáveis e Inteligência Emocional
                </h3>
                <p className="text-[#2B484C]/70 font-sans">
                  Estratégias para superar padrões destrutivos, comunicar com assertividade e restaurar vínculos.
                </p>
              </div>

              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#DBB8AF]/30 flex items-center justify-center group-hover:bg-[#DBB8AF]/50 transition-colors">
                  <Brain className="h-6 w-6 text-[#2B484C]" />
                </div>
                <h3 className="text-xl font-serif text-[#2B484C]">Autoconhecimento Estratégico</h3>
                <p className="text-[#2B484C]/70 font-sans">
                  Desenvolva autoliderança, presença e propósito — dentro e fora do trabalho.
                </p>
              </div>

              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#DBB8AF]/30 flex items-center justify-center group-hover:bg-[#DBB8AF]/50 transition-colors">
                  <Sparkles className="h-6 w-6 text-[#2B484C]" />
                </div>
                <h3 className="text-xl font-serif text-[#2B484C]">Reconexão Pessoal</h3>
                <p className="text-[#2B484C]/70 font-sans">
                  Um caminho de cura com profundidade, sensibilidade e direção.
                </p>
              </div>
            </div>

            <div className="text-center bg-[#CBAA7B]/10 p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-xl font-serif text-[#2B484C] mb-4">Atendimento 100% Online</h3>
              <p className="text-lg font-sans text-[#2B484C] mb-6">
                Particular, humanizado e flexível. Exclusividade para quem está pronto(a) para investir em si.
              </p>
              <Button className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:py-3 md:text-base whitespace-nowrap uppercase font-bold" asChild>
                <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">
                  Agende sua consulta pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Decorative Element */}
        <div className="relative">
          <div className="absolute right-0 w-1/4 h-60 bg-[#CBAA7B]/10 rounded-l-full -z-10"></div>
        </div>

        {/* Diferenciais - Dobra 3 */}
            <section id="diferenciais" className="py-10 md:py-14 bg-[#EBEBEB]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#2B484C]">
                    Meus <span className="font-medium">Diferenciais</span>
                  </h2>
                </div>

                {/* Container flexível com centralização */}
                <div className="flex flex-wrap justify-center -mx-4 gap-y-8">
                  {/* Card 1 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-md transition-all border border-[#EBEBEB] h-full">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#CBAA7B]/20 flex items-center justify-center">
                        <Zap className="h-6 w-6 md:h-8 md:w-8 text-[#CBAA7B]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif text-[#2B484C]">Abordagem Estratégica e Humanizada</h3>
                      <p className="text-[#2B484C]/70 font-sans text-sm md:text-base">
                        Psicoterapia com base científica e escuta sensível — ideal para quem vive sob pressão.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-md transition-all border border-[#EBEBEB] h-full">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#CBAA7B]/20 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-[#CBAA7B]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif text-[#2B484C]">Vivência no Mundo Corporativo</h3>
                      <p className="text-[#2B484C]/70 font-sans text-sm md:text-base">
                        Executiva de RH em grandes empresas, entendo de dentro a dor da alta performance sem equilíbrio.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-md transition-all border border-[#EBEBEB] h-full">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#CBAA7B]/20 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-[#CBAA7B]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif text-[#2B484C]">Respeito e Propósito</h3>
                      <p className="text-[#2B484C]/70 font-sans text-sm md:text-base">
                        Integro diferentes abordagens quando isso faz sentido para o paciente.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-md transition-all border border-[#EBEBEB] h-full">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#CBAA7B]/20 flex items-center justify-center">
                        <Target className="h-6 w-6 md:h-8 md:w-8 text-[#CBAA7B]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif text-[#2B484C]">Alta Personalização</h3>
                      <p className="text-[#2B484C]/70 font-sans text-sm md:text-base">
                        Atendimento individualizado, com foco real em resultado emocional profundo e sustentável.
                      </p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-md transition-all border border-[#EBEBEB] h-full">
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#CBAA7B]/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 md:h-8 md:w-8 text-[#CBAA7B]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-serif text-[#2B484C]">Exclusividade no Atendimento</h3>
                      <p className="text-[#2B484C]/70 font-sans text-sm md:text-base">
                        Atendimento 100% online e particular, com acompanhamento próximo, seguro e ético.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:py-3 md:text-base whitespace-nowrap uppercase font-bold" asChild>
                    <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">Agende sua consulta</a>
                  </Button>
                </div>
              </div>
            </section>

        {/* Depoimentos - Dobra 4 */}
        <section id="depoimentos" className="py-20 bg-white">
          <div className="container space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-[#2B484C]">
                Histórias de <span className="font-medium">Transformação</span>
              </h2>
              <p className="text-[#2B484C]/80 font-sans">Depoimentos extraídos do Google Meu Negócio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#CBAA7B] rounded-full flex items-center justify-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 7.5H5.5C5.5 3.5 7.5 2 9.5 1.5V4C8.5 4.5 8.5 5.5 8.5 7.5Z" fill="white" />
                    <path d="M18.5 7.5H15.5C15.5 3.5 17.5 2 19.5 1.5V4C18.5 4.5 18.5 5.5 18.5 7.5Z" fill="white" />
                    <path
                      d="M18.5 7.5C18.5 9.5 17 14.5 12 14.5V11.5C14 11.5 15 10 15 7.5H12V1.5H19.5V7.5H18.5Z"
                      fill="white"
                    />
                    <path d="M8.5 7.5C8.5 9.5 7 14.5 2 14.5V11.5C4 11.5 5 10 5 7.5H2V1.5H9.5V7.5H8.5Z" fill="white" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-[#CBAA7B]">
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                </div>
                <p className="text-[#2B484C]/80 italic font-sans">
                  "Depois de anos tentando diferentes profissionais, me senti verdadeiramente compreendida."
                </p>
              </div>

              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#CBAA7B] rounded-full flex items-center justify-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 7.5H5.5C5.5 3.5 7.5 2 9.5 1.5V4C8.5 4.5 8.5 5.5 8.5 7.5Z" fill="white" />
                    <path d="M18.5 7.5H15.5C15.5 3.5 17.5 2 19.5 1.5V4C18.5 4.5 18.5 5.5 18.5 7.5Z" fill="white" />
                    <path
                      d="M18.5 7.5C18.5 9.5 17 14.5 12 14.5V11.5C14 11.5 15 10 15 7.5H12V1.5H19.5V7.5H18.5Z"
                      fill="white"
                    />
                    <path d="M8.5 7.5C8.5 9.5 7 14.5 2 14.5V11.5C4 11.5 5 10 5 7.5H2V1.5H9.5V7.5H8.5Z" fill="white" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-[#CBAA7B]">
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                </div>
                <p className="text-[#2B484C]/80 italic font-sans">
                  "A Mariana tem uma escuta diferenciada, que conecta empatia com direcionamento real."
                </p>
              </div>

              <div className="bg-[#EBEBEB] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#CBAA7B] rounded-full flex items-center justify-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 7.5H5.5C5.5 3.5 7.5 2 9.5 1.5V4C8.5 4.5 8.5 5.5 8.5 7.5Z" fill="white" />
                    <path d="M18.5 7.5H15.5C15.5 3.5 17.5 2 19.5 1.5V4C18.5 4.5 18.5 5.5 18.5 7.5Z" fill="white" />
                    <path
                      d="M18.5 7.5C18.5 9.5 17 14.5 12 14.5V11.5C14 11.5 15 10 15 7.5H12V1.5H19.5V7.5H18.5Z"
                      fill="white"
                    />
                    <path d="M8.5 7.5C8.5 9.5 7 14.5 2 14.5V11.5C4 11.5 5 10 5 7.5H2V1.5H9.5V7.5H8.5Z" fill="white" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-[#CBAA7B]">
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                  <Star className="fill-[#CBAA7B]" size={16} />
                </div>
                <p className="text-[#2B484C]/80 italic font-sans">
                  "Pela primeira vez, consegui manter um processo terapêutico que me transformou."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre - Dobra 5 */}
        <section id="sobre" className="py-20 bg-[#EBEBEB]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 relative">
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="mari4.jpg"
                    alt="Psicóloga Mariana Viana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-right-12 h-32 w-32 bg-[#DBB8AF]/20 rounded-full"></div>
                <div className="absolute -top-6 -left-6 md:-left-12 h-24 w-24 bg-[#CBAA7B]/30 rounded-full"></div>
              </div>
              <div className="md:col-span-7 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-[#DBB8AF]/20 text-[#DBB8AF] text-sm font-sans mb-2">
                  Sobre mim
                </div>
                <h2 className="text-3xl font-serif text-[#2B484C]">
                  Conheça a Psicóloga <span className="font-medium">Mariana Lima Viana Pena</span>
                </h2>
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Sou psicóloga com mais de 15 anos de experiência e especialista em desenvolvimento humano. Minha trajetória foi construída no ambiente corporativo, onde atuo até hoje como executiva de Recursos Humanos.
                </p>
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Ao longo dos anos, compreendi de forma profunda como o ritmo acelerado, as múltiplas demandas e a pressão constante impactam a saúde mental — e isso ampliou meu propósito profissional.
                </p>
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Além da atuação corporativa, atendo pessoas que ocupam posições de responsabilidade ou visibilidade, que enfrentam grandes desafios e desejam manter alta performance com clareza, equilíbrio e saúde emocional. Minha abordagem une ciência e escuta qualificada.
                </p>
                <p className="text-[#2B484C]/80 font-sans leading-relaxed">
                  Cuidar da mente é importante para todos mas se torna uma estratégia essencial para quem lidera, decide e entrega. Não é opcional — é parte do sucesso.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:py-3 md:text-base whitespace-nowrap uppercase font-bold" asChild>
                    <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">
                      Agende sua consulta pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Dobra 6 */}
        <section id="faq" className="py-20 bg-white">
          <div className="container space-y-16 max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-[#2B484C]">
                Perguntas <span className="font-medium">Frequentes</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-[#CBAA7B]/30">
                <AccordionTrigger className="text-[#2B484C] text-lg font-sans hover:text-[#CBAA7B] transition-colors py-6 text-left">
                  Como funciona o atendimento online?
                </AccordionTrigger>
                <AccordionContent className="text-[#2B484C]/80 font-sans pb-6 text-left">
                  Realizado por videoconferência em plataformas seguras. A escuta é profunda, acolhedora e estruturada
                  para resultados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-[#CBAA7B]/30">
                <AccordionTrigger className="text-[#2B484C] text-lg font-sans hover:text-[#CBAA7B] transition-colors py-6 text-left">
                  Quanto tempo dura o tratamento?
                </AccordionTrigger>
                <AccordionContent className="text-[#2B484C]/80 font-sans pb-6 text-left">
                  Cada jornada é única. Respeito o seu tempo e seus objetivos, sem fórmulas prontas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-[#CBAA7B]/30">
                <AccordionTrigger className="text-[#2B484C] text-lg font-sans hover:text-[#CBAA7B] transition-colors py-6 text-left">
                  Você atende por convênios ou planos de saúde?
                </AccordionTrigger>
                <AccordionContent className="text-[#2B484C]/80 font-sans pb-6 text-left">
                  No momento, os atendimentos são particulares, oferecendo exclusividade, sigilo e flexibilidade. Você
                  pode solicitar reembolso ao seu plano com o recibo que forneço.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-[#CBAA7B]/30">
                <AccordionTrigger className="text-[#2B484C] text-lg font-sans hover:text-[#CBAA7B] transition-colors py-6 text-left">
                  Como agendar minha consulta?
                </AccordionTrigger>
                <AccordionContent className="text-[#2B484C]/80 font-sans pb-6 text-left">
                  Basta clicar no botão abaixo para iniciar uma conversa no WhatsApp.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center pt-8">
              <Button className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-8 md:text-base flex items-center gap-2 mx-auto whitespace-nowrap uppercase font-bold" asChild>
                <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Agende sua consulta pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>


      <footer className="bg-[#2B484C] text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative h-20 w-full">
                  <Image
                    src="logobrancamari.png"
                    alt="Mariana Viana Psicologia"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/70 font-sans">Psicóloga CRP 05/47572</p>
              <p className="text-white/70 font-sans">Atendimento 100% online – Sigilo e flexibilidade.</p>
              <div className="pt-4">
                <Button asChild className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-3 py-2 text-xs w-full sm:w-auto md:px-6 md:text-base whitespace-nowrap uppercase font-bold">
                  <a href="https://wa.me/5511912027865" target="_blank" rel="noopener noreferrer">
                    Agende sua consulta
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-versailles">Contato</h3>
              <p className="flex items-center gap-3 text-white/90 font-sans">
                <MessageCircle size={18} className="text-[#DBB8AF]" />
                <span>WhatsApp: (11) 91202-7865</span>
              </p>
             
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-versailles">Redes Sociais</h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61574133429945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DBB8AF]/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/marivianapsicologa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DBB8AF]/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@marianalimaviana6442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#DBB8AF]/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
              <p className="text-white/70 font-sans pt-4">
                Siga-me nas redes sociais para dicas de bem-estar e autoconhecimento.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-versailles">Desenvolvido por</h3>
              <div className="relative h-12 w-48">
                <Image
                  src="logo02.png"
                  alt="HW Digital"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70 font-sans">
            <p>&copy; {new Date().getFullYear()} Mariana Viana Psicologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
