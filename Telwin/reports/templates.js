const getTableContent = (headers, rows) => {
    return `
        <thead">
        <tr>
            ${headers.map(header => `<th>${header}</th>`).join()}
        </tr>
        </thead>
        <tbody>
        ${rows.join("")}
        </tbody>
    `
}

const createSchoolPage = (table, root, schools) => {
    const rows = schools.map(({name, id}) => {
        return `<tr>
            <td>
                ${name}
            </td>
            <td>
                <a href="?id=${id}">View reports</a>
            </td>
        </tr>`
    })


    table.innerHTML = getTableContent(["School Name", "Action"], rows)


    root.appendChild(table)
}

const createReportsPage = (table, root, reports) => {
    //const reports=studentReports[isReportPage]
    const rows=reports.map((report)=>{
        const {name,science,math: maths,english,nepali,environment} = parseToFloat(report)
        const total = science + maths + english + nepali + environment;
            const percentage = (total /500)*100;
        return `<tr>
            <td>${name}</td>
            <td>${science}</td>
            <td>${maths}</td>
            <td>${english}</td>
            <td>${nepali}</td>
            <td>${environment}</td>
            <td>${percentage.toFixed(1)}%</td>
            </tr>`
        
    });
    console.log(science);
    table.innerHTML = getTableContent(['Name', 'Science', 'Math', 'English', 'Nepali', 'Encironment', 'Percentage'], rows)
    root.appendChild(table)
}