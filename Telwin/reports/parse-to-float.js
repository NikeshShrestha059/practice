const parseToFloat = (object) => {
    const arr = Object.entries(object).map(([key, value]) => {
        return [key, parseFloat(value)]
    })
    return Object.fromEntries(arr);
}

const getRootTable = () => {
    const root = document.querySelector('#root');
    const table = document.createElement('table');
    table.border = 1;
    return {root: root, table: table}
}

const getReportId = () => {
    const url = new URLSearchParams(location.search)
    const isReportPage = url.get('id');
    return isReportPage
}


// const reportTable=(rows, rootElement)=>{
//   const table = document.createElement('table');

//   table.innerHTML = `
//         <thead>
//             <th>Name</th>
//             <th> Science</th>
//             <th>Math</th>
//             <th>english</th>
//             <th>Nepali</th>
//             <th>Enviroment</th>
//             <th>Percentage</th>     
//         </thead>
//         <tbody>
//             ${rows.join("")}
//         </tbody>`
//   rootElement.appendChild(table);
// }

