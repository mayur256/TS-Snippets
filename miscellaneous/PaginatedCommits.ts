/**
 * Fetch commits from github in a paginated fashion
 * this program will only be executed in browser env
 */

// Commit generator
async function* fetchCommits(repo: string): any {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, { headers: { 'User-Agent': 'Our script' } });
        const body = await response.json();

        let nextPage: any = response?.headers?.get('Link')?.match(/<(.*?)>; rel="next"/);
        nextPage = nextPage?.[1];

        url = nextPage;

        for (let commit of body) {
            yield commit;
        }

    }
}

// fetches commits from ts-snippets
(async () => {
    let count = 0;

    for await (const commit of fetchCommits('ts-snippets')) {
        console.log(commit.author.login);

        if (++count == 100) {
            break;
        }
    }

})();