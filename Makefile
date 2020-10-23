.PHONY: \
	install \
	lint \
	lint.fix \
	prepare \
	preinstall \
	postinstall \
	release \
	commit-msg \
	pre-commit \
	pre-push

export VOLTA_HOME := $(HOME)/.volta
export PATH := $(VOLTA_HOME)/bin:$(PATH)

install:
	curl https://get.volta.sh | bash -s -- --skip-setup
	volta install node@latest
	volta pin node@latest
	volta pin npm@7
	npm install

lint:
	npx eslint_d .

lint.fix:
	npx eslint_d fix

postinstall:
	npx husky install
	ln -sf eslint_d node_modules/.bin/eslint

release:
	npx standard-version
	git push --follow-tags

commit-msg:
	npx commitlint -E HUSKY_GIT_PARAMS

pre-commit:
	make lint

pre-push:
	make lint

push.all.amend:
	git add --all
	git commit --amend
	git push -f
