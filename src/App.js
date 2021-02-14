//feature 1
import React from "react";
import data from "./data.json";
import Productjs from "./components/Products";
import Filter from "./components/Filter";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      productsList: data.products,
      size:"",
      sort:"",
    };
  }
  sortProducts = (event) =>{
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) =>({
      sort: sort,
      productsList: this.state.productsList.slice().sort((a,b) =>
        sort === "lowest"?
        a.price>b.price? 1:-1:
        sort === "highest"?
        a.price<b.price? 1:-1:
        a._id<b._id? 1:-1
      ),
    }));
  }
  filterProducts = (event) =>{
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({ size: event.target.value, productsList: data.products });
    }else{
      this.setState({
        size: event.target.value,
        productsList: data.products.filter(
          (productAvailable) => productAvailable.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          　<div className="main">
              <Filter countnum={this.state.productsList.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Productjs productsfunc={this.state.productsList}></Productjs>
            </div>
            <div className="sidebar">
              cart Items
            </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
  }
}

export default App;
