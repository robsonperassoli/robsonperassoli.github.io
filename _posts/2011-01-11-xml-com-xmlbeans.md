---
title: XML com XMLBeans
author: robson
layout: post
permalink: /xml-com-xmlbeans/
categories:
  - Java
---
**O que é, o que faz o XmlBeans?**  
Segundo a descrição do site, XMLBeans é uma tecnologia para acessar Xml e fazer binding a tipos Java. XMLBeans provê várias formas de acesso a XML, incluindo:

  * Através de XML Schemas que foram compilados para gerar tipos Java que representam tipos de Schema, Desta forma, você pode acessar instâncias do schema através de JavaBeans no estilo &#8220;getFoo&#8221; e &#8220;setFoo&#8221;.
  * A API XMLBeans também permite refletir o Schema para um modelo de Objeto XML Schema.
  * Modelo de Cursor pelo qual você pode percorrer o XML inteiro.
  * Suporte a DOM XML.

Então no meu caso usei o XMLBeans para gerar os beans de acesso ao xml,  para isso devo ter em mãos o Schema para validação do XML.

Primeiramente devemos baixar o XMLBeans, o site é : [http://xmlbeans.apache.org][1], selecione download e binary releases. Eu usei o mirror recomendado por eles e baixei a versão <span style="font-family: Consolas, Monaco, 'Courier New', Courier, monospace; line-height: 18px; font-size: 12px; white-space: pre;">xmlbeans-2.5.0.zip.</span>

Extraia o arquivo e coloque na raiz do Sistema, no meu caso: C:/xmlbeans, e crie uma variável de ambiente com o nome XMLBEANS\_HOME e como valor coloque a raiz do XMLBeans (C:/xmlbeans), e adicione a variável de ambiente path a pasta bin do XMLBeans: %XMLBEANS\_HOME%/bin.

Eu tive problemas com as minhas variáveis de ambiente Java, por isso tive que rodar os comandos direto da pasta bin do meu JDK.

No meu caso o XMLBeans irá gerar um jar com os beans de acesso a partir de um schema que eu tenho.

O comando que usei foi o seguinte:  
`<br />
cd %JAVA_HOME%/bin<br />
scomp -out c:/beans.jar c:/schemasmySchema.xsd<br />
`  
Sendo que beans.jar é o jar com as classes para acessar o XML, e mySchema.xsd é o schema do XML.

É necessário adicionar o arquivo beans.jar e as bibliotecas que estão em %XMLBEANS_HOME%/lib no diretório das libs do seu projeto.

Segue exemplo de uso em Java, neste exemplo eu li o Xml da NFe.

<pre class="brush: java; title: ; notranslate" title="">try {
    // O construtor pode ser chamando de várias formas mas as que eu usei foram
    // passar um File e uma string contendo o xml
    //NfeProcDocument doc = NfeProcDocument.Factory.parse( xmlString );
    NfeProcDocument doc = NfeProcDocument.Factory.parse(new File("c://arquivo.xml"));

    //todos os nodos do xml pode ser acessados via get e set
    System.out.println(doc.getNfeProc().getNFe().getInfNFe().getId());
}catch (Exception e) {
    e.printStackTrace();
}
</pre>

Existem outros comandos que podem ser usados, aqui está uma lista deles: <http://xmlbeans.apache.org/docs/2.0.0/guide/tools.html>.  
E aqui está o tutorial de primeiros passos: <http://xmlbeans.apache.org/docs/2.0.0/guide/conGettingStartedwithXMLBeans.html>

 [1]: http://xmlbeans.apache.org/