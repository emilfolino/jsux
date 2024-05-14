# kmom01



## Labbmiljö

Säkerställ att du har Visual Studio Code installerat och uppdaterat, WSL är installerat och uppdaterat, samt att ett urval av webbläsare är installerade och uppdaterade, som minimum Firefox och Chrome.

Installera `node` och `npm` på din dator enligt: [Package Manager](https://nodejs.org/en/download/package-manager)

Installera `http-server` globalt på din dator med kommandot: `npm install -g http-server`.



## Kursrepo

### Gör en fork

Gå till [dbwebb-se/jsux](https://github.com/dbwebb-se/jsux) och gör en fork enligt: [Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository). Avsluta guiden när du har gjort själva forken och innan du gör `git clone`.



### Klona din fork

Gör sedan följande:

1. Gå till din fork och tryck på gröna knappen Code. Välj SSH och kopiera sedan URL'n.

2. Öppna din terminal och utför följande kommandon:

```shell
cd $HOME/dbwebb-kurser
git clone URL
cd jsux
```

Så i mitt fall blir det `git clone git@github.com:efostud/jsux.git`, byt ut mot din URL.



### Koppla upstream

Skriv först ut hur ditt repo är kopplat mot GitHub med hjälp av kommandot `git remote -v`. I mitt fall ser det ut som:

```shell
# stå i dbwebb-kurser/jsux
$ git remote -v
origin	git@github.com:efostud/jsux.git (fetch)
origin	git@github.com:efostud/jsux.git (push)
```

Nu kan du köra kommandot `git remote add` för att lägga till ett "upstream" repo. Vi gör detta för att ni ska kunna hämta uppdateringar som görs i kursmaterial.

```shell
# stå i dbwebb-kurser/jsux
git remote add upstream https://github.com/dbwebb-se/jsux.git
```

Nu bör du ha en liknande utskrift som nedan:

```shell
# stå i dbwebb-kurser/jsux
$ git remote -v
origin	git@github.com:efostud/jsux.git (fetch)
origin	git@github.com:efostud/jsux.git (push)
upstream	https://github.com/dbwebb-se/jsux.git (fetch)
upstream	https://github.com/dbwebb-se/jsux.git (push)
```

Vi kan nu med tre kommandon uppdatera vår fork från vårt upstream repo enligt [Syncing a fork branch from the command line](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-command-line):

```shell
# stå i dbwebb-kurser/jsux
$ git fetch upstream
$ git checkout main
$ git merge upstream/main
```

I mitt fall såg det ut såhär:

```shell
# stå i dbwebb-kurser/jsux
$ git fetch upstream
From https://github.com/dbwebb-se/jsux
 * [new branch]      main       -> upstream/main
$ git checkout main
Already on 'main'
Your branch is up to date with 'origin/main'.
$ git merge upstream/main
Already up to date.
```

## En inlämning

Vi börjar med att skapa en "branch" för kmom01.

```shell
$ git checkout -b kmom01
```

Gör sedan uppgiften [Skapa en personlig webbplats](assignments/personal-webapge-del-1). Se till att göra commits under arbetets gång. Nedan säkerställer vi att alla lokala ändringar även laddas upp till vårt remote repository på GitHub.

```shell
$ git status
$ git add .
$ git commit -m "Added all local changes"
git push --set-upstream origin kmom01
$ git push
```

Gå nu till ditt repo på GitHub och skapa en "Pull Request".
