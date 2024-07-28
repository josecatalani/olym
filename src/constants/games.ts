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

const July28Games: Game[] = [
    {
        discipline: Disciplines.Handebol,
        stage: "Feminino - Rodada Preliminar - Grupo B",
        date: new Date(2024, 6, 28, 4, 0, 0),
        against: Nation.Hungria
    },
    {
        discipline: Disciplines.Tiro,
        stage: "10m Air Rifle Feminino Qualificação",
        date: new Date(2024, 6, 28, 4, 15, 0),
        player: "Geovana MEYER"
    },
    {
        discipline: Disciplines.Esgrima,
        stage: "Florete Individual Feminino",
        date: new Date(2024, 6, 28, 4, 30, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.TenisDeMesa,
        stage: "Simples Feminino",
        date: new Date(2024, 6, 28, 5, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Judo,
        stage: "Champ-de-Mars Arena Mat 2",
        date: new Date(2024, 6, 28, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Hipismo,
        stage: "Eventing Team Cross Country",
        date: new Date(2024, 6, 28, 5, 30, 0),
        player: "Equipe do Brasil"
    },
    {
        discipline: Disciplines.Hipismo,
        stage: "Eventing Individual Cross Country",
        date: new Date(2024, 6, 28, 5, 30, 0),
        player: "Rafael MAMPRIN LOSANO, Carlos PARRO, Marcio CARVALHO JORGE"
    },
    {
        discipline: Disciplines.VoleiDePraia,
        stage: "Fase Preliminar - Pool E",
        date: new Date(2024, 6, 28, 6, 0, 0),
        player: "CAROL/BARBARA",
        against: Nation.Japao
    },
    {
        discipline: Disciplines.Skate,
        stage: "Preliminares Feminino",
        date: new Date(2024, 6, 28, 7, 0, 0),
        player: "Rayssa LEAL, Pamela ROSA, Gabi MAZETTO"
    },
    {
        discipline: Disciplines.Tenis,
        stage: "Roland-Garros - Quadra 9",
        date: new Date(2024, 6, 28, 7, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Tenis,
        stage: "Roland-Garros - Quadra 7",
        date: new Date(2024, 6, 28, 7, 0, 0),
        player: "Beatriz HADDAD MAIA",
        against: Nation.França
    },
    {
        discipline: Disciplines.Tenis,
        stage: "Roland-Garros - Quadra 11",
        date: new Date(2024, 6, 28, 7, 0, 0),
        player: "Laura PIGOSSI",
        against: Nation.Ucrania
    },
    {
        discipline: Disciplines.Vela,
        stage: "Women's Skiff",
        date: new Date(2024, 6, 28, 7, 35, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Men's Skiff",
        date: new Date(2024, 6, 28, 8, 15, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Ciclismo,
        stage: "Mountain Bike Feminino Cross-country",
        date: new Date(2024, 6, 28, 9, 10, 0),
        player: "Raiza GOUZAO HENRIQUE"
    },
    {
        discipline: Disciplines.CanoagemSlalom,
        stage: "Semifinal Individual Feminino",
        date: new Date(2024, 6, 28, 10, 30, 0),
        player: "Ana SATILA"
    },
    {
        discipline: Disciplines.VoleiDePraia,
        stage: "Fase Preliminar - Pool E",
        date: new Date(2024, 6, 28, 15, 0, 0),
        player: "EVANDRO/ARTHUR",
        against: Nation.Austria
    },
    {
        discipline: Disciplines.RugbySevens,
        stage: "Pool C Feminino",
        date: new Date(2024, 6, 28, 15, 0, 0),
        against: Nation.EUA
    },
    {
        discipline: Disciplines.TenisDeMesa,
        stage: "Simples Masculino e Feminino",
        date: new Date(2024, 6, 28, 15, 0, 0),
        player: "Competidores a definir"
    },
    {
        discipline: Disciplines.Surfe,
        stage: "Rodada 2 Feminino",
        date: new Date(2024, 6, 28, 14, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Surfe,
        stage: "Rodada 2 Masculino",
        date: new Date(2024, 6, 28, 18, 48, 0),
        player: "Competidor a definir"
    }
];

const July29Games: Game[] = [
    {
        discipline: Disciplines.Judo,
        stage: "Champ-de-Mars Arena Mat 2",
        date: new Date(2024, 6, 29, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Judo,
        stage: "Champ-de-Mars Arena Mat 1",
        date: new Date(2024, 6, 29, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Skate,
        stage: "Preliminares Masculino",
        date: new Date(2024, 6, 29, 7, 0, 0),
        player: "Kelvin HOEFLER, Giovanni VIANNA, Felipe GUSTAVO"
    },
    {
        discipline: Disciplines.TenisDeMesa,
        stage: "Simples Masculino",
        date: new Date(2024, 6, 29, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Men's Skiff",
        date: new Date(2024, 6, 29, 7, 5, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Women's Skiff",
        date: new Date(2024, 6, 29, 7, 15, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Men's Windsurfing",
        date: new Date(2024, 6, 29, 7, 23, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Volei,
        stage: "Fase Preliminar - Pool B",
        date: new Date(2024, 6, 29, 8, 0, 0),
        against: Nation.Kenia
    },
    {
        discipline: Disciplines.Esgrima,
        stage: "Florete Individual Masculino - Tabela de 32",
        date: new Date(2024, 6, 29, 7, 5, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Ciclismo,
        stage: "Mountain Bike Masculino Cross-country",
        date: new Date(2024, 6, 29, 9, 10, 0),
        player: "Ulan BASTOS GALINSKI"
    },
    {
        discipline: Disciplines.Badminton,
        stage: "Simples Feminino",
        date: new Date(2024, 6, 29, 9, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.RugbySevens,
        stage: "Pool C Feminino",
        date: new Date(2024, 6, 29, 10, 0, 0),
        against: Nation.Japao
    },
    {
        discipline: Disciplines.Boxe,
        stage: "Preliminares Feminino - 60kg - Oitavas de Final",
        date: new Date(2024, 6, 29, 15, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Boxe,
        stage: "Preliminares Masculino - +92kg - Oitavas de Final",
        date: new Date(2024, 6, 29, 16, 20, 0),
        player: "Competidor a definir"
    }
];

const July30Games: Game[] = [
    {
        discipline: Disciplines.Triatlo,
        stage: "Individual Masculino",
        date: new Date(2024, 6, 30, 3, 0, 0),
        player: "Miguel HIDALGO, Manoel MESSIAS"
    },
    {
        discipline: Disciplines.Judo,
        stage: "Champ-de-Mars Arena Mat 1",
        date: new Date(2024, 6, 30, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Judo,
        stage: "Champ-de-Mars Arena Mat 2",
        date: new Date(2024, 6, 30, 5, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Boxe,
        stage: "Preliminares Masculino - 51kg - Oitavas de Final",
        date: new Date(2024, 6, 30, 6, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.VoleiDePraia,
        stage: "Fase Preliminar Masculino - Pool D",
        date: new Date(2024, 6, 30, 7, 0, 0),
        player: "GEORGE/ANDRE",
        against: Nation.Cuba
    },
    {
        discipline: Disciplines.Arco,
        stage: "Individual Feminino",
        date: new Date(2024, 6, 30, 7, 26, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Arco,
        stage: "Individual Masculino",
        date: new Date(2024, 6, 30, 7, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Men's Windsurfing",
        date: new Date(2024, 6, 30, 9, 17, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Badminton,
        stage: "Simples Masculino",
        date: new Date(2024, 6, 30, 9, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.CanoagemSlalom,
        stage: "Individual Feminino - 1ª e 2ª Descidas",
        date: new Date(2024, 6, 30, 10, 0, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.Ciclismo,
        stage: "BMX Freestyle Masculino - Qualificação",
        date: new Date(2024, 6, 30, 10, 11, 0),
        player: "Gustavo BATISTA de OLIVEIRA"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Women's Skiff",
        date: new Date(2024, 6, 30, 10, 45, 0),
        player: "Competidora a definir"
    },
    {
        discipline: Disciplines.VoleiDePraia,
        stage: "Fase Preliminar Feminino - Pool E",
        date: new Date(2024, 6, 30, 11, 0, 0),
        player: "CAROL/BARBARA",
        against: Nation.Lituania
    },
    {
        discipline: Disciplines.CanoagemSlalom,
        stage: "Individual Masculino - 1ª e 2ª Descidas",
        date: new Date(2024, 6, 30, 11, 0, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Vela,
        stage: "Men's Skiff",
        date: new Date(2024, 6, 30, 11, 35, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Handebol,
        stage: "Fase Preliminar Feminino - Grupo B",
        date: new Date(2024, 6, 30, 14, 0, 0),
        against: Nation.França
    },
    {
        discipline: Disciplines.Boxe,
        stage: "Preliminares Masculino - 80kg - Oitavas de Final",
        date: new Date(2024, 6, 30, 15, 32, 0),
        player: "Competidor a definir"
    },
    {
        discipline: Disciplines.Basquete,
        stage: "Fase de Grupos Masculino - Grupo B",
        date: new Date(2024, 6, 30, 16, 0, 0),
        against: Nation.Alemanha
    },
    {
        discipline: Disciplines.VoleiDePraia,
        stage: "Fase Preliminar Feminino - Pool A",
        date: new Date(2024, 6, 30, 16, 0, 0),
        player: "ANA PATRICIA/DUDA",
        against: Nation.Espanha
    },
    {
        discipline: Disciplines.Boxe,
        stage: "Preliminares Feminino - 54kg - Oitavas de Final",
        date: new Date(2024, 6, 30, 16, 36, 0),
        player: "Competidora a definir"
    }
];


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
},
...July27Games,
...July28Games,
...July29Games,
...July30Games
]