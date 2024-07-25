import { Disciplines, Game, Nation } from "./types";

const July27Games: Game[] = [{
    discipline: Disciplines.Judo,
    stage: "Arena Campo de Marte - Tatame 1 / -48kg feminino - Segunda Fase Eliminatória",
    date: new Date(2024, 6, 27, 5, 0, 0),
    against: Nation.Japao,
}, {
    discipline: Disciplines.Judo,
    stage: "Arena Campo de Marte - Tatame 2 / -60kg masculino - Segunda Fase Eliminatória",
    date: new Date(2024, 6, 27, 5, 0, 0),
    against: Nation.Japao,
}, {
    discipline: Disciplines.TiroEsportivo,
    stage: "Pistola de Ar 10m Masculino - Classificação",
    date: new Date(2024, 6, 27, 5, 30, 0),
    player: "Philipe CHATEAUBRIAN"
}, {
    discipline: Disciplines.Tenis,
    stage: "Roland-Garros - Quadra Simonne-Mathieu / 2nd on Court Simonne-Mathieu",
    date: new Date(2024, 6, 27, 7, 0, 0),
    player: "Philipe CHATEAUBRIAN",
    against: Nation.França,
    againstWho: "Varvara GRACHEVA",
}, {
    discipline: Disciplines.Tenis,
    stage: "Roland-Garros Quadra 8 / Feminino - Simples - Primeira Rodada",
    date: new Date(2024, 6, 27, 7, 0, 0),
    player: "Laura PIGOSSI",
    against: Nation.França,
    againstWho: "Dayana YASTREMSKA",
}, {
    discipline: Disciplines.Tenis,
    stage: "Roland-Garros Quadra 12 / Feminino - Duplas - Primeira Rodada",
    date: new Date(2024, 6, 27, 7, 0, 0),
    player: "HADDAD MAIA/STEFANI",
    against: Nation.China,
    againstWho: "YUAN/ZHANG",
}, {
    discipline: Disciplines.Esgrima,
    stage: "Espada individual feminina, segunda fase",
    date: new Date(2024, 6, 27, 7, 0, 0),
    player: "Nathalie MOELLHAUSEN",
    against: Nation.Canada,
    againstWho: "Ruien XIAO",
}, {
    discipline: Disciplines.Volei,
    stage: "Masculino - Rodada Preliminar - Grupo B",
    date: new Date(2024, 6, 27, 8, 0, 0),
    against: Nation.Italia,
}, {
    discipline: Disciplines.Basquete,
    stage: "Masculino - Fase de Grupos - Grupo B",
    date: new Date(2024, 6, 27, 8, 30, 0),
    against: Nation.França,
}, {
    discipline: Disciplines.Badminton,
    stage: "Simples Feminino - Fase de Grupos - Grupo D",
    date: new Date(2024, 6, 27, 9, 0, 0),
    against: Nation.Tailandia,
    againstWho: "Supanida KATETHONG",
    player: "Juliana VIANA VIERA"
}, {
    discipline: Disciplines.CanoagemSlalom,
    stage: "Canoa Individual Masculino Eliminatórias - Descida 1",
    date: new Date(2024, 6, 27, 10, 0, 0),
    player: "Pedro GONCALVES"
}, {
    discipline: Disciplines.CanoagemSlalom,
    stage: "Canoa Individual Masculino Eliminatórias - Descida 2",
    date: new Date(2024, 6, 27, 12, 10, 0),
    player: "Pedro GONCALVES"
}, {
    discipline: Disciplines.CanoagemSlalom,
    stage: "Caiaque Individual Feminino Eliminatórias - Descida 1",
    date: new Date(2024, 6, 27, 11, 0, 0),
    player: "Ana SATILA"
}, {
    discipline: Disciplines.CanoagemSlalom,
    stage: "Caiaque Individual Feminino Eliminatórias - Descida 2",
    date: new Date(2024, 6, 27, 13, 10, 0),
    player: "Ana SATILA"
}, {
    discipline: Disciplines.TenisDeMesa,
    stage: "Duplas mistas - Oitavas de final",
    date: new Date(2024, 6, 27, 12, 15, 0),
    player: "ISHIY/TAKAHASHI",
    against: Nation.Espanha,
    againstWho: "ROBLES/XIAO"
}, {
    discipline: Disciplines.VoleiDePraia,
    stage: "Masculino - Fase preliminar - Grupo D",
    date: new Date(2024, 6, 27, 14, 0, 0),
    player: "GEORGE/ANDRE",
    against: Nation.Marrocos,
    againstWho: "ABICHA/ELGRAOUI"
}]

export const games: Game[] = [{
    discipline: Disciplines.TiroAoArco,
    stage: "Individual Feminino - Fase de Classificação",
    player: "Ana Luiza SLIACHTICAS CAETANO",
    date: new Date(2024, 6, 25, 4, 30, 0),
}, {
    discipline: Disciplines.Handebol,
    stage: "Feminino - Rodada Preliminar - Grupo B",
    against: Nation.Espanha,
    date: new Date(2024, 6, 25, 9, 0, 0),
}, {
    discipline: Disciplines.TiroAoArco,
    stage: "Individual Masculino - Fase de Classificação",
    player: "Marcus D'ALMEIDA",
    date: new Date(2024, 6, 25, 9, 15, 0),
}, {
    discipline: Disciplines.Futebol,
    stage: "Feminino - Grupo C (#6)",
    against: Nation.Nigeria,
    date: new Date(2024, 6, 25, 14, 0, 0),
}, {
    discipline: Disciplines.TiroEsportivo,
    stage: "Pistola de Ar 10m Masculino - Classificação",
    player: "Philipe CHATEAUBRIAN",
    date: new Date(2024, 6, 27, 5, 0, 0),
}, {
    discipline: Disciplines.Volei,
    stage: "Masculino - Rodada Preliminar - Grupo B",
    against: Nation.Italia,
    date: new Date(2024, 6, 27, 8, 0, 0),
}, {
    discipline: Disciplines.Badminton,
    stage: "Simples Feminino - Fase de Grupos - Grupo D",
    against: Nation.Tailandia,
    date: new Date(2024, 6, 27, 9, 50, 0),
}, {
    discipline: Disciplines.Basquete,
    stage: "Simples Feminino - Fase de Grupos - Grupo D",
    against: Nation.França,
    date: new Date(2024, 6, 27, 12, 15, 0),
}, {
    discipline: Disciplines.TenisDeMesa,
    stage: "Duplas mistas - Oitavas de final",
    against: Nation.Espanha,
    date: new Date(2024, 6, 27, 12, 15, 0),
}, {
    discipline: Disciplines.VoleiDePraia,
    stage: "Masculino - Fase preliminar - Grupo D",
    against: Nation.Marrocos,
    date: new Date(2024, 6, 27, 14, 1, 0),
},
...July27Games
]