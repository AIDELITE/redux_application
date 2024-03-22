import React from 'react';
import { useContactsQuery, useContactQuery } from './services/ContactApi';
import './App.css';

function App() {
  const { data, error, isFetching, isLoading, isSuccess} = useContactsQuery();
  return (
    <div className="App">
      <h2>Lets display something here</h2>
      {isLoading &&
        <h2>loading.........</h2>
      }
      {error &&
      <h2>Someing went wrong</h2>
      }
      {isFetching &&
        <h2>...Fetching data please wait...</h2>
      }
      {isSuccess &&
        (
          <div>
            {
              data.map(contact =>{
                return <div key={contact.id}>
                  <h2>{contact.name}</h2>
                  <h2><ContactDetail id={contact.id}/></h2>
                </div>
              })
            }
          </div>
        )
      }
    </div>
  );
}

export const ContactDetail = ({id}: {id:string})=>{
  const { data } = useContactQuery(id);
  return (
    <pre>
      {JSON.stringify(data,undefined,2)}
    </pre>
  )
}

export default App;
