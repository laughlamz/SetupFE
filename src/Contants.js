export const API = {
    LIST_REPO: (username) => `https://api.github.com/users/${username}/repos?per_page=20`,
    GET_README: (username, repoName) => `https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`
}