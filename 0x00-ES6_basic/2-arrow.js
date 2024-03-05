  class getNeighborhoodsList{

    constructor(){

      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    };

    addNeighborhood = (newNeighborhood)=>{
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };

  }

  export default getNeighborhoodsList;
  