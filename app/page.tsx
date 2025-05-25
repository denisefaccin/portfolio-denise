import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
        <Image
          src="/bg-image.jpg"
          alt="Capa do Portfólio - Educação Ambiental"
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
        />
        <div className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-xl z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Portfólio Profissional - Dra. Denise Faccin
          </h1>
          <p className="text-lg md:text-xl">
            Projetos em Educação Ambiental, Hortas Urbanas, Inclusão Social e Sustentabilidade
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projetos em Destaque</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Horta para Idosos – Parque Diamante +Energia
              </h3>
              <p className="text-gray-700 text-base">
                Aulas teóricas e práticas sobre cultivo, compostagem caseira, adubos e inseticidas naturais, PANCs, saúde e nutrição. Atividades com foco na cognição e inclusão social, colheita com familiares, aromaterapia, rodas de conversa, integração com alunos da APAE e viagem de encerramento. Participação ativa dos idosos na criação de composteiras domésticas, doação de mudas e incentivo à agricultura urbana e uso de plantas medicinais. Muitos participantes compartilharam vídeos e fotos das hortas feitas em casa.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Horta APAE – Capivari de Baixo
              </h3>
              <p className="text-gray-700 text-base">
                Projeto em andamento com revitalização da horta da APAE. Envolvimento de alunos no preparo do solo, plantio, compostagem com baldes, reaproveitamento de resíduos, capacitação de professores e cozinhas. Objetivo de geração de renda, aulas de educação ambiental e promoção de saúde e autoestima dos alunos com deficiência.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Oficina de Brinquedos com Materiais Recicláveis
              </h3>
              <p className="text-gray-700 text-base">
                Realizada na Semana Lixo Zero em Capivari de Baixo, com palestras educativas sobre resíduos e sustentabilidade, seguidas de oficinas práticas onde os alunos criaram brinquedos a partir dos resíduos coletados. Incentivo à criatividade, protagonismo e consciência ambiental.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Capacitação de Professores – Caiçara/RS
              </h3>
              <p className="text-gray-700 text-base">
                Capacitação interdisciplinar com foco em atividades práticas ao ar livre, uso de materiais reciclados, trilhas educativas e ensino com hortas escolares. Uniu ciências, matemática, geografia e artes em metodologias lúdicas e acessíveis para todas as disciplinas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Inclusão Digital para Idosos – Porto Alegre
              </h3>
              <p className="text-gray-700 text-base">
                Desenvolvimento de conteúdo e capacitação de agentes de saúde para ensinar idosos a utilizarem smartphones, aplicativos de comunicação, bancos, governo, plataformas de entretenimento, segurança digital e mais. Projeto focado em autonomia e inclusão digital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Hortas Comunitárias – DMAE Porto Alegre
              </h3>
              <p className="text-gray-700 text-base">
                Curso de capacitação com foco em hortas de baixo custo em comunidades vulneráveis. Conteúdos sobre escolha de culturas, manejo de solo, colheita, compartilhamento de produção e geração de renda comunitária. Incentivo à participação ativa e sustentável.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 Dra. Denise Faccin · denisefaccin@gmail.com
      </footer>
    </main>
  );
}
