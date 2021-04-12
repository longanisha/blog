---
title: How The VuePress Project Is Deployed to The GitHub Page
date: 2020-05-26
tags:
 - Learning Notes
categories:
 - Learning Notes
permalink: /20200526
---

## Introduction to Procedures

### 1.Configure the deploy.Sh
Create a new deploy.sh file in the root directory
```sh
#!/usr/bin/env sh

# Make sure the script throws any errors encountered
set -e

# Generate static files
npm run build

# Go to the generated folder
cd docs/.vuepress/dist

# If it is published to a custom domain name
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# If you publish to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# If you publish to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/longanisha master:gh-pages

cd -
```

When the script is finished, it will push its code to its repository and generate a GH-Pages branch. This branch will build the master branch. Click on GitHub Settings and scroll down to see it

<img :src="$withBase('/assets/200526/1.png')" alt="">

You will then have an address for your project's website mounted on the GitHub page server and will be able to access your project online



### 2.Automate project deployment using travis-ci.com

Using the website https://travis-ci.com/, you can automatically associate your own remote projects, then automatically build and automatically deploy them to the server, without having to execute push and deploy them yourself

Once you've logged in with GitHub, select the repo on your project

<img :src="$withBase('/assets/200526/2.png')" alt="">

Click in, and on the right, there's a setting

<img :src="$withBase('/assets/200526/3.png')" alt="">

Then fill in the token and create a new one on your GitHub

<img :src="$withBase('/assets/200526/4.png')" alt="">

GitHub generates tokens and correlates them

<img :src="$withBase('/assets/200526/5.png')" alt="">

Once you have everything set up, create a new.travis.yml file on your project. This file will be identified by Travis and will trigger the command inside

```yml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn build # npm run docs:build
  - yarn cname
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 Generated on GitHub to allow Travis to push code to your repository. Set it to Secure Variable on the Travis Project Settings page

  keep_history: true
  on:
    branch: master
```

Create a new CNAME.sh

```sh
# cname.sh

#!/usr/bin/env sh

# Make sure the script throws any errors encountered
set -e
#echo 'Your website domain name 'can't be written blank
echo 'https://longanisha.github.io/au.github.io/' > docs/.vuepress/dist/CNAME
```

Finally, I wrote my own git auto-push script so that I didn't have to add a commit/ push every time

```sh
#!/usr/bin/env sh

# Make sure the script throws any errors encountered
set -e

# If it is published to a custom domain name
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push 

cd -
```
Then in pack.json, use

```json
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "bash deploy.sh",
    "cname": "bash cname.sh",
    "travis": "bash deployGit.sh" // Automated deployment commands
  },
```

Done!