export type Busqueda = {
    ciudad: string;
    pais: string;
}

export type Resultado = {
    name: string,
    main: {
        temp: number,
        temp_min: number,
        temp_max: number
    }
    weather: [{icon:string}]
}