export interface IGameData {
  imageFormat: string;
  imgBaseUrl: string;
  imgSize: number;
  cardCover: string;
}

export type IGameVariant = 'rick & morty' | 'pokemon';

export const GAME_DATA: Record<IGameVariant, IGameData> = {
  'rick & morty': {
    imageFormat: 'jpeg',
    imgBaseUrl: 'https://rickandmortyapi.com/api/character/avatar',
    imgSize: 300,
    cardCover: 'https://rickandmortyapi.com/api/character/avatar/249.jpeg',
  },
  pokemon: {
    imageFormat: 'png',
    imgBaseUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork',
    imgSize: 450,
    cardCover: 'https://i.imgur.com/UYQhEzt.jpg',
  },
};
