<h1 align="center">Jogo da velha</h1>
<p align="center">Um simples jogo da velha, ganha aquele que marcar primeiro 3 quadrados alinhados em qualquer direção</p>
<div align="center">
    <h4>Dependências: </h4>
    <img src="https://img.shields.io/static/v1?label=Apache&message=v2.4.35&color=D22128&style=for-the-badge&logo=apache"/>
    <img src="https://img.shields.io/static/v1?label=PHP&message=v7.2.19&color=7159c1&style=for-the-badge&logo=php"/>
</div>

### Requisitos para Termux: 

```bash
# Clone este repositório
$ git clone https://github.com/brlouco/Jogo-da-Velha


# Instale o pacote php-apache
$ apt install php-apache


# Execute o script de configuração
$ cd Jogo-da-Velha && bash termux-install.sh


# Execute o apache
$ apachectl start

# Por fim, vá até o navegador e coloque localhost:8080 como url
# Opcional: Edite o events.js e altere a const url para o localhost com a porta a ser usada pelo apache


```

### Requisitos para linux no pc:

```bash
# Clone este repositório
$ git clone https://github.com/brlouco/Jogo-da-Velha


# Instale o pacote apache
$ sudo apt-get install apache2


# Configurando o PHP
$ sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql


# Execute o script de configuração
$ cd Jogo-da-Velha && bash linux-install.sh


# Execute o apache
$ sudo apache2 start

# Por fim, vá até o navegador e coloque localhost como url
# Opcional: Edite o events.js e altere a const url para o localhost com a porta a ser usada pelo apache


```

<h3>Features ✅</h3>

- [x] Bot fácil
- [x] Bot difícil
