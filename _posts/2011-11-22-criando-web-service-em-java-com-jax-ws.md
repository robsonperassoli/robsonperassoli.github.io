---
title: Criando Web Service em Java com JAX-WS
author: robson
layout: post
permalink: /criando-web-service-em-java-com-jax-ws/
categories:
  - Desenvolvimento Web
  - Java
  - Web Services
---
JAX-WS é a nova especificação para web services na plataforma Java, você pode saber mais procurando pela [JSR-224][1].

Com base na JSR-224 o projeto Glassfish desenvolveu uma implementação de referência chamada RI JAX-WS. Que mais tarde foi fundido com o projeto Glassfish WSIT que visava dar o RI JAX-WS maior interoperabilidade. 

Desta junção originou-se o Glassfish Metro que hoje é a implementação que possibilita a maior compatibilidade com diferentes plataformas e tipos de web services, como os RPC-Style.

Agora que conhecemos um pouco o que será utilizado, vamos por a mão na massa! <img src='http://blog-robson.rhcloud.com/wp-includes/images/smilies/icon_biggrin.gif' alt=':D' class='wp-smiley' /> 

Crie um projeto WEB na IDE de sua preferência. Eu utilizei o Netbeans 7.0 juntamente com o o Tomcat 7.0.

Após ter o projeto criado vamos fazer o download do [metro][2]. Para este projeto baixei o arquivo:  **metro-standalone-2.1.1.zip.**. Após finalizar o download descompacte o arquivo e copie o conteúdo da pasta lib para o classpath do seu projeto.

Depois de copiar o metro podemos iniciar nosso web Service, que terá como função: Receber um objeto Pessoa e retornar uma string saudando a Pessoa pelo seu nome.

Segue a implementação da classe Pessoa:

```java
public class Pessoa {
    
    private String nome;
    private String email;
    private String telefone;

    //Getters e Setter omitidos
}
```

A seguir crie a classe HelloService, que será a implementação do WebService:

```java
@WebService
public class HelloService {

    @WebMethod(operationName="sayHello")
    public String sayHello(@WebParam(name="pessoa") Pessoa p){
        return "Hello " + p.getNome();
    }
}
```

Podemos notar a simplicidade em definir o WebService. Veja a anotação **@WebService** é ela que diz que esta classe é um WebService. Após a definição da classe podemos observar o método público criado, este método processará a chamada, recebendo um parâmetro com um objeto Pessoa. 

O método sayHello também está anotado, porém com **@WebMethod**, esta anotação informa que o método será publicado, o mesmo acontece com o parametro, que está anotado com **@WebParam**. 

**OBS:** As anotações no método e atributos não são obrigatórias, possibilitando a criação do webservice sem elas. Porém é altamente recomendado que sejam utilizadas as anotações para não termos problemas posteriores.

Após a criação das classes é necessário configurar o arquivo **web.xml**. Vamos adicionar um servlet que receberá as requisições para o web service criado, e um listener que fará a leitura do arquivo **sun-jaxws.xml** que contém a implementação do serviço.

O arquivo sun-jaxws.xml ainda não existe, portanto crie-o dentro da pasta WEB-INF com o seguinte conteúdo:

```xml
<?xml version="1.0" encoding="UTF-8">
<endpoints version="2.0" xmlns="http://java.sun.com/xml/ns/jax-ws/ri/runtime">
  <endpoint implementation="seupacote.HelloService" name="HelloService" url-pattern="/HelloService"/>
</endpoints>
```

Altere o arquivo web.xml adicionando o seguinte conteúdo:

```xml
<listener>
    <listener-class>com.sun.xml.ws.transport.http.servlet.WSServletContextListener</listener-class>
</listener>
<servlet>
    <servlet-name>HelloService</servlet-name>
    <servlet-class>com.sun.xml.ws.transport.http.servlet.WSServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>HelloService</servlet-name>
    <url-pattern>/HelloService</url-pattern>
</servlet-mapping>
```

Após terminar estas configurações seu WebService esta pronto para ser executado. Você pode visualizar o WSDL gerado acessando http://seuhost:suaporta/SuaApp/HelloService?wsdl.

Bons estudos.

 [1]: http://jcp.org/en/jsr/detail?id=224
 [2]: http://metro.java.net/