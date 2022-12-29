const Welcome = () => {
  const info = {
    nombre: 'Sebastian',
    apellido: 'Sotomayor',
    edad: 25,
  };
  return (
    <>
      <h1>
        Hola mi nombre es: {info.nombre} y mi apellido es: {info['apellido']}
      </h1>
      <h2>Tengo: {info.edad} años</h2>
    </>
  );
};

export default Welcome;
