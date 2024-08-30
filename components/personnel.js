export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/data.json');
    if (!response.ok) {
      throw new Error('Network error');
    }
    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
    return {
      props: {
        data: [], 
        error: 'Failed to fetch data',
      },
    };
  }
}

function Personnel({ data, error }) {
  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Erreur: Les données ne sont pas sous la forme attendue.</div>;
  }

  return (
    <div>
      <h1>Personnel List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.nom} {item.prenom}</li>
        ))}
      </ul>
    </div>
  );
}

export default Personnel