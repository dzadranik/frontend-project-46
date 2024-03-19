install:
	npm ci
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint
gendiff:
	node bin/gendiff.js
