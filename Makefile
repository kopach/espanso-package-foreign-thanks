.PHONY: all build generate clean copy_license copy_readme

all: clean build generate copy_license copy_readme

build:
	@echo "⏳ Compiling TypeScript..."
	npm run build

generate:
	@echo "⏳ Preparing package for espanso..."
	node dist/index.js

clean:
	@echo "⏳ Cleaning up..."
	rm -rf dist/

copy_license:
	@echo "⏳ Copying license..."
	cp LICENSE dist/foreign-thanks/*/

copy_readme:
	@echo "⏳ Copying readme..."
	cp dist/foreign-thanks/*/README.md README.md 