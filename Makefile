.PHONY: all build generate clean

all: clean build generate

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