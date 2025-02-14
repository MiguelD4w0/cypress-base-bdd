Feature: Desafio Agus Nancy Pokemon web

    Scenario: Validar texto de botones inciales
        Given que el usuario ingresa a la web definida como "pokemon"
        Then valida que en la parte inferior se encuentra el subtiutlo "The Pokémon Company"
        And verifica en la home que el boton "Inicio" tenga su texto correspondiente
        Then comprueba que el boton "Pokédex" contenga su texto apropiado
        And valida que el boton "Aplicaciones" tiene su texto propio
        Then el usuario visualiza el boton "Juego de Cartas Coleccionables" con su texto
        And asegura que el boton "Dibujos Animados" lleva si texto propio
        Then se visualiza el boton "Eventos de Play! Pokémon" con su texto establecido
        And se observa el boton "Noticias" con su texto predefinido

    Scenario: busqueda de pokemon 93
        Given que el usuario ingresa a la web definida como "pokemon"
        When el usuario clickea en el boton "Pokédex"
        And en el buscador ingresa el nro 93
        When preciona el boton con forma de lupa
        And preciona el boton "Cargar más Pokémon"
        Then valida que todas las busquedas tengan incluyan "N.º" y "93"

    Scenario: Noticias Pokemon
        Given que el usuario ingresa a la web definida como "pokemon"
        When el usuario hace click en el boton "Noticias"
        Then valida que cada noticia tenga una imagen, fecha, categoria, titulo y una descripcion