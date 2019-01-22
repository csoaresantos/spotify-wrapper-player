import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
    it('should be an object', () => {
        expect(spotify).to.be.an.object;
    });

    it('should exist a serach methods', () => {
        expect(spotify.search).to.exist;
    });

    it('shoudl exist albums method', () => {
        expect(spotify.album).to.exist;
    });
});