DEVELOPMENT=env NODE_ENV=development
PRODUCTION=env NODE_ENV=production
COMPILE=./node_modules/.bin/babel
BUILD=./node_modules/.bin/webpack
DEV_SERVER=./node_modules/.bin/webpack-dev-server

usage:
	@echo - prepublish .... tests, rebuilds dist and docs.
	@echo - compile ....... compiles sources to ES5.
	@echo - build ......... builds and optimizes distributables.
	@echo - devel ......... rebuilds on file change.
	@echo - clean ......... removes the built artifacts.

prepublish: build compile

clean:
	@rm -rf lib dist

devel:
	@$(DEVELOPMENT) $(DEV_SERVER) --config .webpackrc

compile:
	@$(COMPILE) -q -d lib src

build: clean
	@$(PRODUCTION) $(BUILD) --config .webpackrc

.PHONY: usage prepublish clean devel\
        compile build
