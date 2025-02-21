Feature: test Servicios PokemonApi

    Scenario:Validar servicio
        Given que el usuario ingresa a la web definida como "pokemon"
        When se llama al endpoint pokemon
        Then se valida que su respuesta es 200

    Scenario:Validar pokemon inexistente
        Given que el usuario ingresa a la web definida como "pokemon"
        When se llama al endpoint pokemon con un pokemon que no existe
        Then se valida que su respuesta es un 404
    @focus
    Scenario:Validar Nro inexistente
        Given que el usuario ingresa a la web definida como "pokemon"
        When se llama al endpoint pokemon con un numero de pokemon que no existe
        Then se valida que su respuesta no es un 200

    Scenario:Validar Body no Vacio
        Given que el usuario ingresa a la web definida como "pokemon"
        When se llama al body del endpoint pokemon
        Then se valida que no viene vacio