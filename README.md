
<img src="https://img.stackshare.io/service/4055/gauge_icon_for_stackshare.png" align="right" width="40" height = "40">
<img src="https://taiko.dev/taiko_logo.11fb147d.svg" align="right" width="40" height = "40">

<h3 align="center">TODO ASSIGNMENT USER ACCEPTANCE</h3>


#### Project information and purpose

This project is a user acceptance test for todo assignment project which available <a href="https://gitlab.com/todo32/frontend">here</a>.

Technologies used in project are <a href="https://gauge.org/">gauge</a> and <a href="https://taiko.dev/">taiko</a>.

Gauge provides to run specific scenarios to test expectations of user on todo application. As an example, adding a new task to todo list. The scenario will be like;

```scenario
  1. Go to the todo app web page.
  2. Click to task input area.
  3. Type the task you want to do.
  4. Click to save button.
  5. You should see the task you add in todo list.
```
Where the taiko comes in is, implementing this scenario steps as functions individually to execute needed commands for running the scenario steps. For the scenario below and the step 'Go to the todo app web page', the taiko step will be like;
```javascript
  const { openBrowser, goto } = require('taiko');

  beforeSuite( async () => {
    await openBrowser();
  });

  afterSuite( async() => {
    await closeBrowser();
  });

  step('Go to the todo app web page', async () => {
    await goto('https://example-todo-app/');
  });

```
The code above will open the browser first, then the app page we want to test.

#### Installing And Running The Project Directly
- Installing the project
```bash
  git clone <project_git_adress>
  cd <project_dir>
```
- Running the project normally
```bash
  npm install
  npm run test
```
- Running the project with docker
```bash
  docker run -v ${pwd}:/usr/src/app:rw -e \
   TAIKO_SKIP_CHROMIUM_DOWNLOAD=true -e TAIKO_BROWSER_PATH=/usr/bin/chromium- \
    browser -e TAIKO_BROWSER_ARGS=--no-sandbox,--start-maximized -e \
     headless_chrome=true  --entrypoint "" --user root \
     zenika/alpine-chrome:with-node \
      /bin/sh -c "npm install; npm test"
```

#### CI-CD Pipeline Importance

The CI-CD pipeline of the project is in ''./.cd/gitlab-ci.yml'.

The importance of pipeline is, getting triggered by the **todo-frontend** project
pipeline.

After the 'deploy to test environment' stage of **todo-frontend** project, this projects pipeline triggered and user acceptance runs for **todo-frontend** project.

#### Reachable Project Parts
  Todo assignment project consist of 5 different projects including this project. You can reach;
  - Todo project frontend repository <a href="https://gitlab.com/todo32/frontend"> here</a>,
  - Todo project backend repository <a href="https://gitlab.com/todo32/backend"> here</a>,
  - Todo project helm repository <a href="https://gitlab.com/todo32/helm"> here</a>,
  - Todo project deployment artifacts repositry <a href="https://gitlab.com/todo32/deployment-artifacts"> here </a>.

#### Running Project Environments

The all parts of project getting deployed into to environments; test and production environments. The project is live and available in;
- Test environment <a href="http://34.116.156.27:8090/">here</a>,
- Production environment <a href="http://34.116.223.97:8090/">here</a>.


#### Documentations And References

- Gauge official <a href="https://docs.gauge.org/?os=macos&language=javascript&ide=vscode">docs</a> for js,
- Taiko official <a href="https://docs.taiko.dev/">docs</a>,
- An educational video from Scott Davis <a href="https://www.youtube.com/watch?v=gXK-0lGGNSQ&t=1235s">here</a>,
- An educational video from Naveen <a href="https://www.youtube.com/watch?v=sq-6brFJoDg">here</a>
