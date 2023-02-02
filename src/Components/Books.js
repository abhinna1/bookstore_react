import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BookServices, {getAllBooks} from '../Services/BookServices';
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
     BookServices.getAllBooks()
     .then(res=>{setBooks(res.data)})
     .catch(e=>{console.log(e)});
  }, []);
  return(
  <Container className="mt-5">
    <h1>Books</h1>
    <ul>
        {books.map((e)=>{
            return (
                <li>e.title</li>
            )
        })}
    </ul>
  </Container>);
};

export default Books;
