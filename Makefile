i:
	npm install

h:
	npx husky install

b:
	npm run build

ts:
	npm run ts

js:
	npm run build && npm run js

redis:
	docker compose up redis -d