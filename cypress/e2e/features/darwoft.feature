Feature: Desafio Agus Nancy Darwoft web

    Scenario: Validar boton hamburguesa Darwoft
        Given que el usuario ingresa a la web definida en internet como "darwoft"
        When hace click en el boton hamburguesa
        Then comprueba que el menu lateral es visible


    Scenario: Darwoft carreras
        Given que el usuario ingresa a la web definida como "darwoft"
        When el usuario clickea en la opcion "careers"
        And hace click en el boton Descubre
        When el usuario ingresa SR QA en la barra de busqueda
        And procede a hacer un click en el boton "Buscar"
        Then valida que la opcion mostrada sea "SR QA Automation Engineer"

    Scenario: blog Darwoft
        Given que el usuario ingresa a la web "darwoft"
        And hace click en el boton hamburguesa darwoft
        When el usuario hace un click en la opcion "blog"
        Then valida que blog tenga Imagenes , links , titulos , fechas y botones
