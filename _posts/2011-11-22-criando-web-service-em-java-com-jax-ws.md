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

<pre class="brush: java; title: ; notranslate" title="">public class Pessoa {
    
    private String nome;
    private String email;
    private String telefone;

    //Getters e Setter omitidos
}
</pre>

A seguir crie a classe HelloService, que será a implementação do WebService:

<pre class="brush: java; title: ; notranslate" title="">@WebService
public class HelloService {

    @WebMethod(operationName="sayHello")
    public String sayHello(@WebParam(name="pessoa") Pessoa p){
        return "Hello " + p.getNome();
    }
}
</pre>

Podemos notar a simplicidade em definir o WebService. Veja a anotação **@WebService** é ela que diz que esta classe é um WebService. Após a definição da classe podemos observar o método público criado, este método processará a chamada, recebendo um parâmetro com um objeto Pessoa. 

O método sayHello também está anotado, porém com **@WebMethod**, esta anotação informa que o método será publicado, o mesmo acontece com o parametro, que está anotado com **@WebParam**. 

**OBS:** As anotações no método e atributos não são obrigatórias, possibilitando a criação do webservice sem elas. Porém é altamente recomendado que sejam utilizadas as anotações para não termos problemas posteriores.

Após a criação das classes é necessário configurar o arquivo **web.xml**. Vamos adicionar um servlet que receberá as requisições para o web service criado, e um listener que fará a leitura do arquivo **sun-jaxws.xml** que contém a implementação do serviço.

O arquivo sun-jaxws.xml ainda não existe, portanto crie-o dentro da pasta WEB-INF com o seguinte conteúdo:

<pre class="brush: xml; title: ; notranslate" title="">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;endpoints version="2.0" xmlns="http://java.sun.com/xml/ns/jax-ws/ri/runtime"&gt;
  &lt;endpoint implementation="seupacote.HelloService" name="HelloService" url-pattern="/HelloService"/&gt;
&lt;/endpoints&gt;
</pre>

Altere o arquivo web.xml adicionando o seguinte conteúdo:

<pre class="brush: xml; title: ; notranslate" title="">&lt;listener&gt;
    &lt;listener-class&gt;com.sun.xml.ws.transport.http.servlet.WSServletContextListener&lt;/listener-class&gt;
&lt;/listener&gt;
&lt;servlet&gt;
    &lt;servlet-name&gt;HelloService&lt;/servlet-name&gt;
    &lt;servlet-class&gt;com.sun.xml.ws.transport.http.servlet.WSServlet&lt;/servlet-class&gt;
    &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
    &lt;servlet-name&gt;HelloService&lt;/servlet-name&gt;
    &lt;url-pattern&gt;/HelloService&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
</pre>

Após terminar estas configurações seu WebService esta pronto para ser executado. Você pode visualizar o WSDL gerado acessando http://seuhost:suaporta/SuaApp/HelloService?wsdl.

Bons estudos.

 [1]: http://jcp.org/en/jsr/detail?id=224
 [2]: http://metro.java.net/