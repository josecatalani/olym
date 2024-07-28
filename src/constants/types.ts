export enum Disciplines {
    TiroAoArco = "Tiro ao Arco",
    Handebol = "Handebol",
    Futebol = "Futebol",
    TiroEsportivo = "Tiro Esportivo",
    Volei = "Vôlei",
    Badminton = "Badminton",
    Basquete = "Basquete",
    TenisDeMesa = "Tênis de Mesa",
    VoleiDePraia = "Vôlei de Praia",
    Judo = "Judô",
    Tenis = "Tênis",
    Esgrima = "Esgrima",
    CanoagemSlalom = "Canoagem Slalom",
    Tiro = "Tiro",
    Skate = "Skate",
    Triatlo = "Triatlo",
    Hipismo = "Hipismo",
    Ciclismo = "Ciclismo",
    RugbySevens = "Rugby Sevens",
    Surfe = "Surfe",
    Arco = "Arco",
    Vela = "Vela",
    Boxe = "Boxe"
}

export enum Nation {
    Espanha = "Espanha",
    Nigeria = "Nigeria",
    Italia = "Italia",
    Tailandia = "Tailandia",
    França = "França",
    Marrocos = "Marrocos",
    Japao = "Japão",
    Ucrania = "Ucrânia",
    China = "China",
    Canada = "Canada",
    Hungria = "Hungria",
    EUA = "EUA",
    Austria = "Áustria",
    Alemanha = "Alemanha",
    Lituania = "Lituânia",
    Cuba = "Cuba",
    Kenya = "Kenya"
}

export type Game = {
    id?: string;
    player?: string;
    discipline: Disciplines;
    stage?: string;
    against?: Nation,
    againstWho?: string,
    date: Date;
}

export enum Filters {
    "Hoje" = "hoje",
    "Amanhã" = "amanha",
    "Esta Semana" = "esta-semana",
    "Próxima Semana" = "proxima-semana",
}