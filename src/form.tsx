import "./App.css";

function Form() {
  return (
    <div className="formulario">
      <table>
        <thead>
          <tr>
            <th>
              <img src="src/img/logo-ucr.png" alt="LOGO" />
            </th>

            <h2 className="main-title">UNIVERSIDAD DE COSTA RICA</h2>
            <h3>Oficina de Recursos Humanos</h3>
          </tr>
          <tr>
            <th colSpan={6}>
              <h2 className="declaracion-title">
                DECLARACIÓN JURADA DE HORARIO Y JORNADA DE TRABAJO
              </h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label id="nombre_funcionario">Nombre del funcionario(a):</label>
            </td>
            <td className="inputs">
              <input
                type="text"
                className="nombre_funcionario"
                name="nombre_funcionario"
                required
              />
            </td>
            <td className="title">
              <label id="cedula">Cédula:</label>
            </td>
            <td className="inputs">
              <input type="text" id="cedula" name="cedula" required />
            </td>
            <td>
              <label id="telefono">Número de teléfono:</label>
            </td>
            <td className="inputs">
              <input type="tel" id="telefono" name="telefono" required />
            </td>
          </tr>
          <tr>
            <td>
              <label id="unidad_academica">
                Unidad Académica o Administrativa:
              </label>
            </td>
            <td className="inputs">
              <input
                type="text"
            className="unidad_academica"
                name="unidad_academica"
                required
              />
            </td>
            <td>
              <label id="correo_electronico">Correo electrónico:</label>
            </td>
            <td className="inputs" colSpan={2}>
              <input
                className="email"
                type="email"
                id="correo_electronico"
                name="correo_electronico"
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <p className="next-comment">
                A continuación declaro los horarios y jornadas convenidos con:
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>UNIVERSIDAD DE COSTA RICA (sea como docente y/o administrativo)</h3>
      <table>
        <thead>
          <tr>
            <th className="header-cell">Lugar de Trabajo</th>
            <th className="header-cell">
              Cargo <br /> Categoría
            </th>
            <th className="header-cell">
              Jornada <br /> de Trabajo
            </th>
            <th className="header-cell">
              Vigencia del <br />
              Nombramiento
            </th>
            <th className="header-cell">Lunes</th>
            <th className="header-cell">Martes</th>
            <th className="header-cell">Miércoles</th>
            <th className="header-cell">Jueves</th>
            <th className="header-cell">Viernes</th>
            <th className="header-cell">Sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
             <input type="date"  placeholder="desde" />

              <input type="date" placeholder="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
              <input type="date" name="desde" />

              <input type="date" name="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
              <input type="date" name="desde" />

              <input type="date" name="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>OTRAS INSTITUCIONES PÚBLICAS, PRIVADAS Y FUNDACIONES</h3>
      <table>
        <thead>
        <th className="header-cell">Lugar de Trabajo</th>
            <th className="header-cell">
              Cargo <br /> Categoría
            </th>
            <th className="header-cell">
              Jornada <br /> de Trabajo
            </th>
            <th className="header-cell">
              Vigencia del <br />
              Nombramiento (Desde)
            </th>
            <th className="header-cell">Lunes</th>
            <th className="header-cell">Martes</th>
            <th className="header-cell">Miércoles</th>
            <th className="header-cell">Jueves</th>
            <th className="header-cell">Viernes</th>
            <th className="header-cell">Sábado</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
              <input type="date" name="desde" />

              <input type="date" name="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
              <input type="date" name="desde" />

              <input type="date" name="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" name="lugar_trabajo" />
            </td>
            <td>
              <input type="text" name="cargo" />
            </td>
            <td>
              <select name="jornada">
                <option value="completa">Jornada Completa</option>
                <option value="media">Jornada Media</option>
                <option value="personalizada">Jornada Personalizada</option>
              </select>
            </td>
            <td>
              <input type="date" name="desde" />

              <input type="date" name="hasta" />
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>

            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
            <td>
              <select name="lunes_de">
                <option value="0">De</option>
                <option value="1">8 AM</option>
              </select>
              <select name="lunes_a">
                <option value="0">A</option>
                <option value="2">9:30 PM</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Form;
