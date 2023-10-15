import "./App.css";
//import { useState } from "react";

function Form() {
  /*const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue) {
      setValue(inputValue);
    }
  };
*/
  return (
    <div className="formulario">
      

      <table>
        <tbody>
          <tr>
            <td className="header-inputs" colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="nombre_funcionario">
                        Nombre del funcionario(a):
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="nombre_funcionario"
                        name="nombre_funcionario"
                        required
                      />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td className="cedula" colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="cedula">Cédula:</label>
                    </td>
                    <td>
                      <input type="text" id="cedula" name="cedula" required />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td className="telefono" colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="telefono">Número de teléfono:</label>
                    </td>
                    <td>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                      />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="unidad_academica">
                        Unidad Académica o Administrativa:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="unidad_academica"
                        name="unidad_academica"
                        required
                      />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td className="correo" colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="correo_electronico">Correo electrónico:</label>
                    </td>
                    <td>
                      <input
                        className="email"
                        type="email"
                        id="correo_electronico"
                        name="correo_electronico"
                        required
                      />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          
        </tbody>
      </table>
      <br />
      <h2 className="next-comment">
        A continuación declaro los horarios y jornadas convenidos con:
      </h2>
      <br />
      <h3>UNIVERSIDAD DE COSTA RICA (sea como docente y/o administrativo)</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th rowSpan={2} className="header-cell">
              Lugar de Trabajo
            </th>
            <th rowSpan={2} className="header-cell">
              Cargo <br /> Categoría
            </th>
            <th rowSpan={2} className="header-cell">
              Jornada <br /> de Trabajo
            </th>
            <th className="header-cell" id="vigencia-head">
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
          <tr>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>Desde:</p>
                    </td>
                    <td className="range">
                      <p>Hasta:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>

            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>OTRAS INSTITUCIONES PÚBLICAS, PRIVADAS Y FUNDACIONES</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th rowSpan={2} className="header-cell">
              Lugar de Trabajo
            </th>
            <th rowSpan={2} className="header-cell">
              Cargo <br /> Categoría
            </th>
            <th rowSpan={2} className="header-cell">
              Jornada <br /> de Trabajo
            </th>
            <th className="header-cell" id="vigencia-head">
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
          <tr>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>Desde:</p>
                    </td>
                    <td className="range">
                      <p>Hasta:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>

            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
            <th>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range">
                      <p>De:</p>
                    </td>
                    <td className="range">
                      <p>A:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <select name="sede">
                <option value="Sede Regional de Occidente">
                  Sede de Occidente
                </option>
                <option value="Sede Regional del Atlántico">
                  Sede del Atlántico
                </option>
                <option value="Sede Regional de Guanacaste">
                  Sede de Guanacaste
                </option>
                <option value="Sede Regional del Caribe">
                  Sede del Caribe
                </option>
                <option value="Sede Regional del Pacífico">
                  Sede del Pacífico
                </option>
                <option value="Sede Regional del Sur">Sede del Sur</option>
                <option value="Sede Interuniversitaria de Alajuela">
                  Sede de Alajuela
                </option>
              </select>
            </td>
            <td>
              <select name="cargo" id="cargo">
                <option value="">Opción de cargo 1</option>
                <option value="">Opción de cargo 2</option>
                <option value="">Opción de cargo 3</option>
                <option value="">Opción de cargo 4</option>
              </select>
            </td>
            <td>
              <select name="jornada">
                <option value="completa">1/4</option>
                <option value="media">1/4</option>
                <option value="personalizada">1/4</option>
              </select>
            </td>
            <td className="date-picker">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="date" placeholder="desde" className="date" />
                    </td>
                    <td>
                      <input type="date" placeholder="hasta" className="date" />
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>

            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="8">8:00 AM</option>
                        <option value="8.5">8:30 AM</option>
                        <option value="9">9:00 AM</option>
                        <option value="9.5">9:30 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="10.5">10:30 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="11.5">11:30 AM</option>
                      </select>
                    </td>
                    <td>
                      <select name="lunes_de" className="time-picker">
                        <option value="12">12:00 PM</option>
                        <option value="12.5">12:30 PM</option>
                        <option value="13">13:00 PM</option>
                        <option value="13.5">13:30 PM</option>
                        <option value="14">14:00 PM</option>
                        <option value="14.5">14:30 PM</option>
                        <option value="15">15:00 PM</option>
                        <option value="15.5">15:30 PM</option>
                        <option value="16">16:00 PM</option>
                        <option value="16.5">16:30 PM</option>
                      </select>
                    </td>
                  </tr>
                </thead>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Form;
