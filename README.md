# reacttest

Experiments with **react**

Uses:
* react-bootstrap
* react-table

##Getting started

Here are the steps to get started on Ubuntu 18.04

1. Install yarn
	source: https://yarnpkg.com/lang/en/docs/install/#debian-stable
	Steps:
    ```bash
	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	sudo apt-get update
	sudo apt-get install yarn
    ```
		Note: Looks like cmdtest also has a yarn command. If cmdtest is already installed, remove it by doing
    ```bash
		 sudo apt-get remove cmdtest
    ```

2. Create react app
	source: https://facebook.github.io/create-react-app/docs/getting-started#yarn
    ```bash
	yarn create react-app reactor
    ```
