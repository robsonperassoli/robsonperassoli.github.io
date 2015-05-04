---
title: Usando Demoiselle Framework com Netbeans e Tomcat.
author: robson
layout: post
permalink: /usando-demoiselle-framework-com-netbeans-e-tomcat/
categories:
  - Demoiselle
  - Desenvolvimento Web
  - Java
---
O *Demoiselle Framework* é construído a partir do conceito de *framework* integrador, integrando diversas ferramentas utilizadas no mercado Java. Tem como objetivo facilitar o desenvolvimento de aplicações, privando o desenvolvedor de perder tempo escolhendo os *frameworks* especialistas que serão usados no seu projeto, resultando grande aumento da produtividade, e facilita a manutenção dos sistemas. Possui mecanismos facilitadores voltados à resolução dos problemas mais comum em uma aplicação, entre eles estão arquitetura, segurança e configuração.

O *framework* contém uma estrutura não monolítica, ou seja, as funcionalidades estão separadas do núcleo principal, esta forma de organização permite que aplicações específicas não necessitem compor dependências que não serão usadas.

A estrutura do *Demoiselle* é dividida em Core, que contém as funcionalidades que são comuns a todas aplicações, é a base, o núcleo propriamente dito. Extensões por sua vez são funcionalidades extras extremamente ligadas ao núcleo, porém específicas a um domínio, como é o caso de JPA e* *JSF, pois algumas aplicações não fazem uso de persistência, não fazendo sentido estar no núcleo. Por fim os Componentes, que são artefatos independentes do núcleo, não precisam estender as funcionalidades do core, têm ciclo de vida próprio, não precisa necessariamente fazer uso do *Demoiselle*.* *

*(Os parágrafos acima foram retirados do meu Projeto de TCC, no qual estou usando Demoiselle. <img src='http://blog-robson.rhcloud.com/wp-includes/images/smilies/icon_biggrin.gif' alt=':D' class='wp-smiley' /> )*

Para o gerenciar o projeto é utilizado o <a title="Site oficial do Apache Maven" href="http://maven.apache.org/" target="_blank">Apache Maven</a>, não estando preso a este. Porém uma das vantagens de usar o Maven é a possibilidade de usar os arquétipos, que são modelos de aplicações.

A execução do projeto foi feita utilizando a <a title="Netbeans Website" href="http://netbeans.org/" target="_blank">IDE Netbeans 7.0</a>, justamente pelo maior suporte ao Maven, que nas versões anteriores não é tão completo. Pode ser que funcione com versões anteriores, mas os recursos do maven serão mais precários.

Nosso projeto usará um arquetipo de uma aplicação JSF com JPA. Este arquétipo contém uma aplicação simples de bookmark (links favoritos). A partir desta simples aplicação é possível entender os principais conceitos do Demoiselle.

Agora vamos ao que interessa!!! No Netbeans clique em Novo Projeto, na Categoria Maven selecione Projeto do Arquetipo.  Clicando em próximo você visualizará uma tela com vários arquetipos que estão disponíveis nos repositórios do Maven. o Arquetipo do demoiselle não está nestes repositórios. Clique em Adicionar para inserir um arquetipo externo. Os arquétipos disponibilizados pela aquipe do demoiselle estão disponíveis <a title="Catalogo de Archétipos Demoiselle" href="http://demoiselle.sourceforge.net/repository/archetype-catalog.xml" target="_blank">aqui</a>. Os dados abaixo são referentes ao arquetipo demoiselle-jsf-jpa.

**groupId:** br.gov.frameworkdemoiselle.archetypes  
**artifactId:** demoiselle-jsf-jpa  
**version:** 2.1.2  
**repository:** http://demoiselle.sourceforge.net/repository/release

Selecione o arquétipo criado e clique em próximo. Após informar os dados do projeto clique em Finalizar. Nesta etapa o maven irá indexar os repositórios e baixará as dependências necessárias para o projeto. Pegue um café, pois este processo demora certo tempo.

Após criar o projeto e baixar as dependências, são necessárias algumas configurações para que seja possível rodar o projeto no Tomcat. Para este tutorial foi usado o<a title="Apache Tomcat" href="http://tomcat.apache.org/" target="_blank"> Tomcat 7</a> pois é a versão mais nova e que atende maior quantidade de recursos do JEE 6. Podendo não funcionar em versões anteriores.

Primeiramente devemos escolher a configuração do Maven Profile do projeto, no netbeans esta configuração é feita no combobox que está localizado próximo ao botão executar na barra de ferramentas, selecione **tomcat7**.

Após isso habilitaremos o listener do Weld (framework para CDI) no arquivo web.xml, devendo ser adicionado o seguinte conteúdo:

```xml
<listener>
    <listener-class>org.jboss.weld.environment.servlet.Listener</listener-class>
</listener>
```

Provavelmente este trecho apenas estará comentado, bastando apenas remover os comentários.

O próximo arquivo a ser alterado é o persistence.xml, que está localizado na pasta Outros códigos-fonte, em META-INF. Novamente nossa Persistence Unit (Unidade de persistência JPA) estará comentada, descomente a Persistence unit que está localizada abaixo do seguinte comentário: *<!&#8211;If you are using tomcat6/tomcat7 then use this persistence-unit&#8211;>.* Esta é a única persistence unit que deve estar neste arquivo.

O arquivo deve ficar com o seguinte conteúdo:

```xml
<persistence-unit name="bookmark-ds" transaction-type="RESOURCE_LOCAL">

    <class>com.mycompany.teste.domain.Bookmark</class>

    <properties>
        <property name="javax.persistence.jdbc.driver" value="org.hsqldb.jdbcDriver" />
        <property name="javax.persistence.jdbc.user" value="sa" />
        <property name="javax.persistence.jdbc.password" value="" />
        <property name="javax.persistence.jdbc.url" value="jdbc:hsqldb:hsql:." />

        <property name="eclipselink.logging.level" value="FINE" />
        <property name="eclipselink.ddl-generation" value="create-tables" />
        <property name="eclipselink.ddl-generation.output-mode" value="database" />
    </properties>
</persistence-unit>
```

Na mesma pasta devemos alterar o arquivo beans.xml, para ativar a estratégia de transação JPA do Demoiselle. Deixe apenas uma linha contendo a seguinte entrada:

```xml
<alternatives>
    <class>br.gov.frameworkdemoiselle.transaction.JPATransaction</class>
</alternatives>
```

Após estas configurações o projeto estará apto a rodar, o arquétipo vem configurado com uma base de dados padrão que é iniciada com o projeto.  O banco de dados utilizado é o <a title="Hyper SQL Homepage" href="http://hsqldb.org/" target="_blank">HSQLDB</a>.

Para compilar o projeto execute Shift+F11 ou Limpar e Construir, após finalizado este processo você verá no final do console a saída &#8216;BUILD SUCCESS&#8217;. Agora você pode executar seu projeto usando F6 ou Executar. Quando for clicado em executar aparecerá uma mensagem pedindo o servidor onde será executado o projeto. Selecione o Tomcat 7, e marque em lembrar permanentemente.

Sempre que você executar o projeto é indicado que você pare o servidor Tomcat. Pois quando o projeto é compilado, o maven altera alguns arquivos que estão em uso pelo servidor. Gerando um erro de compilação.

Para alterar a base de dados é possível alterar o persistence.xml com as configurações que desejadas e adicionar a dependência do driver JDBC que você quer usar.

Finalizo aqui este post sobre o Demoiselle, o primeiro de uma série de muitos, espero. Caso tiver dúvidas eu sugestões deixe um comentário.

Caso haja interesse de interagir com a comunidade demoiselle, acesse o site, onde você pode se inscrever na lista de discussão, o pessoal do demoiselle está sempre ajudando os iniciantes através deste meio. O Demoiselle e sua comunidade estão de parabéns.

Fontes:  
**Framework Demoiselle 2.0**: Guia de Referência: <<http://demoiselle.sourceforge.net/docs/reference/2.0-v6/pdf/demoiselle-reference.pdf>>