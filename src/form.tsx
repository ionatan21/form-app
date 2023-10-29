import "./App.css";
import { useState } from "react";

function Form() {

  const MorningOptions = [
    { value: "8", label: "8:00 AM" },
    { value: "8.5", label: "8:30 AM" },
    { value: "9", label: "9:00 AM" },
    { value: "9.5", label: "9:30 AM" },
    { value: "10", label: "10:00 AM" },
    { value: "10.5", label: "10:30 AM" },
    { value: "11", label: "11:00 AM" },
    { value: "11.5", label: "11:30 AM" },
    // ... Otras opciones de la mañana
  ];

  const AfternoonOptions = [
    { value: "13", label: "1:00 PM" },
    { value: "13.5", label: "1:30 PM" },
    { value: "14", label: "2:00 PM" },
    { value: "14.5", label: "2:30 PM" },
    { value: "15", label: "3:00 PM" },
    { value: "15.5", label: "3:30 PM" },
    { value: "16", label: "4:00 PM" },
    { value: "16.5", label: "4:30 PM" },
    { value: "17", label: "5:00 PM" },
    { value: "17.5", label: "5:30 PM" },
    { value: "18", label: "6:00 PM" },
    { value: "18.5", label: "6:30 PM" },
    { value: "19", label: "7:00 PM" },
    { value: "19.5", label: "7:30 PM" },
    { value: "20", label: "8:00 PM" },
    { value: "20.5", label: "8:30 PM" },
    { value: "21", label: "9:00 PM" },
    { value: "21.5", label: "9:30 PM" },
  ];

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

  const [MondayOptionsM, setMondayOptionsM] = OptionsPerDay.monday.manana;
  const [MondayOptionsT, setMondayOptionsT] = OptionsPerDay.monday.tarde;

  const [TuesdayOptionsM, setTuesdayOptionsM] = OptionsPerDay.tuesday.manana;
  const [TuesdayOptionsT, setTuesdayOptionsT] = OptionsPerDay.tuesday.tarde;

  const [WednesdayOptionsM, setWednesdayOptionsM] = OptionsPerDay.wednesday.manana;
  const [WednesdayOptionsT, setWednesdayOptionsT] = OptionsPerDay.wednesday.tarde;

  const [ThursdayOptionsM, setThursdayOptionsM] = OptionsPerDay.thursday.manana;
  const [ThursdayOptionsT, setThursdayOptionsT] = OptionsPerDay.thursday.tarde;

  const [FridayOptionsM, setFridayOptionsM] = OptionsPerDay.friday.manana;
  const [FridayOptionsT, setFridayOptionsT] = OptionsPerDay.friday.tarde;

  const [SaturdayOptionsM, setSaturdayOptionsM] = OptionsPerDay.saturday.manana;
  const [SaturdayOptionsT, setSaturdayOptionsT] = OptionsPerDay.saturday.tarde;

  const SettersOptions: { [key: string]: Function } = {
    "0": setMondayOptionsM,
    "2": setMondayOptionsT,
    "4": setTuesdayOptionsM,
    "6": setTuesdayOptionsT,
    "8": setWednesdayOptionsM,
    "10": setWednesdayOptionsT,
    "12": setThursdayOptionsM,
    "14": setThursdayOptionsT,
    "16": setFridayOptionsM,
    "18": setFridayOptionsT,
    "20": setSaturdayOptionsM,
    "22": setSaturdayOptionsT,
  };

  function validateOptions(criterio: string) {
    console.log(criterio);
    const opcionSetter = SettersOptions[criterio];
    if (opcionSetter) {
      return opcionSetter;
    } else {
      console.error(
        "No se encontró un setter de opciones válido para el criterio:",
        criterio
      );
      return null; // Otra acción por defecto si es necesario
    }
  }

  const [timeRecord, setTimeRecord] = useState<
    { value: any; label: any }[]
  >([]);


  const [enableSecondSelect, setenableSecondSelect] = useState<
    { value: boolean }[]
  >([]);

  const updateOptions = (
    horaSeleccionada: any,
    tipoday: any,
    opcionesSetter: Function
  ) => {
    const opcionesNuevas =
      tipoday === "mañana" ? MorningOptions : AfternoonOptions;
    const nuevasOpciones = opcionesNuevas.filter(
      (opcion) => parseFloat(opcion.value) > parseFloat(horaSeleccionada)
    );
    opcionesSetter(nuevasOpciones);
  };

  const handleHoraChange = (e: any) => {
    const nuevaHoraSeleccionada = e.target.value;
    const id = e.target.id;
    const fragmentos = id.split("-");

    const etiqueta = `${fragmentos[0]}: ${fragmentos[1]}`;

    const newHourInput = [...timeRecord];

    newHourInput[fragmentos[2]] = {
      value: nuevaHoraSeleccionada,
      label: etiqueta,
    };

    setTimeRecord(newHourInput);

    if ((Number(fragmentos[2]) + 1) % 2 === 0) {



    } else {
      console.log(fragmentos[2])
      const setter = validateOptions(fragmentos[2]);
      if (setter) {
        updateOptions(nuevaHoraSeleccionada, fragmentos[1], setter);
      }

      const NuevoSelect = [...enableSecondSelect];

      NuevoSelect[Number(fragmentos[2]) + 1] = {
        value: true,
      };

      setenableSecondSelect(NuevoSelect);
    }
  };

  const [filas, setFilas] = useState([1]); 
  

  const agregarFila = () => {
    setFilas([...filas, filas.length + 1]);
    
  };

  const eliminarFila = (fila: number) => {
    if (filas.length === 1) {
      // No puedes eliminar la última fila
      return;
    }
    const nuevasFilas = filas.filter((f) => f !== fila);
    setFilas(nuevasFilas);
  };
  

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
      <br />
      <h3 style={{ color: 'black' }}>UNIVERSIDAD DE COSTA RICA (sea como docente y/o administrativo)</h3>
      <table className="tabla">
        <thead>
          <tr>
            <th rowSpan={2} className="header-cell" >
              Lugar de Trabajo
            </th>
            <th rowSpan={2} className="header-cell">
              Cargo o Categoría
            </th>
            <th rowSpan={2} className="header-cell">
              Jornada de Trabajo
            </th>
            <th className="header-cell" colSpan={6} id="vigencia-head">
              Vigencia del <br />
              Nombramiento
            </th>
          </tr>
          <tr>
            <th colSpan={4}>
              <table className="sub-headers">
                <thead>
                  <tr>
                    <td className="range" colSpan={4}>
                      <p>Desde:</p>
                    </td>
                    <td className="range" colSpan={4}>
                      <p>Hasta:</p>
                    </td>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
          <tr>
            <td className="main-inputs">
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
            <td className="main-inputs">
              <select name="cargo" id="cargo">
                <option value="Profesor">Profesor</option>
                <option value="Administración">Administración</option>
                <option value="Coord de Carrera">Coord de Carrera</option>
                <option value="Coord de Docencia">Coord de Docencia</option>
                <option value="Coord de Investigación">
                  Coord de Investigación
                </option>
                <option value="Coord de Acción Social">
                  Coord de Acción Social
                </option>
                <option value="Coord de Vida Estudayntil">
                  Coord de Vida Estudayntil
                </option>
                <option value="Coord de Administración">
                  Coord de Administración
                </option>
                <option value="Coord de Estudios Generales y Ciencias Básicas">
                  Coord Estudios Generales
                </option>
                <option value="Coord de Cátedra">Coord de Cátedra</option>
                <option value="Docente Administrativo">
                  Docente Administrativo
                </option>
                <option value="Proyecto Acción Social">
                  Proyecto Acción Social
                </option>
                <option value="Proyecto de Investigación">
                  Proyecto de Investigación
                </option>
              </select>
            </td>
            <td className="main-inputs">
              <select name="jornada" className="jornada-inputs">
                <option value="1">1/8</option>
                <option value="6">1/2</option>
                <option value="2">1/4</option>
                <option value="8">1TC</option>
              </select>
            </td>
            <td className="date-picker" colSpan={3}>
              <table className="date-line">
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
          </tr>
         
          <tr>

            <th className="header-cell">monday</th>
            <th className="header-cell">tuesday</th>
            <th className="header-cell">Miércoles</th>
            <th className="header-cell">thursday</th>
            <th className="header-cell">friday</th>
            <th className="header-cell">Sábado</th>
          </tr>
           
              {filas.map((fila) => (
                <tr key={fila} >

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="monday-mañana-0"
                              name="monday_de_1"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="monday-mañana-1"
                              name="monday_de_1"
                              className="time-picker"
                              disabled={!enableSecondSelect[1]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {MondayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="monday-tarde-2"
                              name="monday_de_2"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="monday-mañana-3"
                              name="monday_de_3"
                              className="time-picker"
                              disabled={!enableSecondSelect[3]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {MondayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="tuesday-mañana-4"
                              name="tuesday_de_4"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="tuesday-mañana-5"
                              name="tuesday_de_5"
                              className="time-picker"
                              disabled={!enableSecondSelect[5]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {TuesdayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="tuesday-tarde-6"
                              name="tuesday_de_6"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="tuesday-tarde-7"
                              name="tuesday_de_7"
                              className="time-picker"
                              disabled={!enableSecondSelect[7]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {TuesdayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="wednesday-mañana-8"
                              name="wednesday_de_8"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="wednesday-mañana-9"
                              name="wednesday_de_9"
                              className="time-picker"
                              disabled={!enableSecondSelect[9]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {WednesdayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="wednesday-tarde-10"
                              name="wednesday_de_10"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="wednesday-tarde-11"
                              name="wednesday_de_11"
                              className="time-picker"
                              disabled={!enableSecondSelect[11]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {WednesdayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="thursday-mañana-12"
                              name="thursday_de_12"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="thursday-mañana-13"
                              name="thursday_de_13"
                              className="time-picker"
                              disabled={!enableSecondSelect[13]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {ThursdayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="thursday-tarde-14"
                              name="thursday_de_14"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="thursday-tarde-15"
                              name="thursday_de_15"
                              className="time-picker"
                              disabled={!enableSecondSelect[15]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {ThursdayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="friday-mañana-16"
                              name="friday_de_16"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="friday-mañana-17"
                              name="friday_de_17"
                              className="time-picker"
                              disabled={!enableSecondSelect[17]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {FridayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="friday-tarde-18"
                              name="friday_de_18"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="friday-tarde-19"
                              name="friday_de_19"
                              className="time-picker"
                              disabled={!enableSecondSelect[19]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {FridayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>

                  <td className="separator">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <select
                              id="saturday-mañana-20"
                              name="saturday_de_20"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {MorningOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="saturday-mañana-21"
                              name="saturday_de_21"
                              className="time-picker"
                              disabled={!enableSecondSelect[21]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {SaturdayOptionsM.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select
                              id="saturday-tarde-22"
                              name="saturday_de_22"
                              className="time-picker"
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Desde:
                              </option>

                              {AfternoonOptions.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select
                              id="saturday-tarde-23"
                              name="saturday_de_23"
                              className="time-picker"
                              disabled={!enableSecondSelect[23]}
                              onChange={handleHoraChange}
                            >
                              <option disabled selected>
                                Hasta:
                              </option>
                              {SaturdayOptionsT.map((opcion) => (
                                <option key={opcion.value} value={opcion.value}>
                                  {opcion.label}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>
                  <button onClick={() => eliminarFila(fila)}>Eliminar</button>
                </tr>
                
              ))}
            
          
          <button onClick={agregarFila}>Agregar Fila</button>
          
        </thead>


        <tbody></tbody>
      </table>
      <br />
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

export default Form;
