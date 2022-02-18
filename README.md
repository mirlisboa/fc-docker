# Curso Full Cycle.

## Módulo - Docker

**Aluno:** Mirela Lisboa Sobreira

**Professor:** Wesley Willians


### Desafio GO

Para realizar este desafio é necessário ter o docker instalado na sua máquina. Você pode obter as informações de como instalá-lo em [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/).

Após instalado o docker execute o comando abaixo para rodar a aplicação GO:
```
docker run --rm --name fc-go mirlisboa/fc-docker-go
```

**Referências:**

+ https://github.com/xaionaro/documentation/blob/master/golang/reduce-binary-size.md


### Desafio NodeJS + Nginx

Para realizar este desafio é necessário ter o docker e o docker-compose instalado na sua máquina. Você pode obter as informações de como instalá-lo em [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/).

Para rodar a aplicação execute primeiro o comando abaixo dentro do diretório principal (onde se encontra esse arquivo):
```
docker-compose up -d
```

Após esse comando no browse de sua preferência acesse o endereço [http://localhost:8080](http://localhost:8080).

**ATENÇÃO:**

Na primeira vez que rodar o compose haverá uma demora pois o MariaDB irá criar o banco e a tabela da aplicação, que será poderá ser encontrado na pasta *mariadb/data*


**Referências:**

+ https://mariadb.com/resources/blog/getting-started-with-connector-node-js/
+ https://imasters.com.br/desenvolvimento/mockando-dados-com-faker-js
+ https://github.com/mirlisboa/faker.js
+ https://blog.logrocket.com/how-to-run-a-node-js-server-with-nginx/
+ https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
+ https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds
+ https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders