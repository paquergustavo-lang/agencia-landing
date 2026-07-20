'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Mail, Zap, TrendingUp, Users, BarChart3 } from 'lucide-react';

// Design Tokens
const tokens = {
  colors: {
    background: '#FAFAFA',
    foreground: '#0F172A',
    muted: '#F1F5F9',
    'muted-foreground': '#64748B',
    accent: '#0052FF',
    'accent-secondary': '#4D7CFF',
    'accent-foreground': '#FFFFFF',
    border: '#E2E8F0',
    card: '#FFFFFF',
  },
  fonts: {
    display: '"Calistoga", Georgia, serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
};

// Gradient Text Component
const GradientText = ({ children, className = '' }) => (
  <span
    className={`bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

// Section Badge Component
const SectionBadge = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/5 px-5 py-2 mb-6"
  >
    <motion.span
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-2 w-2 rounded-full bg-blue-600"
    />
    <span
      style={{ fontFamily: tokens.fonts.mono }}
      className="text-xs uppercase tracking-[0.15em] text-blue-600"
    >
      {label}
    </span>
  </motion.div>
);

// Button Component
const Button = ({ children, variant = 'primary', className = '', href = '#', icon: Icon = null }) => {
  const baseClass = 'inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-all duration-300 text-base';
  const variantClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]'
      : 'border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F1F5F9] hover:border-blue-600/30';

  return (
    <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </a>
  );
};

// Card Component
const Card = ({ children, className = '', featured = false }) => {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-2xl bg-gradient-to-br from-[#0052FF] via-[#4D7CFF] to-[#0052FF] p-[2px] ${className}`}
      >
        <div className="h-full w-full rounded-[calc(16px-2px)] bg-white">{children}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-md transition-all hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Hero Graphic Component (Abstract)
const HeroGraphic = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-full h-full min-h-[500px] hidden lg:flex items-center justify-center"
  >
    {/* Rotating ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, linear: true }}
      className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-blue-500/20"
    />

    {/* Floating cards */}
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute -top-20 -left-20 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 backdrop-blur-sm shadow-lg"
    />

    <motion.div
      animate={{ y: [10, -10, 10] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 backdrop-blur-sm shadow-lg"
    />

    {/* Center accent block */}
    <div className="absolute w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] shadow-xl" />

    {/* Dot grid */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:32px_32px] opacity-5 rounded-2xl" />
  </motion.div>
);

// Stats Section Component
const StatItem = ({ number, label, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="flex justify-center mb-4">
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
    </div>
    <div className="text-4xl font-bold text-[#0F172A] mb-2">{number}</div>
    <p className="text-[#64748B]">{label}</p>
  </motion.div>
);

// Main Landing Page
export default function LandingPage() {
  return (
    <div style={{ backgroundColor: tokens.colors.background }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div style={{ fontFamily: tokens.fonts.display }} className="text-2xl font-bold text-[#0F172A]">
            Gustavo <GradientText>Paquer</GradientText>
          </div>
          <Button href={`https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura.`}>
            Agendar Demo <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontFamily: tokens.fonts.display }} className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Tráfego pago que <GradientText>realmente vende</GradientText>
            </h1>
            <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
              Há 25+ anos transformo empreendedores em máquinas de vendas. Agora, por um preço acessível, você tem acesso a tráfego pago, conteúdo e estratégia — tudo em uma assinatura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura.`}>
                Agendar Reunião <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="secondary" href="#planos">
                Ver Planos
              </Button>
            </div>
          </motion.div>

          <HeroGraphic />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Dot pattern texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:32px_32px] opacity-3" />

        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-[150px] opacity-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="25+" label="Anos de Experiência" icon={BarChart3} />
            <StatItem number="50+" label="Empresas Atendidas" icon={Users} />
            <StatItem number="100k+" label="Em Campanhas Gerenciadas" icon={TrendingUp} />
            <StatItem number="6x" label="ROI Médio Comprovado" icon={Zap} />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <SectionBadge label="O Desafio" />
        <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold text-[#0F172A] mb-12">
          Por que o empreendedor <GradientText>continua travado</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Agência Tradicional = Caro',
              desc: 'R$ 600 - 2.000/mês só de gestão, sem contar verba de mídia.',
            },
            {
              title: 'Freelancer Solto = Fragmentado',
              desc: 'Um cuida de tráfego, outro de conteúdo, ninguém fala com ninguém.',
            },
            {
              title: 'Falta de Verba = Impossibilidade',
              desc: 'Empreendedor não tem cash pra pagar gestor E investir em mídia.',
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-[#64748B]">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-28 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:32px_32px] opacity-3" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionBadge label="A Solução" />
          <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold mb-12">
            Agência por Assinatura. <GradientText>Simples assim.</GradientText>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tráfego Pago Desde o Início</h3>
                    <p className="text-white/70">
                      Até o plano de R$ 197 já tem tráfego pago (Meta Ads). Isso custaria R$ 600-800 em uma agência tradicional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Menos Gasto com Gestor = Mais Gasto em Mídia</h3>
                    <p className="text-white/70">
                      Você economiza com meu serviço, investe tudo isso em Meta/Google Ads e consegue MUITO mais resultado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sem Contrato Absurdo</h3>
                    <p className="text-white/70">
                      Escolha se contrata por 6, 12, 18 ou 24 meses. Quanto mais longo, melhor o preço.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl border border-blue-500/30 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-white/60 mb-4">Imagem: Sistema de Assinatura</p>
                <Zap className="w-20 h-20 text-blue-400 mx-auto opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <SectionBadge label="Sobre Mim" />
        <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold text-[#0F172A] mb-12">
          A história por trás <GradientText>dessa agência</GradientText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="space-y-6 text-[#64748B] leading-relaxed">
              <p>
                Comecei em 2019 com uma imobiliária. Em 40-50 dias, já tinha 10 clientes. Não porque era bom demais — era porque
                <strong> entendia o problema real do empreendedor.</strong>
              </p>
              <p>
                Nos últimos 25+ anos, atendi 50+ empresas em praticamente todo nicho: beleza, food, automotivo, estética, e-commerce.
                Gerenciei 100k+ em campanhas. Fui dono de agência por 5 anos.
              </p>
              <p>
                <strong>Aprendi o que nenhuma agência quer admitir:</strong> o papel do gestor de tráfego não é vender. É trazer demanda
                pra que o cliente venda. Não é criar arte bonita — é gerar negócio.
              </p>
              <p>
                Por isso criei essa agência por assinatura. Porque empreendedor que está começando ou expandindo<strong> não tem R$ 2 mil pra pagar agência + R$ 1 mil em mídia.</strong> Ele tem que escolher entre pagar fornecedor ou pagar gestor.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] rounded-2xl border border-[#E2E8F0] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-[#64748B] mb-4">Sua foto / imagem pessoal aqui</p>
              <Users className="w-20 h-20 text-blue-400 mx-auto opacity-30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <SectionBadge label="Diferenciais" />
        <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold text-[#0F172A] mb-12">
          Por que escolher <GradientText>essa agência</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card featured={true}>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Experiência Real</h3>
              <p className="text-[#64748B] mb-6">
                25+ anos no mercado, 50+ empresas atendidas, 100k+ gerenciados. Não é teoria — é resultado comprovado.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Múltiplos nichos</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Campanhas escaladas</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Resultados comprovados</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Entendo Empreendedor</h3>
              <p className="text-[#64748B] mb-6">
                Sou empreendedor. Já "tomei porrada" no mercado. Entendo sua dor real: falta de verba, falta de tempo, falta de direção.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sem enrolação</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Foco em resultado</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Adaptação real</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Conhecimento de Negócio</h3>
              <p className="text-[#64748B] mb-6">
                Criei o programa "Romper Barreiras" que treina empreendedores em mentalidade e negócios. Não é só tráfego.
              </p>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Estratégia real</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Mentalidade correta</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Crescimento real</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-28 px-6 max-w-6xl mx-auto">
        <SectionBadge label="Planos" />
        <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold text-[#0F172A] mb-12">
          Escolha seu <GradientText>ponto de partida</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Start',
              price: '197',
              services: ['Post no Instagram', 'Criação de conteúdo', 'Tráfego pago (Meta Ads)', 'Dashboard básico'],
              volume: '8 posts/mês',
            },
            {
              name: 'Essencial',
              price: '397',
              services: ['Tudo do Start', 'Estratégia digital', 'Edição de vídeo', 'Meta Ads + Google Ads'],
              volume: '12 posts + 4 vídeos/mês',
            },
            {
              name: 'Performance',
              price: '597',
              services: ['Tudo do Essencial', 'Dashboard com relatório de tráfego', 'Prioridade média'],
              volume: '16 posts + 8 vídeos/mês',
              highlight: true,
            },
            {
              name: 'Full',
              price: '1.000',
              services: ['Tudo do Performance', 'Gravação de vídeo', 'Site/Landing Page', 'Prioridade máxima'],
              volume: '2 diárias gravação + 1 site/LP',
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card featured={plan.highlight}>
                <div className="p-8">
                  {plan.highlight && <div className="mb-4 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">MELHOR CUSTO/BENEFÍCIO</div>}
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#0F172A]">R$ {plan.price}</span>
                    <span className="text-[#64748B] ml-2">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.services.map((service, sidx) => (
                      <li key={sidx} className="flex gap-3 text-sm text-[#64748B]">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[#64748B] mb-6 py-3 border-t border-[#E2E8F0]">
                    <strong>Volume:</strong> {plan.volume}
                  </p>
                  <Button
                    href={`https://wa.me/5567999898959?text=Olá! Tenho interesse no plano ${plan.name}. Posso saber mais?`}
                    className="w-full"
                  >
                    Começar Agora <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-[#F1F5F9] rounded-2xl p-8 border border-[#E2E8F0]">
          <h3 className="font-semibold text-[#0F172A] mb-4">💡 Sobre os Contratos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-[#64748B]">
            <div>
              <p className="font-semibold text-[#0F172A] mb-1">6 meses</p>
              <p>Sem desconto. Preço de tabela.</p>
            </div>
            <div>
              <p className="font-semibold text-[#0F172A] mb-1">12 meses</p>
              <p>10% de desconto. 1 mês grátis.</p>
            </div>
            <div>
              <p className="font-semibold text-[#0F172A] mb-1">18 meses</p>
              <p>15% de desconto. 1 LP grátis.</p>
            </div>
            <div>
              <p className="font-semibold text-[#0F172A] mb-1">24 meses</p>
              <p>20% de desconto. Site grátis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 px-6 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:32px_32px] opacity-3" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionBadge label="Processo" />
          <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold mb-12">
            Como a gente <GradientText>trabalha juntos</GradientText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Reunião Inicial',
                desc: 'Entendo seu negócio, sua dor, seus objetivos e seu orçamento.',
              },
              {
                step: '2',
                title: 'Diagnóstico Real',
                desc: 'Analiso o que você já tem rodando e onde estão as oportunidades.',
              },
              {
                step: '3',
                title: 'Implementação',
                desc: 'Começo a montar as estratégias, campanhas e conteúdo do seu plano.',
              },
              {
                step: '4',
                title: 'Resultados',
                desc: 'Acompanhamento semanal, otimizações constantes e crescimento comprovado.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#4D7CFF] flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <SectionBadge label="Próximo Passo" />
        <h2 style={{ fontFamily: tokens.fonts.display }} className="text-4xl font-bold text-[#0F172A] mb-8">
          Pronto para deixar <GradientText>o tráfego pago trabalhar</GradientText> pro seu negócio?
        </h2>
        <p className="text-lg text-[#64748B] mb-12 max-w-2xl">
          Marca uma reunião de 20 minutos. Não é venda forçada — é conversa real pra entender seu cenário e se faz sentido a gente trabalhar junto.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button href={`https://wa.me/5567999898959?text=Olá! Gostaria de agendar uma reunião para conhecer os planos de assinatura.`}>
            <MessageCircle className="w-4 h-4" />
            WhatsApp: 67 99989-8959
          </Button>
          <Button variant="secondary" href={`mailto:paquermkt@gmail.com`}>
            <Mail className="w-4 h-4" />
            Email: paquermkt@gmail.com
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E2E8F0] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto text-center text-[#64748B]">
          <p>© 2024 Gustavo Paquer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
