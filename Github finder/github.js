class Gitub {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
// key for github if using more than 100 requests per hour
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile
      repos
    }
  }
}
