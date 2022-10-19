const Contacto = ()=> {
    return (
        <main>
            <h1>Cuentanos ¿En que te podemos ayudar?</h1>

            <form action="">
                <label htmlFor="">Correo:</label>
                <input id="email" type="email" placeholder="Ingresa tu correo" />

                <label htmlFor="descripcion">Descripcion</label>
                <textarea id="descripcion" cols="30" rows="10"></textarea>

                <button className="btn">Enviar</button>

            </form>
        </main>
    )
}

export default Contacto