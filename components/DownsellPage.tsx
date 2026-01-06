import React from 'react';
import { CheckCircle2, ArrowDown, Lock } from 'lucide-react';
import { Button } from './Button';
import { UrgencyBanner } from './UrgencyBanner';
import { GuaranteeBadge } from './GuaranteeBadge';
import { OFFER_DETAILS, FEATURES } from '../constants';

export const DownsellPage: React.FC = () => {
  const { originalPrice, discountedPrice, checkoutUrl, imageUrl } = OFFER_DETAILS;
  const savings = originalPrice - discountedPrice;
  const discountPercentage = Math.round((savings / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-12">
      <UrgencyBanner />

      <main className="container mx-auto px-4 pt-8 md:pt-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-2">
            Última chance - Oferta Única
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Nós entendemos... <br className="hidden md:block" />
            <span className="text-red-600">R$ {originalPrice}</span> pode não ser o momento ideal.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Mas não queremos que você vá embora de mãos vazias e perca essa transformação. Por isso, preparamos algo especial.
          </p>
        </div>

        {/* Offer Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
            -{discountPercentage}% OFF
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src={imageUrl} 
                    alt="Produto em Oferta" 
                    className="relative rounded-lg shadow-lg w-full max-w-[350px] object-cover transform transition duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Offer Details */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Leve tudo agora por uma fração do preço
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-gray-400 text-xl font-medium line-through decoration-red-500 decoration-2">
                      R$ {originalPrice},00
                    </span>
                    <ArrowDown className="text-green-500 animate-bounce" size={24} />
                    <span className="text-5xl font-black text-green-600 tracking-tight">
                      R$ {discountedPrice},00
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Pagamento único. Acesso vitalício.</p>
                </div>

                <div className="space-y-3">
                  {FEATURES.map((feature) => (
                    <div key={feature.id} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button href={checkoutUrl} subtext="Compra 100% Segura e Instantânea">
                    SIM! QUERO O DESCONTO AGORA
                  </Button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-400">
                  <Lock size={12} />
                  <span>Ambiente criptografado de alta segurança</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer of card */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Esta oferta expira assim que você fechar esta página.
            </p>
          </div>
        </div>

        <GuaranteeBadge />

      </main>

      <footer className="mt-16 py-8 text-center text-gray-400 text-sm border-t border-gray-200 bg-white">
        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Pirataria é crime. Invista em conhecimento original.</p>
      </footer>
    </div>
  );
};