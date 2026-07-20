export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">
            Gustavo <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Paquer</span>
          </div>
          <a
            href="https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura."
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Agendar Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-black leading-tight mb-6">
              Tráfego pago que <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">realmente vende</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Há 25+ anos transformo empreendedores em máquinas de vendas. Agora, por um preço acessível, você tem acesso a tráfego pago, conteúdo e estratégia — tudo em uma assinatura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5567999898959?text=Olá! Gostaria de saber mais sobre os planos de assinatura."
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Agendar Reunião
              </a>
              <a
                href="#planos"
                className="px-8 py-3 border border-gray-300 text-black rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                Ver Planos
              </a>
            </div>
          </div>
          <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500"></div>
              <p className="text-gray-600">Imagem: Sistema de Assinatura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-gray-400">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-400">Empresas Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100k+</div>
              <p className="text-gray-400">Gerenciados em Campanhas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6x</div>
              <p className="text-gray-400">ROI Médio Comprovado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">
          Por que o empreendedor <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">continua travado</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-xl font-semibold text-black mb-3">Agência Tradicional = Caro</h3>
            <p className="text-gray-600">R$ 600 - 2.000/mês só de gestão, sem contar verba de mídia.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-xl font-semibold text-black mb-3">Freelancer Solto = Fragmentado</h3>
            <p className="text-gray-600">Um cuida de tráfego, outro de conteúdo, ninguém fala com ninguém.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-xl font-semibold text-black mb-3">Falta de Verba = Impossibilidade</h3>
            <p className="text-gray-600">Empreendedor não tem cash pra pagar gestor E investir em mídia.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">
          Escolha seu <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">ponto de partida</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Start', price: '197', services: ['Post no Instagram', 'Criação de conteúdo', 'Tráfego pago', 'Dashboard'] },
            { name: 'Essencial', price: '397', services: ['Tudo do Start', 'Estratégia digital', 'Edição de vídeo', 'Meta + Google'] },
            { name: 'Performance', price: '597', services: ['Tudo do Essencial', 'Dashboard com relatório', 'Prioridade média'], highlight: true },
            { name: 'Full', price: '1.000', services: ['Tudo do Performance', 'Gravação de vídeo', 'Site/Landing', 'Prioridade máxima'] },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl ${
                plan.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white border-2 border-blue-600'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                  MELHOR CUSTO/BENEFÍCIO
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                <span className="ml-2">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.services.map((service) => (
                  <li key={service} className="flex gap-3 text-sm">
                    <span className="text-lg">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5567999898959?text=Olá! Tenho interesse no plano ${plan.name}.`}
                className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg'
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">
          Pronto para deixar <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">o tráfego pago trabalhar</span> pro seu negócio?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Marca uma reunião de 20 minutos. Não é venda forçada — é conversa real pra entender seu cenário.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://wa.me/5567999898959"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
          >
            WhatsApp: 67 99989-8959
          </a>
          <a
            href="mailto:paquermkt@gmail.com"
            className="px-8 py-3 border border-gray-300 text-black rounded-xl font-medium hover:bg-gray-50 transition-all"
          >
            Email: paquermkt@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 Gustavo Paquer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
