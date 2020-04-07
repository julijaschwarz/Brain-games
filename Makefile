install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

git-add:
	git add .

git-push:
	git push -u origin master
