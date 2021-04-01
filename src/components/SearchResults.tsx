
// interface Dima {
//    name: string;
//    age: number;
// }

const SearchResults = ({ children }: any) => {

   console.log(children);

   return (
      <div>
         <h1>Search Results Page</h1>
         <p>sdf</p>

         {children}
      </div>
   )
}

export default SearchResults;
