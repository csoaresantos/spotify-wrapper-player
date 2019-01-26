import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

//do call to API
const albums = spotify.search.albums('Incubu');
const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');

//get the elements to append the inner elements
const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums
    .then(data => renderAlbums(data.albums.items, albumList));

album
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));