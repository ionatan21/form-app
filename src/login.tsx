function Login(){

return (
<>
    <title>Iniciar Sesión</title>

    <h2>Iniciar Sesión</h2>
    <form action="procesar_inicio_sesion.php" method="post">
        <label>Usuario:</label>
        <input type="text" id="usuario" name="usuario" required/><br/>
        
        <label>Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required/><br/>
        
        <input type="submit" value="Iniciar Sesión"/>
    </form>
</>
)

}

export default Login;