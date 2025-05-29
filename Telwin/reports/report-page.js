
const isReportPage = getReportId();

if(isReportPage){
    const {root, table}  = getRootTable();
    const { studentReports} = reports

  createReportsPage(table, root, studentReports[isReportPage]) 
}