class Pagination {
  constructor(arraySrc, maxNbr){
    this.init(arraySrc, maxNbr);
  }
  generateArray = () => { // Generate new paginated array
    let arrayList = []
    for (let i =0; i < this.arraySrc.length; i=i+this.maxNbr){
      arrayList.push(this.arraySrc.slice(i, i+this.maxNbr));
    }
    this.PaginatedArray = arrayList
  }
  getLastArray = () => { // Last index array getter
    return this.PaginatedArray.length - 1;
  }
  setMaxRow = (nbr) => {
    this.maxNbr = nbr || 5
    this.generateArray()
  }
  setSource = (arr) => {
    this.arraySrc = arr || []
    this.generateArray()
  }
  init = (a, m) => {
    this.arraySrc = a || []
    this.maxNbr = m || 5
    this.generateArray()
  }
}

export default Pagination;