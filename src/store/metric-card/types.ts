export interface IRevenue {
    advertisements: number,
    subscriptions: number
}

export interface ITopArtist {
    artist: string,
    streams: number
}

export interface IMetricCard {
    totalUser: number,
    activeUser: number,
    totalStream: number,
    revenue:IRevenue,
    topArtist: ITopArtist
}

export interface IMetricCardHandler {
    getMetricCardData: () => void; 
}

export interface IMetricCardStore extends IMetricCard, IMetricCardHandler {}