import React from 'react'

const Paginado = (dogPorPage, dogsapi, paginado) => {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(dogsapi/dogPorPage); i++){
        pageNumbers.push(i+1)
    }


  return (
            <nav className='container-paginado'>
                <ul className='container-ulista'>
                    { pageNumbers &&
                        pageNumbers.map(number => (
                            <li className='btn-number' key={number}>
                            <button onClick={() => paginado(number)}>{number}</button>
                            </li>
                        ))
                    }
                </ul>

            </nav>
  )
}

export default Paginado