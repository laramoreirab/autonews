import Image from "next/image";
import styles from "./page.module.css";
import Cards from "@/components/Cards";

export default function Home() {
  const listaNoticias = [
    {
      id: 0,
      titulo: "Alerta de Manutenção Emergencial: Sistema SAP e Logística",
      descricao: "Informamos que todos os módulos do sistema SAP (Produção, Logística e RH) passarão por uma manutenção técnica corretiva hoje, das 14h às 16h. A interrupção é necessária para garantir a estabilidade do banco de dados após a última atualização. Solicitamos que as requisições de materiais e lançamentos de horas sejam antecipados para evitar gargalos operacionais.",
      tipo: "vermelha",
      data: "12/02/2026",
      imagem: "/manutencao_log.png",
    },
    {
      id: 1,
      titulo: "Planta de Montagem Alcança Recorde Histórico de Produtividade",
      descricao: "Celebramos hoje a marca histórica de 500 unidades produzidas em um único turno no setor do SUV-X. Este resultado é fruto da implementação das novas células robotizadas e, principalmente, do empenho de cada colaborador da linha de montagem. O Diretor de Operações parabeniza as equipes pelo foco em qualidade e eficiência, mantendo o índice de falhas próximo a zero.",
      tipo: "amarela",
      data: "12/02/2026",
      imagem: "/montagem.png",
    },
    {
      id: 2,
      titulo: "Campanha Anual de Vacinação Contra a Gripe: Datas e Locais",
      descricao: "A saúde do nosso time é prioridade. A partir da próxima segunda-feira, iniciaremos a campanha de vacinação contra a Influenza para todos os colaboradores diretos e prestadores de serviço. O atendimento será por ordem de chegada no Ambulatório Central e nos postos móveis espalhados pelas alas industriais. Não esqueça de apresentar seu crachá e a carteira de vacinação.",
      tipo: "azul",
      data: "11/02/2026",
      imagem: "/vacinacao.png",
    },
    {
      id: 3,
      titulo: "URGENTE: Interdição Total do Acesso Norte por Reparos na Via",
      descricao: "Devido ao rompimento de uma tubulação de água nas primeiras horas desta manhã, o Acesso Norte (Portão 3) está totalmente interditado para veículos e pedestres. Equipes de engenharia já estão no local para os reparos necessários. Orientamos que todos utilizem o Acesso Sul e o Estacionamento Auxiliar até que a via seja liberada. Previsão de normalização em 24 horas.",
      tipo: "vermelha",
      data: "11/02/2026",
      imagem: "/via_interditada.png",
    },
    {
      id: 4,
      titulo: "CEO Global Visita a Unidade para Anúncio de Novos Investimentos",
      descricao: "Na próxima quarta-feira, receberemos a comitiva executiva global para uma visita técnica às nossas instalações. Na ocasião, será realizada uma 'Town Hall' no auditório principal, onde serão discutidos os novos investimentos para a linha de veículos elétricos na América Latina. O evento será transmitido ao vivo para quem estiver em regime de home office ou nas demais unidades.",
      tipo: "amarela",
      data: "10/02/2026",
      imagem: "/visita_ceo.png",
    },
    {
      id: 5,
      titulo: "Programa de Ideias 2026: Transforme sua Sugestão em Premiação",
      descricao: "Está aberta a temporada de inscrições para o Programa de Inovação Interna. Se você visualiza uma forma de reduzir desperdícios, otimizar um processo de montagem ou melhorar a ergonomia no posto de trabalho, queremos te ouvir! As melhores ideias implementadas receberão bônus em dinheiro e reconhecimento no nosso Mural de Talentos. Participe e ajude a construir o futuro da nossa fábrica.",
      tipo: "azul",
      data: "09/02/2026",
      imagem: "/programa_ideias.png",
    },
    {
      id: 6,
      titulo: "Treinamento Obrigatório de Reciclagem NR-12: Prazo Final",
      descricao: "Atenção, operadores das Alas B e C! O prazo para a conclusão do treinamento obrigatório de segurança em máquinas e equipamentos (NR-12) encerra-se nesta sexta-feira. A conformidade com as normas de segurança é indispensável para a continuidade das operações. Acesse a plataforma de e-learning ou procure seu supervisor para agendar a sessão prática presencial.",
      tipo: "amarela",
      data: "12/02/2026",
      imagem: "/treinamento.png",
    },
    {
      id: 7,
      titulo: "Benefício Exclusivo: Pré-venda do Novo Sedã Híbrido com Desconto",
      descricao: "Como forma de agradecer o compromisso da nossa força de trabalho, liberamos uma condição especial de pré-venda para o novo modelo Sedã Híbrido Flex. Colaboradores contam com descontos de até 15% sobre a tabela, além de taxas de financiamento subsidiadas pelo banco da montadora. As unidades são limitadas para esta ação interna. Visite o showroom no Bloco A para o test-drive.",
      tipo: "amarela",
      data: "08/02/2026",
      imagem: "/sedan.png",
    },
    {
      id: 8,
      titulo: "Cardápio Especial e Comemoração de Metas no Restaurante",
      descricao: "Para celebrar os excelentes resultados de segurança e produtividade do último mês, o nosso restaurante preparou um Festival de Massas e Grelhados para esta quarta-feira. Além do cardápio diferenciado, teremos música ao vivo no horário de almoço e a presença da diretoria para um breve agradecimento. Venha celebrar conosco esse esforço coletivo!",
      tipo: "azul",
      data: "11/02/2026",
      imagem: "/cardapio_especial.png",
    },
    {
      id: 9,
      titulo: "Workshop: Tendências de IA e Automação na Indústria Automotiva",
      descricao: "Estão abertas as inscrições para o workshop técnico sobre o impacto da Inteligência Artificial na Manufatura 4.0. Especialistas do centro de P&D compartilharão como algoritmos de machine learning já estão sendo usados para prever falhas em máquinas e otimizar o consumo de energia. O evento é aberto a todos os setores que desejam entender as novas tecnologias do mercado.",
      tipo: "azul",
      data: "07/02/2026",
      imagem: "/worshop.png",
    },
    {
      id: 10,
      titulo: "Exposição 'Nossa História sobre Rodas': Mostra de Modelos Icônicos no Hall Central",
      descricao: "A partir da próxima segunda-feira, o Hall de Entrada do Bloco Administrativo receberá uma exposição exclusiva voltada aos entusiastas da nossa marca. A mostra 'Nossa História sobre Rodas' contará com a presença de três modelos restaurados que marcaram época nas décadas de 80 e 90, além de um protótipo conceitual que serviu de base para a nossa atual linha de SUVs elétricos. É uma oportunidade única para os novos colaboradores conhecerem o DNA da companhia e para os veteranos relembrarem os projetos em que trabalharam no passado. A exposição é aberta a todos durante os horários de intervalo e contará com totens interativos detalhando as especificações técnicas e as curiosidades de cada veículo.",
      tipo: "azul",
      data: "12/02/2026",
      imagem: "/exposicao.png",
    }
  ]
  return (
    <>
      {
        listaNoticias.filter(noticias => noticias.tipo === "vermelha")
          .map((noticias) => {
            return (
              <Cards
                key={noticias.id}
                noticias={noticias}
              />)
          })
      }
      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
          {
            listaNoticias.filter(noticias => noticias.tipo === "amarela")
              .map((noticias) => {
                return (
                  <Cards
                    key={noticias.id}
                    noticias={noticias}
                  />)
              })
          }
        </div>
      </div>
      <h1 className="text-center pb-5 pt-5">Notícias do mês...</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gap-4 d-flex justify-content-center">
      {
        listaNoticias.filter(noticias => noticias.tipo === "azul")
          .map((noticias) => {
            return (
              <Cards
                key={noticias.id}
                noticias={noticias}
              />)
          })
      }
      </div>
      </div>
    </>
  );
}
