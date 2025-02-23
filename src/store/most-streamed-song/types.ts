export interface ITopStreamState {
     song: string, 
     artist: string, 
     streams: number 
}

export interface IMostStreamedSongState {
    data: ITopStreamState[]
}

export interface IMostStreamedSongHandler {
    getMostStreamedSongData: (days: number, topN?: number) => void
}

export interface IMostStreamStore extends IMostStreamedSongState, IMostStreamedSongHandler {}  