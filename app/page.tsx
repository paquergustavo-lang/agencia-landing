'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">
            Gustavo <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Paquer</span>
          </div>
          <a
            href="https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura."
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-sm sm:text-base"
          >
            Agendar Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
                Tráfego pago que <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">realmente</span> vende
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Há 25+ anos transformo empreendedores em máquinas de vendas. Agora, por um preço acessível, você tem acesso a tráfego pago, conteúdo e estratégia — tudo em uma assinatura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura."
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-center"
                >
                  Agendar Reunião
                </a>
                <a
                  href="#planos"
                  className="px-8 py-3 border-2 border-gray-300 text-black rounded-lg font-medium hover:bg-gray-50 transition-all text-center"
                >
                  Ver Planos
                </a>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-2 border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500"></div>
                <p className="text-gray-600 text-sm">📊 Coloque sua imagem aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '25+', label: 'Anos de Experiência' },
              { value: '50+', label: 'Empresas Atendidas' },
              { value: '100k+', label: 'Gerenciados' },
              { value: '6x', label: 'ROI Médio' }
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12">
            Por que o empreendedor <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">continua travado</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Agência Tradicional = Caro',
                desc: 'R$ 600 - 2.000/mês só de gestão, sem contar verba de mídia.'
              },
              {
                title: 'Freelancer Solto = Fragmentado',
                desc: 'Um cuida de tráfego, outro de conteúdo, ninguém fala com ninguém.'
              },
              {
                title: 'Falta de Verba = Impossibilidade',
                desc: 'Empreendedor não tem cash pra pagar gestor E investir em mídia.'
              }
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 text-center">
            A solução: <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Assinatura Completa</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Tráfego Pago', desc: 'Gestão completa de campanhas Meta + Google' },
              { icon: '📱', title: 'Conteúdo', desc: 'Criação de posts, stories, reels e vídeos' },
              { icon: '📊', title: 'Relatórios', desc: 'Dashboard real-time com todas as métricas' }
            ].map((solution) => (
              <div key={solution.title} className="text-center">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 text-center">
            Escolha seu <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">plano</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Start',
                price: '197',
                services: ['Posts Instagram', 'Conteúdo básico', 'Tráfego pago', 'Suporte email']
              },
              {
                name: 'Essencial',
                price: '397',
                services: ['Tudo do Start', 'Estratégia digital', 'Edição de vídeo', 'Meta + Google']
              },
              {
                name: 'Performance',
                price: '597',
                services: ['Tudo do Essencial', 'Dashboard premium', 'Prioridade média', 'Análise profunda'],
                highlight: true
              },
              {
                name: 'Full',
                price: '1.000',
                services: ['Tudo do Performance', 'Gravação de vídeo', 'Site/Landing', 'Suporte prioritário']
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-6 sm:p-8 transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-xl transform scale-105'
                    : 'border border-gray-200 bg-white hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ MELHOR VALOR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>/mês</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.services.map((service) => (
                    <li key={service} className="flex gap-3 text-sm">
                      <span className="text-lg">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5567999898959?text=Olá! Tenho interesse no plano ${plan.name}.`}
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Começar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 text-center">
            Como <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">funciona</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Alinhamento', desc: 'Conversamos sobre seu negócio e metas' },
              { num: '2', title: 'Estratégia', desc: 'Monto o plano de tráfego e conteúdo' },
              { num: '3', title: 'Execução', desc: 'Lanço as campanhas e criei conteúdo' },
              { num: '4', title: 'Resultados', desc: 'Acompanhamento com dashboard live' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Pronto para <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">transformar</span> seu marketing?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Agenda uma conversa de 20 minutos comigo. Sem papo de venda, apenas diálogo real sobre seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5567999898959"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              💬 WhatsApp: 67 99989-8959
            </a>
            <a
              href="mailto:paquermkt@gmail.com"
              className="px-8 py-3 border-2 border-gray-300 text-black rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              📧 Email: paquermkt@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2024 Gustavo Paquer. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs text-gray-500">Transformando empreendedores em máquinas de vendas há 25+ anos</p>
        </div>
      </footer>
    </div>
  );
}
