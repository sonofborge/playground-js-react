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

This method requires that you have
[Docker](https://docs.docker.com/)
and
[Docker Compose](https://docs.docker.com/compose/)
installed on your system.

1.  Run the following command to build and run the application.

    ```sh
    docker-compose up --build
    ```

1.  You should now be able to access the application at `localhost:3000`.

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
    npm start
    ```

1.  You should now be able to access the application at `localhost:3000`.

## Testing

This project uses Jest and Enzyme for testing.
To run the tests,
execute the following command:

    ```sh
    npm test
    ```
