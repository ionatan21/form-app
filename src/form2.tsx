import "./App.css";
import { useState } from "react";

function Form2() {


  type OptionsPerDay = {
    [key: string]: {
      manana: [any[], Function];
      tarde: [any[], Function];
    };
  };

  const daysWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const OptionsPerDay: OptionsPerDay = {};

  for (const day of daysWeek) {
    OptionsPerDay[day] = {
      manana: useState([]),
      tarde: useState([]),
    };
  }




  

  return (
    <div className="formulario">
      <h3 className="declaracion-title" style={{ color: 'black' }}>
        DECLARACIÓN JURADA DE HORARIO Y JORNADA DE TRABAJO
      </h3>
      <table>
        <tbody>
          <tr>
            <td className="header-inputs" colSpan={2}>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label id="nombre_funcionario" style={{ color: 'black' }}>
                        Nombre del funcionario(a):
                      </label>
                    </td>
                    <td className="header-text">
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
                      <label id="cedula" style={{ color: 'black' }}>
                        Cédula:
                      </label>
                    </td>
                    <td className="header-text2">
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
                      <label id="telefono" style={{ color: 'black' }}>
                        Número de teléfono:
                      </label>
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
                      <label id="unidad_academica" style={{ color: 'black' }}>
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
                      <label id="correo_electronico" style={{ color: 'black' }}>
                        Correo electrónico:
                      </label>
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
      <h2 className="next-comment" style={{ color: 'black' }}>
        A continuación declaro los horarios y jornadas convenidos con:
      </h2>
      <h3 style={{ color: 'black' }}>OTRAS INSTITUCIONES PÚBLICAS, PRIVADAS Y FUNDACIONES</h3>
      <table className="tabla2">
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
            <th className="header-cell">monday</th>
            <th className="header-cell">tuesday</th>
            <th className="header-cell">Miércoles</th>
            <th className="header-cell">thursday</th>
            <th className="header-cell">friday</th>
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
                <option value="meday">1/4</option>
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                <option value="meday">1/4</option>
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                <option value="meday">1/4</option>
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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
                      <select name="monday_de" className="time-picker">
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

export default Form2;