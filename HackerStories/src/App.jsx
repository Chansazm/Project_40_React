import * as React from 'react';

const App = () => {

  const stories = [
    {title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,},
  
    {title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
      }
  ];
  
  return(
    <div>
      <h1 className='heading'>My Hacker Stories</h1>
        
        
      <hr />
      
      <Search/>
      <List3 list={stories}/>
    </div>
  );
  
};

export default App

const List3 = (props)=>(    
      <ul>
  
        {props.list.map( (item) =>(
          <li key={item.objectID}>
            <span><a href={item.url}></a></span>

            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
            {item.title} </li>
          
  ))} 
      </ul>
  );


const Search=()=> {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange=(event)=>{
  
    setSearchTerm(event.target.value);
  };
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  )
  
}


