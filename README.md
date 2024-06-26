# https://mark-lech.com

This is my github user page / portfolio site for displaying projects that I have worked on. It is built using React and Material-UI (mainly for the grid and card components).

The json file located in `src/components/Pages/Home/data.json` contains all the data on the site, including name, external links, resume filename, image filenames, project info, etc. The resume file is expected to be in `public`. The image files are expected to be in `src/images` or `src/images/projects` for project items.

With this design, this makes it easy to add, remove, or modify any information on the site. Deploying the site to Github is also quick, simply requiring `npm run deploy` to be run after pushing code to Github.
