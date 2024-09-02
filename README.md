## Homework

### 1. Node.js Http JSON API Server
Write an HTTP server that serves JSON data when it receives a GET request
to the path /api/parsetime. Expect the request to contain a query string
with a key iso and an ISO-format time as the value.

#### How to run the server?
```shell
npm install
npm dev
# with optional port
npm dev 3060

# or use the yarn
yarn
yarn dev
# with optional port
yarn dev 3060

```

#### How to test the server?
parsetime endpoint:
```shell
/api/parsetime?iso=2013-08-10T12:10:15.474Z
```

unixtime endpoint:
```shell
/api/unixtime?iso=2013-08-10T12:10:15.474Z
```

### 2. GraphQL Server
Add support for GraphQL

#### How to test the GraphQL server?
parsetime endpoint:
```shell
/graphql
```
```graphql
query {
  parsetime(iso: "2013-08-10T12:10:15.474Z") {
    hour
    minute
    second
  }
  unixtime(iso: "2013-08-10T12:10:15.474Z") {
    unixtime
  }
}
```

### 3. File copy
Write a program to copy a single large file (It would be better if it could show
the progress)

#### How to run the program?
```shell
npm run copy source [destination]

# or use the yarn
yarn copy source [destination]

```
The copyed file will be saved in the destination folder or in the current folder if no destination is provided. and with name `source_Copy.ext`.

Progress percentage will be shown in the console.
