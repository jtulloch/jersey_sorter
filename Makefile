install:
	@npm $@

test:
	./node_modules/.bin/mocha --recursive --reporter nyan test/src

.PHONY: test
