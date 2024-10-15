

export class GithubUsers {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({ login, name, public_repos, followers}) => ({ login, name, public_repos, followers}))
    }  
    
    static searchSuggestions(query) {
        const endpoint = `https://api.github.com/search/users?q=${query}`;

        return fetch(endpoint)
            .then(response => response.json())
            .then(data => data.items); 
    }
}

