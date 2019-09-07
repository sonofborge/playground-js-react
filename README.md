# JS React Playground

[Create React App](https://github.com/facebook/create-react-app)
is almost certainly a better choice,
but I wanted to setup my own JS stack from scratch.
You know ... for funsies.
;)

## Up and Running

Regardless of what method you choose below to run the application,
you will need to have
[Git](https://git-scm.com/)
installed on your system,
and you will need to run the following command:

1.  Clone the repo down to your system and change into the project directory.

    ```sh
    git clone https://github.com/sonofborge/js-react-playground.git && \
    cd js-react-playground
    ```

### The Docker Way

(TODO: dockerize the app)

### The Local Way

This method require that you have
[NodeJS](https://nodejs.org/en/)
installed on your system.
Please check the `.nvmrc` file for the version of Node this project depends on.

1.  Install project dependencies with `npm`.

    ```sh
    npm install
    ```

1.  Start the local web server.

    ```sh
    npm run start
    ```

1.  You should now be able to access the application at `localhost:3000`.
