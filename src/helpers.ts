import { Game } from "./constants/types";

export const getGamesFromNow = (games: Game[]) => {
    const now = new Date();

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= now.valueOf()
    });
}

export const getGamesFromToday = (games: Game[]) => {
    const today = new Date();
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= today.valueOf() && epochGameDate <= endOfToday.valueOf()
    });
}

export const getGamesFromTomorrow = (games: Game[]) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const endOfTomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate() + 2, 23, 59, 59);

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= today.valueOf() && epochGameDate <= endOfTomorrow.valueOf()
    });
}

export const getGamesFromThisWeek = (games: Game[]) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const lastDayOfWeek = new Date();
    const diffToSunday = 7 - dayOfWeek
    lastDayOfWeek.setDate(today.getDate() + diffToSunday);

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= today.valueOf() && epochGameDate <= lastDayOfWeek.valueOf()
    });
}

export const getGamesFromNextWeek = (games: Game[]) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfNextWeek = new Date();
    const diffToSunday = 7 - dayOfWeek
    startOfNextWeek.setDate(today.getDate() + diffToSunday);

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= startOfNextWeek.valueOf()
    });
}

export const getGamesPossiblyOnLive = (games: Game[]) => {
    const today = new Date();
    const oneHourBefore = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() - 2, 0, 0);
    const twoHourAfter = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 2, 0, 0);

    return games.filter(game => {
        const epochGameDate = game.date.valueOf()
        return epochGameDate >= oneHourBefore.valueOf() && epochGameDate <= twoHourAfter.valueOf()
    });
}