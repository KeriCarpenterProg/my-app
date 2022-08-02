// Styled components version, not needed if using scss

/** 
* Make flexbox grids super easy!
* ---
* @param columns  —  Number of columns
* @param margin  —  Margin with unit
*/

const flexGrid = ({ columns, margin }) => {
    const width = `${100 / columns}%`;
    const unitlessMargin = margin.match(/[\d?.]/g).join('');
    const unit = margin.match(/[a-zA-Z%]+/g).join('');
    const calcMargin = ((unitlessMargin * columns) - unitlessMargin) / columns;
    return (`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &:after {
        flex: auto;
        margin: 0 auto;
        content: "";
      }
      >* {
        width: calc(${width} - ${calcMargin});
        margin-left: ${unitlessMargin / 2}${unit};
        margin-right: ${unitlessMargin / 2}${unit};
        &:nth-child(1) {
          margin-left: 0;
        }
        &:nth-child(${columns}n) {
          margin-right: 0;
        }
        &:nth-child(${columns}n + 1) {
          margin-left: 0;
        }
      }
    `)
  }