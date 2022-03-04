# Backend of Course AngularJS (legacy)

## Requirements

- **Optional**
```bash
$ npm i -g nodemon
```

## Usage

- Open terminal Inside Backend folder
```bash
univerapp <REPO>
└── Backend
```
- Add the file **.env** with the following content  
    - tree path
    ```bash
    univerapp <REPO>
    └── Backend
          └── .env
    ```
    - content of **.env**
    ```bash
    PORT        = <PORT>
    MONGODB_SRV = <MONGODB_SRV>
    ```
    > **NOTE**: Description of Enviroment Variables  
    > &#60;PORT&#62;: Value Server Port.<br>
    > &#60;MONGODB_SRV&#62;: URL of MongoDB Server.<br>

- Run the following commands
```bash
$ npm install
$ npm start
```