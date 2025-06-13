import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Star, Heart, Brain, Users, Sparkles, Clock, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6F2]">
      <header className="sticky top-0 z-50 w-full border-b border-[#E6DFD3] bg-white/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-light text-[#8A6D5D]">
              Mariana <span className="font-medium">Viana</span>
            </span>
            <span className="hidden md:inline-block text-sm text-[#8A6D5D]/70 font-light">CRP 05/47572</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#tratamentos"
              className="text-sm font-light text-[#8A6D5D] hover:text-[#7D9B76] transition-colors"
            >
              Tratamentos
            </Link>
            <Link
              href="#diferenciais"
              className="text-sm font-light text-[#8A6D5D] hover:text-[#7D9B76] transition-colors"
            >
              Diferenciais
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-light text-[#8A6D5D] hover:text-[#7D9B76] transition-colors"
            >
              Depoimentos
            </Link>
            <Link href="#sobre" className="text-sm font-light text-[#8A6D5D] hover:text-[#7D9B76] transition-colors">
              Sobre
            </Link>
            <Link href="#faq" className="text-sm font-light text-[#8A6D5D] hover:text-[#7D9B76] transition-colors">
              FAQ
            </Link>
          </nav>
          <Button asChild className="bg-[#7D9B76] hover:bg-[#6a8764] text-white rounded-full px-6">
            <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">Agende sua consulta</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#E6DFD3] text-[#8A6D5D] text-sm font-light mb-2">
                Psicóloga CRP 05/47572
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#8A6D5D]">
                Quer ter controle das suas <span className="font-medium">emoções</span> e mudar a história da sua{" "}
                <span className="font-medium">vida</span>?
              </h1>
              <p className="text-lg text-[#8A6D5D]/80 font-light">
                Te ajudo a mudar suas atitudes, superar traumas e ter uma jornada mais leve.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-[#7D9B76] hover:bg-[#6a8764] text-white rounded-full px-8 py-6 text-base font-light">
                  <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                    Agende sua consulta <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:col-span-6 relative">
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
                <p className="text-[#8A6D5D] font-light">
                  <span className="font-medium">15+ anos</span> desenvolvendo e acolhendo pessoas que desejam
                  transformar a sua própria história.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Element */}
        <div className="relative">
          <div className="absolute left-0 w-1/3 h-40 bg-[#E6DFD3]/50 rounded-r-full -z-10"></div>
        </div>

        {/* Tratamentos */}
        <section id="tratamentos" className="py-20 bg-white">
          <div className="container space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-light text-[#8A6D5D]">
                Um espaço seguro para <span className="font-medium">transformação real</span>
              </h2>
              <p className="text-[#8A6D5D]/80 font-light">
                A psicoterapia é uma jornada de autoconhecimento. Comigo, você explora emoções, cura feridas e
                desenvolve relações mais saudáveis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-4 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#7D9B76]/20 flex items-center justify-center group-hover:bg-[#7D9B76]/30 transition-colors">
                  <Users className="h-6 w-6 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Relacionamentos Conscientes</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Desenvolva relações mais saudáveis e significativas em sua vida.
                </p>
              </div>
              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-4 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#7D9B76]/20 flex items-center justify-center group-hover:bg-[#7D9B76]/30 transition-colors">
                  <Heart className="h-6 w-6 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Fortalecimento Emocional</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Aprenda a lidar com suas emoções de forma equilibrada e saudável.
                </p>
              </div>
              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-4 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#7D9B76]/20 flex items-center justify-center group-hover:bg-[#7D9B76]/30 transition-colors">
                  <Users className="h-6 w-6 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Reconstrução Familiar</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Restaure laços e construa uma dinâmica familiar mais saudável.
                </p>
              </div>
              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-4 hover:shadow-md transition-all group">
                <div className="h-12 w-12 rounded-full bg-[#7D9B76]/20 flex items-center justify-center group-hover:bg-[#7D9B76]/30 transition-colors">
                  <Brain className="h-6 w-6 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Autoconhecimento Profundo</h3>
                <p className="text-[#8A6D5D]/70 font-light">Descubra seu verdadeiro potencial e propósito de vida.</p>
              </div>
            </div>

            <div className="text-center bg-[#E6DFD3]/30 p-8 rounded-2xl max-w-3xl mx-auto">
              <p className="text-lg font-light text-[#8A6D5D] mb-6">
                Atendimento <span className="font-medium">100% Online</span> – Particular e humanizado.
              </p>
              <Button asChild className="bg-[#7D9B76] hover:bg-[#6a8764] text-white rounded-full px-8">
                <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                  Agende sua consulta <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Decorative Element */}
        <div className="relative">
          <div className="absolute right-0 w-1/4 h-60 bg-[#E6DFD3]/30 rounded-l-full -z-10"></div>
        </div>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-20 bg-[#F8F6F2]">
          <div className="container space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-light text-[#8A6D5D]">
                O Que Me <span className="font-medium">Diferencia</span>
              </h2>
              <p className="text-[#8A6D5D]/80 font-light">
                Uma abordagem única que combina técnicas científicas com um olhar humanizado para o seu bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl space-y-6 hover:shadow-md transition-all border border-[#E6DFD3]">
                <div className="h-16 w-16 rounded-full bg-[#7D9B76]/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Atendimento Personalizado</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Sem fórmulas prontas, cada pessoa recebe um tratamento único baseado em suas necessidades específicas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl space-y-6 hover:shadow-md transition-all border border-[#E6DFD3]">
                <div className="h-16 w-16 rounded-full bg-[#7D9B76]/10 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Base Científica + Espiritualidade</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Combinação de Psicologia Positiva, Neurociência e uma abordagem integrativa para o seu
                  desenvolvimento.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl space-y-6 hover:shadow-md transition-all border border-[#E6DFD3]">
                <div className="h-16 w-16 rounded-full bg-[#7D9B76]/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Experiência de Vida</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Ex-executiva com vivência de burnout, compreendo profundamente os desafios profissionais e pessoais.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl space-y-6 hover:shadow-md transition-all border border-[#E6DFD3]">
                <div className="h-16 w-16 rounded-full bg-[#7D9B76]/10 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Escuta Empática</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Ambiente livre de julgamentos, onde você pode se expressar livremente e ser verdadeiramente ouvido.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl space-y-6 hover:shadow-md transition-all border border-[#E6DFD3]">
                <div className="h-16 w-16 rounded-full bg-[#7D9B76]/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#7D9B76]" />
                </div>
                <h3 className="text-xl font-medium text-[#8A6D5D]">Flexibilidade Online</h3>
                <p className="text-[#8A6D5D]/70 font-light">
                  Sigilo e acesso de qualquer lugar, adaptado à sua rotina e necessidades específicas.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-[#7D9B76] hover:bg-[#6a8764] text-white rounded-full px-8">
                <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                  Quero minha transformação <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-20 bg-white">
          <div className="container space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-light text-[#8A6D5D]">
                Histórias de <span className="font-medium">Transformação</span>
              </h2>
              <p className="text-[#8A6D5D]/80 font-light">
                Conheça algumas experiências de pessoas que passaram pelo processo de transformação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#7D9B76] rounded-full flex items-center justify-center">
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
                <div className="flex items-center gap-1 text-[#7D9B76]">
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                </div>
                <p className="text-[#8A6D5D]/80 italic font-light">
                  "A Mariana me acolheu de verdade. Pela primeira vez, senti que alguém realmente me entendia e não me
                  julgava. Hoje consigo lidar com minhas emoções de forma muito mais saudável."
                </p>
                <div className="pt-4 border-t border-[#E6DFD3]">
                  <p className="font-medium text-[#8A6D5D]">Maria C.</p>
                  <p className="text-sm text-[#8A6D5D]/70 font-light">Cliente há 1 ano</p>
                </div>
              </div>

              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#7D9B76] rounded-full flex items-center justify-center">
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
                <div className="flex items-center gap-1 text-[#7D9B76]">
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                </div>
                <p className="text-[#8A6D5D]/80 italic font-light">
                  "Hoje vivo relacionamentos mais saudáveis graças ao trabalho com a Mariana. Aprendi a estabelecer
                  limites e a me comunicar de forma mais clara e assertiva."
                </p>
                <div className="pt-4 border-t border-[#E6DFD3]">
                  <p className="font-medium text-[#8A6D5D]">Pedro S.</p>
                  <p className="text-sm text-[#8A6D5D]/70 font-light">Cliente há 8 meses</p>
                </div>
              </div>

              <div className="bg-[#F8F6F2] p-8 rounded-2xl space-y-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#7D9B76] rounded-full flex items-center justify-center">
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
                <div className="flex items-center gap-1 text-[#7D9B76]">
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                  <Star className="fill-[#7D9B76]" size={16} />
                </div>
                <p className="text-[#8A6D5D]/80 italic font-light">
                  "Recuperei minha leveza depois de anos lutando contra a ansiedade. A abordagem da Mariana é única,
                  combinando técnicas científicas com um olhar para o espiritual."
                </p>
                <div className="pt-4 border-t border-[#E6DFD3]">
                  <p className="font-medium text-[#8A6D5D]">Ana L.</p>
                  <p className="text-sm text-[#8A6D5D]/70 font-light">Cliente há 1 ano e 3 meses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20 bg-[#F8F6F2]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 relative">
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="mari3.jpg"
                    alt="Psicóloga Mariana Viana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-right-12 h-32 w-32 bg-[#7D9B76]/20 rounded-full"></div>
                <div className="absolute -top-6 -left-6 md:-left-12 h-24 w-24 bg-[#E6DFD3] rounded-full"></div>
              </div>
              <div className="md:col-span-7 space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-[#7D9B76]/20 text-[#7D9B76] text-sm font-light mb-2">
                  Sobre mim
                </div>
                <h2 className="text-3xl font-light text-[#8A6D5D]">
                  Conheça a Psicóloga <span className="font-medium">Mariana Viana</span>
                </h2>
                <p className="text-[#8A6D5D]/80 font-light text-lg leading-relaxed">
                  Sou psicóloga integrativa com 15 anos de experiência. Minha trajetória no RH corporativo e minha
                  vivência com burnout me ensinaram que a cura começa com coragem de olhar para dentro.
                </p>
                <p className="text-[#8A6D5D]/80 font-light leading-relaxed">
                  Minha abordagem combina técnicas científicas comprovadas com um olhar para o desenvolvimento integral
                  do ser humano. Acredito que cada pessoa tem um potencial imenso para transformação e crescimento
                  quando recebe o suporte adequado.
                </p>
                <p className="text-[#8A6D5D]/80 font-light leading-relaxed">
                  Trabalho com uma metodologia personalizada, respeitando a individualidade de cada cliente e criando um
                  espaço seguro para que você possa explorar suas emoções e desenvolver novas perspectivas.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-[#7D9B76] hover:bg-[#6a8764] text-white rounded-full px-8">
                    <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                      Agende sua consulta <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container space-y-16 max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-light text-[#8A6D5D]">
                Perguntas <span className="font-medium">Frequentes</span>
              </h2>
              <p className="text-[#8A6D5D]/80 font-light">
                Tire suas dúvidas sobre o processo terapêutico e como podemos trabalhar juntos.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-[#E6DFD3]">
                <AccordionTrigger className="text-[#8A6D5D] text-lg font-light hover:text-[#7D9B76] transition-colors py-6">
                  Como funciona o atendimento online?
                </AccordionTrigger>
                <AccordionContent className="text-[#8A6D5D]/80 font-light pb-6">
                  O atendimento é realizado por videoconferência, em uma plataforma segura e confidencial. Você precisa
                  apenas de um dispositivo com conexão à internet, câmera e microfone. A sessão tem a mesma duração e
                  qualidade de uma sessão presencial, com a vantagem da flexibilidade de horário e localização.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-[#E6DFD3]">
                <AccordionTrigger className="text-[#8A6D5D] text-lg font-light hover:text-[#7D9B76] transition-colors py-6">
                  Quanto tempo dura o tratamento?
                </AccordionTrigger>
                <AccordionContent className="text-[#8A6D5D]/80 font-light pb-6">
                  A duração do tratamento varia de acordo com cada caso e objetivo. Algumas pessoas percebem melhorias
                  significativas em poucas semanas, enquanto outras se beneficiam de um acompanhamento mais longo.
                  Avaliamos juntos o progresso periodicamente e definimos o melhor caminho para sua jornada de
                  transformação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-[#E6DFD3]">
                <AccordionTrigger className="text-[#8A6D5D] text-lg font-light hover:text-[#7D9B76] transition-colors py-6">
                  Aceita convênios?
                </AccordionTrigger>
                <AccordionContent className="text-[#8A6D5D]/80 font-light pb-6">
                  Atualmente trabalho apenas com atendimentos particulares, o que garante maior flexibilidade de
                  horários e continuidade do tratamento. Forneço recibo para reembolso junto ao seu convênio, caso ele
                  ofereça esse benefício para atendimentos psicológicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-[#E6DFD3]">
                <AccordionTrigger className="text-[#8A6D5D] text-lg font-light hover:text-[#7D9B76] transition-colors py-6">
                  Como agendar?
                </AccordionTrigger>
                <AccordionContent className="text-[#8A6D5D]/80 font-light pb-6">
                  Você pode agendar sua consulta através do WhatsApp (11) 98055-3835, pelo botão "Agende sua consulta"
                  neste site, ou enviando um e-mail. Respondo em até 24 horas úteis e buscamos juntos o melhor horário
                  para seu atendimento inicial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center pt-8">
              <Button asChild className="bg-[#8A6D5D] hover:bg-[#7a5f51] text-white rounded-full px-8 flex items-center gap-2 mx-auto">
                <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Fale comigo no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8A6D5D] text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light">
                  Mariana <span className="font-medium">Viana</span>
                </span>
              </div>
              <p className="text-white/70 font-light">Psicóloga CRP 05/47572</p>
              <p className="text-white/70 font-light">Atendimento 100% online – Sigilo e flexibilidade.</p>
              <div className="pt-4">
                <Button asChild className="bg-white text-[#8A6D5D] hover:bg-white/90 rounded-full px-6">
                  <a href="https://wa.me/5511980553835" target="_blank" rel="noopener noreferrer">
                    Agende sua consulta
                  </a>
                </Button>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xl font-light">Contato</h3>
              <p className="flex items-center gap-3 text-white/90 font-light">
                <MessageCircle size={18} className="text-[#E6DFD3]" />
                <span>WhatsApp: (11) 98055-3835</span>
              </p>
              <p className="flex items-center gap-3 text-white/90 font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E6DFD3]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>E-mail: contato@marianaviana.com.br</span>
              </p>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xl font-light">Redes Sociais</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  href="#"
                  className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
              <p className="text-white/70 font-light pt-4">
                Siga-me nas redes sociais para dicas de bem-estar e autoconhecimento.
              </p>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h3 className="text-xl font-light">Desenvolvido por</h3>
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

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70 font-light">
            <p>&copy; {new Date().getFullYear()} Mariana Viana Psicologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
