import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;
  beforeEach(() => {
    service = new JwtService();
    window.localStorage.removeItem('jwtToken');
  });
  afterEach(() => window.localStorage.removeItem('jwtToken'));
  it('stores and retrieves a token', () => {
    service.saveToken('test-token');
    expect(service.getToken()).toBe('test-token');
  });
  it('replaces an existing token', () => {
    service.saveToken('old-token');
    service.saveToken('new-token');
    expect(service.getToken()).toBe('new-token');
  });
  it('removes the token on logout', () => {
    service.saveToken('test-token');
    service.destroyToken();
    expect(service.getToken()).toBeUndefined();
  });
});
