function age() {
    let SDate = document.getElementById('date').value;
    let SMonth = document.getElementById('month').value;
    let SYear = document.getElementById('year').value;
  
    let date = new Date();
    let Enddate = date.getDate();
    let Endmonth = 1 + date.getMonth();
    let Endyear = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (SDate > Enddate) {
      Enddate = Enddate + month[Endmonth - 1];
      Endmonth = Endmonth - 1;
    }
  
    if (SMonth > Endmonth) {
      Endmonth = Endmonth + 12;
      Endyear = Endyear - 1;
    }
  
    let diffdate = Enddate - SDate;
    let diffmonth = Endmonth - SMonth;
    let diffyear = Endyear - SYear;
  
    document.getElementById('age').innerHTML =
      'Total Age  is: (' +diffyear +') year (' +diffmonth +') Month and (' +diffdate +') Days are Completed Now!';
  
    if (SDate > Enddate || SMonth > Endmonth || SYear > Endyear) {
      alert('Future Date is not validate');
  
      document.getElementById('age').innerHTML = 'Future date not allowed';
    }
  }
