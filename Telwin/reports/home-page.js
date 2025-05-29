const isHomePage = !getReportId();


if(isHomePage){
    const {root, table}  = getRootTable();
    const {schools} = reports

  createSchoolPage(table, root, schools) 
}

