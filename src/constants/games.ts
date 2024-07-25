import { Disciplines, Game, Nation } from "./types";

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
    date: new Date(2024, 6, 27, 14, 0, 0),
}]