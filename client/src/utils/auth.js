import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    try {
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("id_token");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/Home");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
