#Q deploy server
npm run deploy

# css changes with tailwind
npx tailwindcss -i ./src/custom.css -o ./src/index.css --watch

# set git sshcommand
git config core.sshCommand "ssh -i ~/.ssh/id_git"