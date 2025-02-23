import { mostStreamedSongs} from "../../data";

interface SongData {
    song: string;
    artist: string;
    streams: number;
}

  export function getTopArticleData(days: number, topN: number = 5): { song: string, artist: string, streams: number }[] {
  const data = Object.values(mostStreamedSongs).slice(-days)

    const songs = data.map((day) => ({ song: day.song, artist: day.artist, streams: day.streams }));
    const uniqueSongs = songs.reduce((acc: SongData[], song: SongData) => {
      const existingSong = acc.find((s) => s.song === song.song && s.artist === song.artist);
      if (existingSong) {
        existingSong.streams += song.streams;
      } else {
        acc.push(song);
      }
      return acc;
    }, []);
    const sortedSongs = uniqueSongs.sort((a: SongData, b: SongData) => b.streams - a.streams);
    return sortedSongs.slice(0, topN);
  }
