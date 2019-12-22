/**
 * @desc This class is for creating a table pagination from any data list source
 * @author Mandan'i Aina Rivomanana - https://github.com/riv0manana
 */
class Pagination {
  /**
   *
   * @param  arraySrc   Data source array
   * @param  maxNbr     Max row number per page
   */
  constructor(arraySrc, maxNbr) {
    this.init(arraySrc, maxNbr);
  }

  generateArray = () => {
    // Generate pagination array list
    let arrayList = [];
    for (let i = 0; i < this.arraySrc.length; i = i + this.maxNbr) {
      arrayList.push(this.arraySrc.slice(i, i + this.maxNbr));
    }
    this.PaginatedArray = arrayList;
  };

  getLastArray = () => {
    // Get the last page index
    return this.PaginatedArray.length - 1;
  };

  /**
   * @description     Update the numbers of row per page
   * @param {*} nbr   numbers of row per page
   */
  setMaxRow = nbr => {
    this.maxNbr = nbr || 5;
    this.generateArray();
  };

  /**
   * @description     Update Source list array
   * @param {*} arraySrc   Data source array
   */
  setSource = arraySrc => {
    this.arraySrc = arraySrc || [];
    this.generateArray();
  };
  /**
   * @description     Init class
   */
  init = (a, m) => {
    this.arraySrc = a || [];
    this.maxNbr = m || 5;
    this.generateArray();
  };
}

export default Pagination;
